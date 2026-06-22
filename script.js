// ============================================================================
// WoW Random Character Generator - Main Script
// ============================================================================

// --- CONSTANTS ---
const FADE_OUT_DURATION = 1000;
const MAX_NAME_LENGTH = 12;
const ACCENT_PROBABILITY = 0.2;
const NAME_MIDDLE_PROBABILITY = 0.3;
const GENDER_RANDOM_PROBABILITY = 0.5;

// Removed factionBackgrounds; background no longer changes dynamically per faction.

// --- DOM ELEMENT REFERENCES ---
const raceLock = document.getElementById('raceLock');
const classLock = document.getElementById('classLock');
const serverLock = document.getElementById('serverLock');
const factionIcons = document.getElementById('factionIcons');
const generateBtn = document.getElementById('generateBtn');
const result = document.getElementById('result');
const generateNameCheckbox = document.getElementById('generateName');
const includeAccents = document.getElementById('includeAccents');
const genderSelect = document.getElementById('genderSelect');
const genderContainer = document.getElementById('genderContainer');
const randomAllBtn = document.getElementById('randomAllBtn');
const generationCounter = document.getElementById('counterValue');
const historyBtn = document.getElementById('historyBtn');
const historyPanel = document.getElementById('historyPanel');
const historyList = document.getElementById('historyList');

// --- STATE ---
let selectedFaction = ""; // Empty string = "Any"/"Neutral"
let generationCount = 0;
let characterHistory = []; // Track last 25 characters

// --- IMPORTS ---
import('./assets/js/audiohandler.js');
import { raceNameSyllables, accentedVariants } from './nameData.js';
import { connectedRealms, notConnectedRealms, getRandomServer } from './servers.js';
import { races, factions, classes } from './gameData.js';

const serverList = [...connectedRealms.flat(), ...notConnectedRealms];

// Setup faction icon selection
if (factionIcons) {
  const icons = factionIcons.querySelectorAll('.faction-icon');
  icons.forEach(icon => {
    icon.addEventListener('click', () => {
      // Remove selected from all icons
      icons.forEach(i => i.classList.remove('selected'));
      // Add selected to clicked icon
      icon.classList.add('selected');
      // Update selected faction value
      selectedFaction = icon.getAttribute('data-faction');
      // Update filters
      updateFilters();
      // Play audio
      if (typeof playButtonAudio === 'function') {
        playButtonAudio(0);
      }
    });
  });
}

// Setup history panel toggle
if (historyBtn && historyPanel) {
  historyBtn.addEventListener('click', () => {
    historyPanel.classList.toggle('open');
    if (typeof playButtonAudio === 'function') {
      playButtonAudio(0);
    }
  });
}

// Setup history panel close button
const historyCloseBtn = document.getElementById('historyCloseBtn');
if (historyCloseBtn && historyPanel) {
  historyCloseBtn.addEventListener('click', () => {
    historyPanel.classList.remove('open');
    if (typeof playButtonAudio === 'function') {
      playButtonAudio(0);
    }
  });
}

// Close history panel with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && historyPanel && historyPanel.classList.contains('open')) {
    historyPanel.classList.remove('open');
  }
});

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function showError(message) {
  if (result) {
    result.innerHTML = `<div class="error-message" role="alert">
      <strong>⚠ Error:</strong> ${message}
    </div>`;
  }
  console.error('Generator Error:', message);
}

function updateGenerationCount() {
  generationCount++;
  if (generationCounter) {
    generationCounter.textContent = generationCount;
    generationCounter.parentElement.classList.add('pulse');
    setTimeout(() => {
      if (generationCounter && generationCounter.parentElement) {
        generationCounter.parentElement.classList.remove('pulse');
      }
    }, 500);
  }
  // Store in localStorage
  try {
    localStorage.setItem('wow-rcg-count', generationCount.toString());
  } catch (e) {
    console.warn('Could not save generation count:', e);
  }
}

