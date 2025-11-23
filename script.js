// ============================================================================
// WoW Random Character Generator - Main Script
// ============================================================================

// --- CONSTANTS ---
const FADE_OUT_DURATION = 1000;
const MAX_NAME_LENGTH = 12;
const ACCENT_PROBABILITY = 0.2;
const NAME_MIDDLE_PROBABILITY = 0.3;
const GENDER_RANDOM_PROBABILITY = 0.5;

const factionBackgrounds = {
  "Alliance": {
    mp4: "assets/img/bg/Shadowlands.mp4",
    webm: "assets/img/bg/Shadowlands.webm",
    poster: "assets/img/bg/Shadowlands.png"
  },
  "Horde": {
    mp4: "assets/img/bg/Shadowlands.mp4",
    webm: "assets/img/bg/Shadowlands.webm",
    poster: "assets/img/bg/Shadowlands.png"
  },
  "Neutral": {
    mp4: "assets/img/bg/Shadowlands.mp4",
    webm: "assets/img/bg/Shadowlands.webm",
    poster: "assets/img/bg/Shadowlands.png"
  }
};

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

// --- STATE ---
let selectedFaction = ""; // Empty string = "Any"/"Neutral"
let generationCount = 0;

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
// INITIALIZATION
// ============================================================================

// Load saved generation count
loadGenerationCount();

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
raceLock.addEventListener('change', updateFilters);
classLock.addEventListener('change', updateFilters);

// Show/hide gender when name generation is toggled
generateNameCheckbox.addEventListener('change', () => {
  includeAccents.disabled = !generateNameCheckbox.checked;
  if (generateNameCheckbox.checked) {
    genderContainer.classList.remove('hidden');
  } else {
    genderContainer.classList.add('hidden');
  }
});

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

generateBtn.addEventListener('click', () => {
  try {
  // Check if we should ignore filters (from Random All button)
  const shouldIgnoreFilters = ignoreFiltersForGeneration;
  ignoreFiltersForGeneration = false; // Reset flag after reading
  
  // selectedFaction is now a global variable from icon selection
  const selectedRace = shouldIgnoreFilters ? '' : raceLock.value;
  const selectedClass = shouldIgnoreFilters ? '' : classLock.value;
  const selectedGender = shouldIgnoreFilters ? '' : genderSelect.value;
  const effectiveFaction = shouldIgnoreFilters ? '' : selectedFaction;
  // "none" = Don't Randomize (default); "random" = pick random; otherwise specific realm
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

  // Choose server depending on selection:
  // - "none" -> do not display server
  // - "random" -> pick a random realm from serverList
  // - specific realm -> use that value
  let chosenServer = "";
  if (selectedServer === "none") {
    chosenServer = "";
  } else if (selectedServer === "random") {
    chosenServer = serverList[Math.floor(Math.random() * serverList.length)];
  } else {
    chosenServer = selectedServer;
  }

  applyFactionBackground(faction);

  // Update generation counter
  updateGenerationCount();

  displayResult(faction, raceObj, classChoice, name);
  // append server to result display
  if (chosenServer) {
    // Build a result row that will show a tooltip of connected realms on cursor
    const serverRow = document.createElement('div');
    serverRow.className = 'result-row';
    serverRow.innerHTML = `<strong>Server:</strong>&nbsp;<span class="server-name">${chosenServer}</span>`;

    // Tooltip element that will follow the cursor
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-server-tooltip';
    // responsive maximum width (will wrap into as many rows as needed)
    tooltip.style.maxWidth = Math.min(520, Math.floor(window.innerWidth * 0.6)) + 'px';
    tooltip.style.whiteSpace = 'normal';

    // find the connected group (if any) and list all realms in that group
    const group = connectedRealms.find(g => g.includes(chosenServer));
    if (group) {
      // include a label and put each realm on its own row
      tooltip.innerHTML = '<strong>Connected Realms:</strong><br>' + group.join('<br>');
    } else {
      tooltip.textContent = 'No connected realms';
    }

    // Show tooltip while hovering and follow cursor
    let attached = false;
    const onMouseEnter = (e) => {
      // adjust width on show so wrapping is consistent
      tooltip.style.maxWidth = Math.min(520, Math.floor(window.innerWidth * 0.6)) + 'px';
      if (!attached) {
        document.body.appendChild(tooltip);
        attached = true;
      }
      tooltip.style.left = (e.clientX + 12) + 'px';
      tooltip.style.top = (e.clientY + 12) + 'px';
      tooltip.style.visibility = 'visible';
    };
    const onMouseMove = (e) => {
      tooltip.style.left = (e.clientX + 12) + 'px';
      tooltip.style.top = (e.clientY + 12) + 'px';
    };
    const onMouseLeave = () => {
      tooltip.style.visibility = 'hidden';
      if (attached && tooltip.parentElement) tooltip.parentElement.removeChild(tooltip);
      attached = false;
    };

    // attach tooltip handlers to the server-name span so it only triggers when hovering the name
    const nameSpan = serverRow.querySelector('.server-name');
    if (nameSpan) {
      nameSpan.style.textDecoration = 'underline';
      nameSpan.style.cursor = 'help';
      nameSpan.addEventListener('mouseenter', onMouseEnter);
      nameSpan.addEventListener('mousemove', onMouseMove);
      nameSpan.addEventListener('mouseleave', onMouseLeave);
    }

    result.appendChild(serverRow);
  }
  } catch (error) {
    console.error('Generation error:', error);
    showError('Failed to generate character. Please try again.');
  }
});

