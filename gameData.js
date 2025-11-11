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

export { races, factions, classes };