function loadGenerationCount() {
  try {
    const saved = localStorage.getItem('wow-rcg-count');
    if (saved) {
      generationCount = parseInt(saved, 10) || 0;
      if (generationCounter) {
        generationCounter.textContent = generationCount;
      }
    }
  } catch (e) {
    console.warn('Could not load generation count:', e);
  }
}

// ============================================================================
// CHARACTER HISTORY FUNCTIONS
// ============================================================================

function addToHistory(character) {
  // Keep only last 25 characters
  characterHistory.unshift(character);
  if (characterHistory.length > 25) {
    characterHistory.pop();
  }
  updateHistoryDisplay();
  saveHistory();
}

function updateHistoryDisplay() {
  if (!historyList) return;
  
  historyList.innerHTML = '';
  characterHistory.forEach((char, index) => {
    const item = document.createElement('div');
    item.className = 'history-item';
    
    // Add faction-based class for background styling
    if (char.faction === 'Horde') {
      item.classList.add('horde');
    } else if (char.faction === 'Alliance') {
      item.classList.add('alliance');
    }
    
    // Create character info text for copying
    const charInfo = `${char.name} - ${char.race} ${char.class} (${char.faction}) - ${char.server}`;
    
    item.innerHTML = `
      <div class="history-item-content">
        <div><span class="history-item-label">Name:</span> <span class="history-item-value">${char.name}</span></div>
        <div><span class="history-item-label">Race:</span> <span class="history-item-value">${char.race}</span></div>
        <div><span class="history-item-label">Class:</span> <span class="history-item-value">${char.class}</span></div>
        <div><span class="history-item-label">Faction:</span> <span class="history-item-value">${char.faction}</span></div>
        <div><span class="history-item-label">Server:</span> <span class="history-item-value">${char.server}</span></div>
      </div>
      <button class="history-copy-btn" title="Copy character info">📋</button>
    `;
    
    // Add copy functionality
    const copyBtn = item.querySelector('.history-copy-btn');
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(charInfo);
        copyBtn.textContent = '✓';
        setTimeout(() => {
          copyBtn.textContent = '📋';
        }, 1500);
        if (typeof playButtonAudio === 'function') {
          playButtonAudio(0);
        }
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
    
    historyList.appendChild(item);
  });
}

function saveHistory() {
  try {
    localStorage.setItem('wow-rcg-history', JSON.stringify(characterHistory));
  } catch (e) {
    console.warn('Could not save character history:', e);
  }
}

function loadHistory() {
  try {
    const saved = localStorage.getItem('wow-rcg-history');
    if (saved) {
      characterHistory = JSON.parse(saved);
      updateHistoryDisplay();
    }
  } catch (e) {
    console.warn('Could not load character history:', e);
  }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

// Load saved generation count and history
loadGenerationCount();
loadHistory();

// Populate server dropdown (keep existing options from HTML, add all realms)
if (serverLock) {
  serverList.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    serverLock.appendChild(opt);
  });
}

// ============================================================================
// FILTER FUNCTIONS
// ============================================================================

function updateFilters() {
  // Guard: only run on generator page where dropdowns exist
  if (!raceLock || !classLock) return;

  // selectedFaction is now a global variable
  const selectedRace = raceLock.value;
  const selectedClass = classLock.value;

  // Filter races
  let filteredRaces = races.filter(r => {
    const factionMatch = !selectedFaction || r.faction === selectedFaction || r.faction === "Both";
    const classMatch = !selectedClass || r.classes.includes(selectedClass);
    return factionMatch && classMatch;
  });

  // Populate race dropdown
  raceLock.innerHTML = '<option value="">Any</option>';
  filteredRaces.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r.name;
    opt.textContent = r.name;
    if (r.name === selectedRace) opt.selected = true;
    raceLock.appendChild(opt);
  });

  // Determine valid classes
  let validClasses = [];
  if (selectedRace) {
    const raceObj = races.find(r => r.name === selectedRace);
    validClasses = raceObj.classes;
  } else {
    validClasses = [...new Set(filteredRaces.flatMap(r => r.classes))];
  }

  // Populate class dropdown
  classLock.innerHTML = '<option value="">Any</option>';
  validClasses.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    if (c === selectedClass) opt.selected = true;
    classLock.appendChild(opt);
  });
}