// ============================================================================
// DISPLAY FUNCTIONS
// ============================================================================

function displayResult(faction, raceObj, chosenClass, name) {
  result.innerHTML = '';

  // Helper function to create icon + label rows with optional "Lock" button
  const makeIconRow = (iconSrc, label, value, tooltipText, selectTargetId, showTooltip = false) => {
     const row = document.createElement('div');
     row.className = showTooltip ? 'result-row icon-row tooltip' : 'result-row icon-row';

     if (iconSrc) {
       const img = document.createElement('img');
       img.src = iconSrc;
       img.className = 'icon';
       img.alt = value;
       row.appendChild(img);
     }

     const span = document.createElement('span');
     span.innerHTML = `<strong>${label}:</strong> ${value}`;
     row.appendChild(span);

     if (showTooltip) {
       const tip = document.createElement('span');
       tip.className = 'tooltiptext';
       tip.textContent = tooltipText;
       row.appendChild(tip);
     }

    // add a small select button to auto-select this value in the controls dropdown
    if (selectTargetId) {
      const selBtn = document.createElement('button');
      selBtn.type = 'button';
      selBtn.className = 'select-btn';
      selBtn.title = `Select ${label}`;
      selBtn.setAttribute('aria-label', `Select ${label}`);
      // simple text label so the button reads "Lock"
      selBtn.textContent = 'Lock';

      // click handler: set select value and dispatch change so any listeners run
      selBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Special handling for faction icons
        if (selectTargetId === 'factionLock') {
          // Find and click the appropriate faction icon
          const icons = factionIcons.querySelectorAll('.faction-icon');
          icons.forEach(icon => {
            if (icon.getAttribute('data-faction') === value) {
              icon.click();
            }
          });
        } else {
          // Original dropdown behavior for race/class
          const target = document.getElementById(selectTargetId);
          if (!target) return;
          // only set if option exists; otherwise try to add it
          const opt = Array.from(target.options).find(o => o.value === value);
          if (!opt) {
            const newOpt = document.createElement('option');
            newOpt.value = value;
            newOpt.textContent = value;
            target.appendChild(newOpt);
          }
          target.value = value;
          // dispatch change so UI updates/reactive logic runs
          target.dispatchEvent(new Event('change', { bubbles: true }));
        }

        // visual feedback on button
        selBtn.classList.add('selected');
        setTimeout(() => selBtn.classList.remove('selected'), 900);
      });

      // push button to the far-right of the row
      selBtn.style.marginLeft = 'auto';
      row.appendChild(selBtn);
    }

     return row;
   };
 
   // Faction row (safe icon lookup)
  const factionIcon = (factions.find(f => f.name === faction) || {}).icon || '';
  result.appendChild(makeIconRow(factionIcon, 'Faction', faction, `${faction} faction`, 'factionLock'));
 
   // Race row
  result.appendChild(makeIconRow(raceObj.icon, 'Race', raceObj.name, `${raceObj.name} race`, 'raceLock'));
 
   // Class row (safe icon lookup)
   const classKey = (chosenClass || '').replace(/\s+/g, '');
   const classIcon = classes[classKey] || '';
   result.appendChild(makeIconRow(classIcon, 'Class', chosenClass, `${chosenClass} class`, 'classLock'));
 
   // Name row with copy button (only when a name was provided)
   if (name) {
     const nameRow = document.createElement('div');
     nameRow.className = 'result-row';

    const label = document.createElement('span');
    label.innerHTML = '<strong>Name:</strong>&nbsp;';
    nameRow.appendChild(label);

    const nameSpan = document.createElement('span');
    nameSpan.className = 'char-name';
    nameSpan.textContent = name;
    nameRow.appendChild(nameSpan);

    // small icon-only copy button
    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'copy-btn';
    copyBtn.title = 'Copy name to clipboard';
    copyBtn.setAttribute('aria-label', 'Copy name to clipboard');
    copyBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <rect x="9" y="2" width="6" height="3" rx="1" fill="currentColor"></rect>
        <rect x="5" y="6" width="14" height="14" rx="2" fill="currentColor"></rect>
      </svg>
    `;

    const copiedTip = document.createElement('span');
    copiedTip.className = 'copied-tooltip';
    copiedTip.textContent = 'Copied';
    copyBtn.appendChild(copiedTip);

    // push the copy button to the far right
    copyBtn.style.marginLeft = 'auto';
    nameRow.appendChild(copyBtn);

    const textToCopy = nameSpan.textContent || '';

    copyBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          const ta = document.createElement('textarea');
          ta.value = textToCopy;
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

    result.appendChild(nameRow);
  }
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
// BACKGROUND MANAGEMENT
// ============================================================================

function applyFactionBackground(faction) {
  const bg = document.getElementById('background');
  if (!bg) return;

  const entry = factionBackgrounds[faction];
  if (!entry) {
    // fallback to default Shadowlands background
    if (bg.tagName && bg.tagName.toLowerCase() === 'video') {
      let webmSrc = bg.querySelector('source[type="video/webm"]');
      let mp4Src = bg.querySelector('source[type="video/mp4"]');

      if (!webmSrc) { webmSrc = document.createElement('source'); webmSrc.type = 'video/webm'; bg.appendChild(webmSrc); }
      if (!mp4Src) { mp4Src = document.createElement('source'); mp4Src.type = 'video/mp4'; bg.appendChild(mp4Src); }

      webmSrc.src = 'assets/img/bg/Shadowlands.webm';
      mp4Src.src = 'assets/img/bg/Shadowlands.mp4';

      try { bg.removeAttribute('src'); } catch(e){}
      try { bg.load(); } catch(e){}
      bg.muted = true;
      bg.play().catch(()=>{});
    } else {
      bg.style.backgroundImage = `url("assets/img/bg/Shadowlands.png")`;
      bg.style.backgroundSize = 'cover';
      bg.style.backgroundPosition = 'center';
    }
    return;
  }

  if (bg.tagName && bg.tagName.toLowerCase() === 'video') {
    // ensure sources exist / set them
    let webmSrc = bg.querySelector('source[type="video/webm"]');
    let mp4Src  = bg.querySelector('source[type="video/mp4"]');

    if (!webmSrc) { webmSrc = document.createElement('source'); webmSrc.type = 'video/webm'; bg.appendChild(webmSrc); }
    if (!mp4Src)  { mp4Src  = document.createElement('source'); mp4Src.type  = 'video/mp4';  bg.appendChild(mp4Src); }

    webmSrc.src = entry.webm;
    mp4Src.src  = entry.mp4;

    // remove any direct src attr (use <source>)
    try { bg.removeAttribute('src'); } catch(e){}

    try { bg.load(); } catch(e){}
    bg.muted = true; // autoplay friendly
    bg.play().catch(()=>{});
  } else {
    // element is non-video; set CSS background image (poster)
    bg.style.backgroundImage = `url("${entry.poster}")`;
    bg.style.backgroundSize = 'cover';
    bg.style.backgroundPosition = 'center';
  }
}
