// --- PORTAL TRANSITION ---
const portalOverlay = document.getElementById('portalOverlay');
const generatorContainer = document.getElementById('generatorContainer');
const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click', () => {
  portalOverlay.classList.add('fade-out');
  setTimeout(() => {
    portalOverlay.classList.add('hidden');
    generatorContainer.classList.remove('hidden');
  }, 1000); // wait for fade-out animation
});

import { raceNameSyllables, accentedVariants } from './nameData.js';
import { connectedRealms, notConnectedRealms, getRandomServer } from './servers.js';
// connectedRealms is now an array of groups (each group = array of connected realms)
const serverList = [...connectedRealms.flat(), ...notConnectedRealms];

// ------------------- DATA -------------------
const races = [
  // Alliance
  { name: "Human", faction: "Alliance", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Death Knight","Paladin"], icon: "icons/races/human.png" },
  { name: "Dwarf", faction: "Alliance", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Death Knight","Paladin","Shaman"], icon: "icons/races/dwarf.png" },
  { name: "Night Elf", faction: "Alliance", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Death Knight","Demon Hunter","Druid"], icon: "icons/races/nightelf.png" },
  { name: "Gnome", faction: "Alliance", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Death Knight"], icon: "icons/races/gnome.png" },
  { name: "Draenei", faction: "Alliance", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Death Knight","Paladin","Shaman"], icon: "icons/races/draenei.png" },
  { name: "Worgen", faction: "Alliance", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Death Knight","Druid"], icon: "icons/races/worgen.png"},
  { name: "Void Elf", faction: "Alliance", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Death Knight"], icon: "icons/races/voidelf.png" },
  { name: "Lightforged Draenei", faction: "Alliance", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Death Knight","Paladin"], icon: "icons/races/lightforgeddraenei.png" },
  { name: "Dark Iron Dwarf", faction: "Alliance", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Death Knight","Paladin","Shaman"], icon: "icons/races/darkirondwarf.png"},
  { name: "Kul Tiran", faction: "Alliance", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Death Knight","Druid","Shaman"], icon: "icons/races/kultiran.png" },
  { name: "Mechagnome", faction: "Alliance", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Death Knight"], icon: "icons/races/mechagnome.png" },

  // Horde
  { name: "Orc", faction: "Horde", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Shaman","Death Knight"], icon: "icons/races/orc.png" },
  { name: "Tauren", faction: "Horde", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Death Knight","Shaman","Druid","Paladin"], icon: "icons/races/tauren.png" },
  { name: "Troll", faction: "Horde", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Death Knight","Shaman","Druid"], icon: "icons/races/troll.png" },
  { name: "Blood Elf", faction: "Horde", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Death Knight","Paladin","Monk","Demon Hunter"], icon: "icons/races/bloodelf.png" },
  { name: "Undead", faction: "Horde", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Death Knight"], icon: "icons/races/undead.png" },
  { name: "Goblin", faction: "Horde", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Death Knight","Shaman"], icon: "icons/races/goblin.png" },
  { name: "Zandalari Troll", faction: "Horde", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Death Knight","Druid","Shaman","Paladin"], icon: "icons/races/zandalaritroll.png" },
  { name: "Vulpera", faction: "Horde", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Shaman","Death Knight"], icon: "icons/races/vulpera.png" },
  { name: "Mag'har Orc", faction: "Horde", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Shaman","Death Knight"], icon: "icons/races/magharorc.png" },
  { name: "Highmountain Tauren", faction: "Horde", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Shaman","Druid","Death Knight"], icon: "icons/races/highmountaintauren.png" },
  { name: "Nightborne", faction: "Horde", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Death Knight"], icon: "icons/races/nightborne.png"},

  // Both factions / special
  { name: "Pandaren", faction: "Both", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Monk","Shaman","Death Knight"], icon: "icons/races/pandaren.png" },
  { name: "Dracthyr", faction: "Both", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Evoker"], icon: "icons/races/dracthyr.png" },
  { name: "Earthen", faction: "Both", classes: ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Shaman","Paladin"], icon: "icons/races/earthen.png" }
];

const factions = [
  { name: "Alliance", icon: "icons/factions/alliance.png" },
  { name: "Horde", icon: "icons/factions/horde.png" }
];

const classes = {
  Warrior: "icons/classes/warrior.png",
  Paladin: "icons/classes/paladin.png",
  Rogue: "icons/classes/rogue.png",
  Mage: "icons/classes/mage.png",
  Priest: "icons/classes/priest.png",
  Warlock: "icons/classes/warlock.png",
  Hunter: "icons/classes/hunter.png",
  Druid: "icons/classes/druid.png",
  Shaman: "icons/classes/shaman.png",
  DeathKnight: "icons/classes/deathknight.png",
  Evoker: "icons/classes/evoker.png",
  DemonHunter: "icons/classes/demonhunter.png",
  Monk: "icons/classes/monk.png"
};

// ------------------- DOM -------------------
const raceLock = document.getElementById('raceLock');
const classLock = document.getElementById('classLock');
const serverLock = document.getElementById('serverLock');
const factionLock = document.getElementById('factionLock');
const generateBtn = document.getElementById('generateBtn');
const result = document.getElementById('result');
const generateNameCheckbox = document.getElementById('generateName');
const includeAccents = document.getElementById('includeAccents');
const genderSelect = document.getElementById('genderSelect');
const genderLabel = document.getElementById('genderLabel');

// Populate faction dropdown
factionLock.innerHTML = '<option value="">Any</option>';
factions.forEach(f => {
  const opt = document.createElement('option');
  opt.value = f.name;
  opt.textContent = f.name;
  factionLock.appendChild(opt);
});

// Populate server dropdown (starts with Random option in HTML)
if (serverLock) {
  // keep existing "Don't Randomize" and "Random Server" options in HTML, then add all realms
  serverList.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    serverLock.appendChild(opt);
  });
}
// ------------------- FILTERS -------------------
function updateFilters() {
  const selectedFaction = factionLock.value;
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

updateFilters();

// Event listeners for filtering
factionLock.addEventListener('change', updateFilters);
raceLock.addEventListener('change', updateFilters);
classLock.addEventListener('change', updateFilters);

// Show/hide gender when name generation is toggled
generateNameCheckbox.addEventListener('change', () => {
  includeAccents.disabled = !generateNameCheckbox.checked;
  if (generateNameCheckbox.checked) {
    genderSelect.classList.remove('hidden');
    genderLabel.classList.remove('hidden');
  } else {
    genderSelect.classList.add('hidden');
    genderLabel.classList.add('hidden');
  }
});

// ------------------- GENERATION -------------------
generateBtn.addEventListener('click', () => {
  const selectedFaction = factionLock.value;
  const selectedRace = raceLock.value;
  const selectedClass = classLock.value;
  const selectedGender = genderSelect.value;
  // "none" = Don't Randomize (default); "random" = pick random; otherwise specific realm
  const selectedServer = serverLock ? serverLock.value : "none";

  // Filter races
  let filteredRaces = races.filter(r => {
    const factionMatch = !selectedFaction || r.faction === selectedFaction || r.faction === "Both";
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
    faction = selectedFaction || factions[Math.floor(Math.random() * factions.length)].name;
  }

  // Generate name if enabled
  let name = "";
  if (generateNameCheckbox.checked) {
    let genderToUse = selectedGender;
    if (!selectedGender) genderToUse = Math.random() < 0.5 ? "male" : "female";
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
});

// ------------------- DISPLAY -------------------
function displayResult(faction, raceObj, chosenClass, name) {
  let html = `
    <div class="result-row icon-row tooltip">
      <img src="${factions.find(f => f.name === faction).icon}" class="icon" alt="${faction}">
      <span><strong>Faction:</strong> ${faction}</span>
      <span class="tooltiptext">${faction} faction</span>
    </div>
    <div class="result-row icon-row tooltip">
      <img src="${raceObj.icon}" class="icon" alt="${raceObj.name}">
      <span><strong>Race:</strong> ${raceObj.name}</span>
      <span class="tooltiptext">${raceObj.name} race</span>
    </div>
    <div class="result-row icon-row tooltip">
      <img src="${classes[chosenClass.replace(/\s+/g, '')]}" class="icon" alt="${chosenClass}">
      <span><strong>Class:</strong> ${chosenClass}</span>
      <span class="tooltiptext">${chosenClass} class</span>
    </div>
  `;

  if (generateNameCheckbox.checked && name) {
    html += `<div class="result-row"><strong>Name:</strong>&nbsp;${name}</div>`;
  }

  result.innerHTML = html;
}

// ------------------- NAME GENERATION -------------------
function generateRaceName(race, withAccents, gender = "") {
  let syll = raceNameSyllables[race] || raceNameSyllables["Human"];

  // Pick syllables depending on gender if defined
  if (gender && syll[gender]) syll = syll[gender];
  else if (syll.any) syll = syll.any;

  const parts = [randomChoice(syll.start)];
  if (Math.random() > 0.3) parts.push(randomChoice(syll.middle));
  parts.push(randomChoice(syll.end));

  let name = parts.join('');
  if (name.length > 12) name = name.slice(0, 12);
  name = name.charAt(0).toUpperCase() + name.slice(1);

  if (withAccents) name = applyAccents(name);
  return name;
}

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function applyAccents(name) {
  return name.split('').map(ch => {
    const lower = ch.toLowerCase();
    if (accentedVariants[lower] && Math.random() < 0.2) {
      const accent = randomChoice(accentedVariants[lower]);
      return ch === lower ? accent : accent.toUpperCase();
    }
    return ch;
  }).join('');
}