// Initialize filters on page load
updateFilters();

// ============================================================================
// EVENT LISTENERS
// ============================================================================

// Filtering event listeners
if (raceLock) raceLock.addEventListener('change', updateFilters);
if (classLock) classLock.addEventListener('change', updateFilters);

// Show/hide gender when name generation is toggled
if (generateNameCheckbox) {
  generateNameCheckbox.addEventListener('change', () => {
    if (includeAccents) includeAccents.disabled = !generateNameCheckbox.checked;
    if (genderContainer) {
      if (generateNameCheckbox.checked) {
        genderContainer.classList.remove('hidden');
      } else {
        genderContainer.classList.add('hidden');
      }
    }
  });
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Space or G = Generate
  if ((e.code === 'Space' || e.key === 'g' || e.key === 'G') && !e.ctrlKey && !e.altKey && !e.metaKey) {
    // Don't trigger if user is typing in an input/select
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
      return;
    }
    e.preventDefault();
    if (generateBtn) generateBtn.click();
  }
  // R = Random All
  if ((e.key === 'r' || e.key === 'R') && !e.ctrlKey && !e.altKey && !e.metaKey) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
      return;
    }
    e.preventDefault();
    if (randomAllBtn) randomAllBtn.click();
  }
});

// ============================================================================
// CHARACTER GENERATION
// ============================================================================

// Flag to temporarily ignore filters for Random All button
let ignoreFiltersForGeneration = false;

// Random All button - generates ignoring all filters but keeps them set in UI
if (randomAllBtn) {
  randomAllBtn.addEventListener('click', () => {
    // Set flag to ignore filters for this generation only
    // This allows complete randomization while preserving UI filter state
    ignoreFiltersForGeneration = true;
    
    // Trigger generation
    if (generateBtn) generateBtn.click();
    
    // Play audio
    if (typeof playButtonAudio === 'function') {
      playButtonAudio(0);
    }
  });
}

if (generateBtn) generateBtn.addEventListener('click', () => {
  // Play audio immediately (before the delay)
  if (typeof playButtonAudio === 'function') {
    playButtonAudio(0);
  }

  // Read and reset flag immediately so rapid clicks don't interfere
  const shouldIgnoreFilters = ignoreFiltersForGeneration;
  ignoreFiltersForGeneration = false;

  // Start generating animation
  generateBtn.classList.add('generating');
  generateBtn.disabled = true;
  generateBtn.innerHTML = '<span class="btn-icon">⚡</span> Rolling...';

  setTimeout(() => {
    try {
      const selectedRace = shouldIgnoreFilters ? '' : raceLock.value;
      const selectedClass = shouldIgnoreFilters ? '' : classLock.value;
      const selectedGender = shouldIgnoreFilters ? '' : genderSelect.value;
      const effectiveFaction = shouldIgnoreFilters ? '' : selectedFaction;
      const selectedServer = shouldIgnoreFilters ? 'random' : (serverLock ? serverLock.value : "none");

      // Filter races
      let filteredRaces = races.filter(r => {
        const factionMatch = !effectiveFaction || r.faction === effectiveFaction || r.faction === "Both";
        const classMatch = !selectedClass || r.classes.includes(selectedClass);
        return factionMatch && classMatch;
      });

      // Pick race
      const raceObj = selectedRace
        ? races.find(r => r.name === selectedRace)
        : filteredRaces[Math.floor(Math.random() * filteredRaces.length)];

      // Pick class
      const classChoice = selectedClass && raceObj.classes.includes(selectedClass)
        ? selectedClass
        : raceObj.classes[Math.floor(Math.random() * raceObj.classes.length)];

      // Determine faction
      let faction = raceObj.faction;
      if (raceObj.faction === "Both") {
        faction = effectiveFaction || factions[Math.floor(Math.random() * factions.length)].name;
      }

      // Generate name if enabled (or if Random All was clicked)
      let name = "";
      if (generateNameCheckbox.checked || shouldIgnoreFilters) {
        let genderToUse = selectedGender;
        if (!selectedGender) genderToUse = Math.random() < GENDER_RANDOM_PROBABILITY ? "male" : "female";
        name = generateRaceName(raceObj.name, includeAccents.checked, genderToUse);
      }

      // Choose server
      let chosenServer = "";
      if (selectedServer === "none") {
        chosenServer = "";
      } else if (selectedServer === "random") {
        chosenServer = serverList[Math.floor(Math.random() * serverList.length)];
      } else {
        chosenServer = selectedServer;
      }

      // Update generation counter
      updateGenerationCount();

      // Add to character history
      addToHistory({
        name: name || '(No Name)',
        race: raceObj.name,
        class: classChoice,
        faction: faction,
        server: chosenServer || '(No Server)'
      });

      displayResult(faction, raceObj, classChoice, name, chosenServer);
    } catch (error) {
      console.error('Generation error:', error);
      showError('Failed to generate character. Please try again.');
    } finally {
      generateBtn.classList.remove('generating');
      generateBtn.disabled = false;
      generateBtn.innerHTML = '<span class="btn-icon">⚡</span> Generate';
    }
  }, 350);
});

// ============================================================================
// DISPLAY FUNCTIONS
// ============================================================================

function displayResult(faction, raceObj, chosenClass, name, chosenServer) {
  result.innerHTML = '';

  const factionClass = faction === 'Horde' ? 'char-card--horde'
    : faction === 'Alliance' ? 'char-card--alliance'
    : 'char-card--neutral';

  const factionIcon = (factions.find(f => f.name === faction) || {}).icon || '';
  const classKey = (chosenClass || '').replace(/\s+/g, '');
  const classIcon = classes[classKey] || '';

  // --- CARD ---
  const card = document.createElement('div');
  card.className = `char-card ${factionClass}`;

  // --- BANNER ---
  const banner = document.createElement('div');
  banner.className = 'char-card-banner';

  const raceImg = document.createElement('img');
  raceImg.src = raceObj.icon;
  raceImg.alt = raceObj.name;
  raceImg.className = 'char-card-race-img';
  banner.appendChild(raceImg);

  const nameBlock = document.createElement('div');
  nameBlock.className = 'char-card-name-block';

  if (name) {
    const nameRow = document.createElement('div');
    nameRow.className = 'char-card-name';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'char-name';
    nameSpan.textContent = name;
    nameRow.appendChild(nameSpan);

    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'copy-btn';
    copyBtn.title = 'Copy name to clipboard';
    copyBtn.setAttribute('aria-label', 'Copy name to clipboard');
    copyBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect x="9" y="2" width="6" height="3" rx="1" fill="currentColor"></rect><rect x="5" y="6" width="14" height="14" rx="2" fill="currentColor"></rect></svg>`;
    const copiedTip = document.createElement('span');
    copiedTip.className = 'copied-tooltip';
    copiedTip.textContent = 'Copied';
    copyBtn.appendChild(copiedTip);
    copyBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(name);
        } else {
          const ta = document.createElement('textarea');
          ta.value = name;
          ta.style.position = 'fixed';
          ta.style.left = '-9999px';
          document.body.appendChild(ta);
          ta.focus();
          ta.select();
          ta.setSelectionRange(0, ta.value.length);
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
        copyBtn.classList.add('copied');
        setTimeout(() => copyBtn.classList.remove('copied'), 1200);
      } catch (err) {
        console.error('Copy failed', err);
      }
    });
    nameRow.appendChild(copyBtn);
    nameBlock.appendChild(nameRow);
  } else {
    const noName = document.createElement('div');
    noName.className = 'char-card-no-name';
    noName.textContent = 'Unnamed';
    nameBlock.appendChild(noName);
  }

  const subtitle = document.createElement('div');
  subtitle.className = 'char-card-subtitle';
  subtitle.textContent = `${raceObj.name} · ${chosenClass}`;
  nameBlock.appendChild(subtitle);
  banner.appendChild(nameBlock);

  if (factionIcon) {
    const factionBadge = document.createElement('img');
    factionBadge.src = factionIcon;
    factionBadge.alt = faction;
    factionBadge.className = 'char-card-faction-badge';
    banner.appendChild(factionBadge);
  }

  card.appendChild(banner);

  // --- DETAILS ---
  const details = document.createElement('div');
  details.className = 'char-card-details';

  const makeDetailRow = (iconSrc, label, value, selectTargetId, revealIndex) => {
    const row = document.createElement('div');
    row.className = 'char-card-detail-row';
    row.style.setProperty('--reveal-index', revealIndex);

    if (iconSrc) {
      const img = document.createElement('img');
      img.src = iconSrc;
      img.alt = value;
      img.className = 'icon';
      row.appendChild(img);
    }

    const labelEl = document.createElement('span');
    labelEl.className = 'detail-label';
    labelEl.textContent = label;
    row.appendChild(labelEl);

    const valueEl = document.createElement('span');
    valueEl.className = 'detail-value';
    valueEl.textContent = value;
    row.appendChild(valueEl);

    if (selectTargetId) {
      const selBtn = document.createElement('button');
      selBtn.type = 'button';
      selBtn.className = 'select-btn';
      selBtn.title = `Select ${label}`;
      selBtn.setAttribute('aria-label', `Select ${label}`);
      selBtn.textContent = 'Lock';
      selBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (selectTargetId === 'factionLock') {
          const icons = factionIcons.querySelectorAll('.faction-icon');
          icons.forEach(icon => {
            if (icon.getAttribute('data-faction') === value) icon.click();
          });
        } else {
          const target = document.getElementById(selectTargetId);
          if (!target) return;
          const opt = Array.from(target.options).find(o => o.value === value);
          if (!opt) {
            const newOpt = document.createElement('option');
            newOpt.value = value;
            newOpt.textContent = value;
            target.appendChild(newOpt);
          }
          target.value = value;
          target.dispatchEvent(new Event('change', { bubbles: true }));
        }
        selBtn.classList.add('selected');
        setTimeout(() => selBtn.classList.remove('selected'), 900);
      });
      row.appendChild(selBtn);
    }

    return row;
  };

  details.appendChild(makeDetailRow(factionIcon, 'Faction', faction, 'factionLock', 0));
  details.appendChild(makeDetailRow(raceObj.icon, 'Race', raceObj.name, 'raceLock', 1));
  details.appendChild(makeDetailRow(classIcon, 'Class', chosenClass, 'classLock', 2));

  if (chosenServer) {
    const serverRow = document.createElement('div');
    serverRow.className = 'char-card-detail-row';
    serverRow.style.setProperty('--reveal-index', 3);

    const labelEl = document.createElement('span');
    labelEl.className = 'detail-label';
    labelEl.textContent = 'Server';
    serverRow.appendChild(labelEl);

    const nameSpan = document.createElement('span');
    nameSpan.className = 'detail-value server-name';
    nameSpan.style.textDecoration = 'underline';
    nameSpan.style.cursor = 'help';
    nameSpan.textContent = chosenServer;
    serverRow.appendChild(nameSpan);

    const tooltip = document.createElement('div');
    tooltip.className = 'custom-server-tooltip';
    tooltip.style.maxWidth = Math.min(520, Math.floor(window.innerWidth * 0.6)) + 'px';
    tooltip.style.whiteSpace = 'normal';
    const group = connectedRealms.find(g => g.includes(chosenServer));
    if (group) {
      tooltip.innerHTML = '<strong>Connected Realms:</strong><br>' + group.join('<br>');
    } else {
      tooltip.textContent = 'No connected realms';
    }

    let attached = false;
    nameSpan.addEventListener('mouseenter', (e) => {
      tooltip.style.maxWidth = Math.min(520, Math.floor(window.innerWidth * 0.6)) + 'px';
      if (!attached) { document.body.appendChild(tooltip); attached = true; }
      tooltip.style.left = (e.clientX + 12) + 'px';
      tooltip.style.top = (e.clientY + 12) + 'px';
      tooltip.style.visibility = 'visible';
    });
    nameSpan.addEventListener('mousemove', (e) => {
      tooltip.style.left = (e.clientX + 12) + 'px';
      tooltip.style.top = (e.clientY + 12) + 'px';
    });
    nameSpan.addEventListener('mouseleave', () => {
      tooltip.style.visibility = 'hidden';
      if (attached && tooltip.parentElement) tooltip.parentElement.removeChild(tooltip);
      attached = false;
    });

    details.appendChild(serverRow);
  }

  card.appendChild(details);
  result.appendChild(card);
}

// ============================================================================
// NAME GENERATION
// ============================================================================

function generateRaceName(race, withAccents, gender = "") {
  try {
    let syll = raceNameSyllables[race] || raceNameSyllables["Human"];
    
    if (!syll) {
      console.warn(`No syllables found for race: ${race}`);
      return "Hero";
    }

    // Pick syllables depending on gender if defined
    if (gender && syll[gender]) syll = syll[gender];
    else if (syll.any) syll = syll.any;
    
    // Validate syllable structure
    if (!syll.start || !syll.end || syll.start.length === 0 || syll.end.length === 0) {
      console.warn(`Invalid syllable structure for race: ${race}`);
      return "Hero";
    }

  const parts = [randomChoice(syll.start)];
  if (Math.random() > NAME_MIDDLE_PROBABILITY) parts.push(randomChoice(syll.middle));
  parts.push(randomChoice(syll.end));

  let name = parts.join('');
  if (name.length > MAX_NAME_LENGTH) name = name.slice(0, MAX_NAME_LENGTH);
  name = name.charAt(0).toUpperCase() + name.slice(1);

  if (withAccents) name = applyAccents(name);
  return name;
  } catch (error) {
    console.error('Name generation error:', error);
    return "Hero";
  }
}

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function applyAccents(name) {
  return name.split('').map(ch => {
    const lower = ch.toLowerCase();
    if (accentedVariants[lower] && Math.random() < ACCENT_PROBABILITY) {
      const accent = randomChoice(accentedVariants[lower]);
      return ch === lower ? accent : accent.toUpperCase();
    }
    return ch;
  }).join('');
}

// ============================================================================
// PAGE TRANSITIONS
// ============================================================================
function startGeneratorTransition() {
  const overlay = document.getElementById('portalOverlay');
  const logo = document.getElementById('transitionLogo');
  
  if (overlay) {
    // Show logo first
    if (logo) {
      logo.classList.add('show');
    }
    
    // Start fade out after brief delay
    setTimeout(() => {
      overlay.classList.add('fade-out');
      overlay.addEventListener('transitionend', () => {
        window.location.href = 'generator.html';
      }, { once: true });
    }, 300);
  } else {
    window.location.href = 'generator.html';
  }
}
// Expose for inline onclick in portal.html
if (typeof window !== 'undefined') {
  window.startGeneratorTransition = startGeneratorTransition;
}

function startPortalTransition() {
  const overlay = document.getElementById('generatorOverlay');
  const logo = document.getElementById('transitionLogo');
  
  if (overlay) {
    // Show logo first
    if (logo) {
      logo.classList.add('show');
    }
    
    // Start fade out after brief delay
    setTimeout(() => {
      overlay.classList.add('fade-out');
      overlay.addEventListener('transitionend', () => {
        window.location.href = 'portal.html';
      }, { once: true });
    }, 300);
  } else {
    window.location.href = 'portal.html';
  }
}
// Expose for inline onclick in generator.html
if (typeof window !== 'undefined') {
  window.startPortalTransition = startPortalTransition;
}
