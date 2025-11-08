// nameData.js
// Large loose-style syllable pools for many playable races.
// Structure: raceName -> { male: { start:[], middle:[], end:[] }, female: { ... } }

export const raceNameSyllables = {
  Human: {
    male: {
      start: [
        "Al","Ber","Cor","Dar","Ed","Fer","Gal","Har","Ian","Jor","Kel","Lor","Mar","Nor","Orr","Pav","Quin","Ran","Sol","Tor","Val","Wes",
        "Ad","Bran","Ced","Dun","Edr","Fend","Garr","Hale","Ivor","Jace","Kellan","Lorn","Mir","Ned","Orin","Perr","Quell","Rhett","Soren","Talen",
        "Tav","Em","Farr","Gide","Harr","Jorv","Kalen","Leof","Merr","Niall","Owen","Perrin","Ruf","Seb","Tyr","Ulfr","Varr","Wynn"
      ],
      middle: [
        "an","er","in","or","el","ar","un","is","en","al","io","ur","ei",
        "as","on","ea","au","yn","ou","es","ai",
        "orv","ean","ion","ad","urv","eanr","iar","eanor"
      ],
      end: [
        "ric","son","mar","wyn","ard","en","as","ian","or","us","on","eth","el",
        "dren","bard","helm","ford","ward","dus","mere","mont",
        "thorne","garde","bain","vorn","ley","riche","dell","merek"
      ]
    },
    female: {
      start: [
        "Ari","Bel","Cel","Dae","Eli","Fae","Gwen","Hara","Il","Jae","Ka","Lia","Mira","Nia","Ola","Pera","Quin","Ria","Sera","Tia","Vera","Wyn",
        "Asha","Bri","Cira","Della","Elin","Fiora","Gala","Hila","Irena","Jora","Kei","Lysa",
        "Maela","Nora","Oriel","Perrin","Rhea","Selle","Talia","Una"
      ],
      middle: [
        "a","e","i","y","ra","la","na","ri","el","en","is","or",
        "ae","io","ua","ya","elle",
        "ara","eon","ella","ine","yra"
      ],
      end: [
        "na","elle","ia","ine","ara","ette","lyn","a","ra","ine","ora",
        "elle","beth","yra","sha","lynne",
        "delle","ria","sa","vera","wynn"
      ]
    }
  },

  Orc: {
    male: {
      start: [
        "Gor","Grum","Drok","Mok","Rok","Kr","Gul","Thr","Zug","Mar","Hru","Kor","Brak","Thok","Naz","Rag","Vor","Kog","Dur","Rak",
        "Ur","Skal","Brug","Lok","Mag","Urz","Grak","Thul","Karn","Zhar",
        "Ghaz","Brok","Krul","Raug","Thokh","Maug","Krag","Drug"
      ],
      middle: [
        "ug","ok","ar","th","ur","ag","ok","og","uk","an",
        "uk","argh","ul","og","ak",
        "ogg","urg","akh","rok","zar"
      ],
      end: [
        "g","gar","ok","nak","tar","grom","mash","rok","th",
        "zug","dakh","gruk","mok","vok",
        "goth","ruk","nakh","ghar","zugh"
      ]
    },
    female: {
      start: [
        "Drak","Mog","Gra","Kor","Sha","Rok","Vek","Zal","Gri","Mor","Tas","Brak","Hra",
        "Yra","Zera","Koa","Bhra","Ora",
        "Maga","Zula","Korra","Thara"
      ],
      middle: [
        "a","o","u","ra","ha","ra","ai",
        "oa","ua","i",
        "ara","oa","e"
      ],
      end: [
        "a","ra","sha","ka","na","ra","i",
        "era","tha","sha",
        "aka","ara","sha"
      ]
    }
  },

  NightElf: {
    male: {
      start: [
        "Syl","Tha","Eri","Lun","Ael","Tyr","Mael","Fen","Vael","Ryn","Orin","Nol","Quel","Ery","Sael","Lor","Myth","Aen",
        "Vaen","Loth","Nael","Sael","Aer","Ith","Cel",
        "Ari","Elen","Fael","Hely","Ithar","Kel","Saer","Tael"
      ],
      middle: [
        "ael","ri","or","el","en","yn","ir","ae","al",
        "iel","orë","aeon",
        "ion","aer","yr","oril"
      ],
      end: [
        "ion","thas","ar","eth","el","is","or","an","ae",
        "wyn","thir","dell","nor",
        "rael","thil","var","norin"
      ]
    },
    female: {
      start: [
        "Elu","Lia","Syl","Ily","Ari","Tala","Nael","Yl","Saer","Illy","Ely","Lae","Myr",
        "Ael","Fae","Lune","Myra","Sael",
        "Auri","Eira","Liora","Naera"
      ],
      middle: [
        "ae","ia","el","or","yn","il","ra",
        "ea","io","aei",
        "iael","ary","elle"
      ],
      end: [
        "a","ara","ia","eth","elle","ara","wyn","ara",
        "isse","ith","iel","ora",
        "yra","ellea","nys","thra"
      ]
    }
  },

  Dwarf: {
    male: {
      start: [
        "Bor","Dur","Thra","Bal","Gim","Bro","Bar","Karg","Dro","Mag","Har","Tor","Fen","Kor","Brun","Rund",
        "Dain","Oin","Thorin","Grim","Brom","Kez","Hald",
        "Garr","Hork","Keld","Mor","Rud","Sten","Torr","Ulf"
      ],
      middle: [
        "an","ur","or","in","ag","ar","im",
        "ain","orv","dar",
        "grim","vald","orin"
      ],
      end: [
        "in","gar","dun","grim","son","rik","thor","nar","mund",
        "stein","hold","bryn","forge",
        "beard","shield","holm","dur"
      ]
    },
    female: {
      start: [
        "Brun","Dori","Gimli","Hilda","Bera","Fina","Helga","Mira","Nora","Runa",
        "Thora","Elda","Brynn",
        "Dagna","Erla","Frida","Hildr"
      ],
      middle: [
        "a","i","o","ur","in","el",
        "ai","ea",
        "ora","ela"
      ],
      end: [
        "a","i","na","eth","a","hild","wyn",
        "dott","bera","drea",
        "dis","hildr","lina"
      ]
    }
  },

  Gnome: {
    male: {
      start: [
        "Fizz","Tink","Giz","Pip","Nim","Bim","Wiz","Cog","Gadget","Mek","Quin","Pix",
        "Zeb","Bix","Rik","Morp","Tazz","Sprocket","Gree","Dax",
        "Fid","Gim","Nex","Zod","Prax","Kip","Snip"
      ],
      middle: [
        "bit","bolt","gear","wrench","spin","pip","tic","zip",
        "nik","ron","ble",
        "zzle","fizz","bot","tick"
      ],
      end: [
        "spark","wick","bot","trix","gear","tron","tic","gle",
        "bop","nix","dle","zzle",
        "tink","whiz","pop","gadget"
      ]
    },
    female: {
      start: [
        "Tink","Pip","Milli","Glim","Fiz","Nix","Pella","Zee","Miri",
        "Lulu","Pippa","Tessa","Molli",
        "Trissa","Belli","Cora","Dilly"
      ],
      middle: [
        "pi","zi","lo","le","li",
        "ella","ora",
        "ette","ina","ia"
      ],
      end: [
        "ette","lyn","ella","ie","ina","elle","etta",
        "belle","delle","nette",
        "bellea","lune","fina"
      ]
    }
  },

  Worgen: {
    male: {
      start: [
        "Fen","Grim","Ul","Har","Kor","Fenr","Ragn","Thal","Mor","Garth","Loth",
        "War","Keth","Bran","Rhul","Vorn",
        "Vale","Hroth","Mord","Skel","Brugh","Vorin"
      ],
      middle: [
        "en","or","ar","un","ur","im",
        "ahn","orv",
        "gar","olm","ern"
      ],
      end: [
        "fang","howl","son","bane","dred","gar","rok",
        "claw","maw","rend","hart",
        "blood","mar","fel","wyn"
      ]
    },
    female: {
      start: [
        "Ly","Fen","Myr","Rha","Sera","Nym","El","Ara","Lia",
        "Mara","Lyra","Vela",
        "Seri","Eira","Kyla","Mysa"
      ],
      middle: [
        "a","e","ia","yn","or",
        "ea","ou",
        "elle","ira"
      ],
      end: [
        "a","lyn","elle","wyn","ra","ia",
        "claw","song","wilde",
        "mae","nys","ara"
      ]
    }
  },

  Draenei: {
    male: {
      start: [
        "Ael","Vae","Sha","Oru","Kaar","Vel","Aan","Im","Tae","Raan",
        "Zae","Esh","Mael","Orun","Laan",
        "Rael","Vaer","Kele","Thae","Ilyr"
      ],
      middle: [
        "aar","el","un","ir","ash","ael",
        "ion","ar","een",
        "eth","aer","ius"
      ],
      end: [
        "dor","dar","on","aar","esh","ir","eth",
        "ius","al","nath",
        "ion","iel","thir"
      ]
    },
    female: {
      start: [
        "Yrel","Ael","Lia","Shae","Va","Ira","Mira","Ola",
        "Kei","Nire","Sael","Vira",
        "Aera","Lira","Mysa","Rae"
      ],
      middle: [
        "ael","ia","el","un","ora",
        "ae","ia",
        "elle","ysa"
      ],
      end: [
        "a","iel","ra","na","eth","ara",
        "elle","ysa","ira",
        "ine","arae"
      ]
    }
  },

  VoidElf: {
    male: {
      start: [
        "Vel","Nyr","Tel","Vyn","Zar","Kyr","Ely","Syr","Nyx","Vael","Cael",
        "Kyre","Zev",
        "Xyr","Nyre","Zhal","Vaer"
      ],
      middle: [
        "ir","el","as","or","ael",
        "yn","ae",
        "oril","eth"
      ],
      end: [
        "is","or","ith","en","al",
        "os","yr","eth",
        "ion","ae","ir"
      ]
    },
    female: {
      start: [
        "Lyr","Ely","Nyra","Vael","Sia","Ily","Nyx","Zia",
        "Rael","Kyla","Syris","Eira"
      ],
      middle: [
        "ae","ia","el","or",
        "yn","ea",
        "ira","elle"
      ],
      end: [
        "a","eth","ia","elle","is",
        "yn","ara",
        "iel","yne"
      ]
    }
  },

  LightforgedDraenei: {
    male: {
      start: [
        "Lor","Ael","Tir","Xen","Val","Sael","Ril","Hael","Morn",
        "Taer","Lyr","Korr"
      ],
      middle: [
        "or","el","an","ir","ae",
        "ion","al"
      ],
      end: [
        "ion","ar","eth","iel","on","ius",
        "arim","dell"
      ]
    },
    female: {
      start: [
        "Ora","Lia","Sera","Ari","Luna","Vael","Sara",
        "Mira","Ena","Isha"
      ],
      middle: [
        "a","ia","el","ra","ae",
        "elle"
      ],
      end: [
        "a","elle","ia","na","ora",
        "iel","aen"
      ]
    }
  },

  "Lightforged Draenei": { // alias with space
    male: {
      start: ["Lor","Ael","Tir","Xen","Val","Sael","Ril"],
      middle: ["or","el","an","ir"],
      end: ["ion","ar","eth","iel","on"]
    },
    female: {
      start: ["Ora","Lia","Sera","Ari","Luna","Vael"],
      middle: ["a","ia","el","ra"],
      end: ["a","elle","ia","na"]
    }
  },

  DarkIronDwarf: {
    male: {
      start: [
        "Mol","Dur","Gor","Thar","Black","Iron","Krag","Brom","Rok","Kul","Mag","Kor",
        "Moln","Durg","Khar","Bolk"
      ],
      middle: [
        "in","ar","or","ur","ag","ok",
        "okh","urv"
      ],
      end: [
        "forge","grim","stone","dun","rik","gar","crag",
        "hold","bar","garde"
      ]
    },
    female: {
      start: ["Bryn","Dora","Mara","Gilda","Vera"],
      middle: ["a","i","ur","el"],
      end: ["a","eth","na","ine"]
    }
  },

  "Dark Iron Dwarf": {
    male: {
      start: ["Mol","Dur","Gor","Thar","Iron","Krag","Brom","Rok","Kul"],
      middle: ["in","ar","or","ur","ag"],
      end:  ["forge","grim","stone","dun","rik","gar"]
    },
    female: {
      start: ["Bryn","Dora","Mara","Gilda","Vera","Kul"],
      middle: ["a","i","ur","el"],
      end:  ["a","eth","na","ine"]
    }
  },

  KulTiran: {
    male: {
      start: [
        "Hal","Kor","Mar","Tyr","Ead","Ror","Bren","Harr","Cal","Derr","Fen",
        "Jor","Leif","Marn"
      ],
      middle: ["wick","son","mar","ard","ley","ton","mere","shore"],
      end:  ["well","ton","ric","son","mar","hold","bay"]
    },
    female: {
      start: ["Tara","Mira","Cora","Lina","Etta","Pira","Hala"],
      middle:["a","e","ia","ri","elle"],
      end:  ["na","elle","ette","ia","wyn"]
    }
  },

  Mechagnome: {
    male: {
      start: ["Cog","Bolt","Unit","Mech","Grix","Plex","Zin","Quin","Tek","Rex","Opt","Hex"],
      middle:["tron","gear","core","tek","matic","oid","sync","volt"],
      end:  ["x","o","ix","ar","bot","core","prime","rix"]
    },
    female: {
      start: ["Tika","Mecha","Pip","Zela","Gigi","Vexa","Lumi"],
      middle:["pi","ka","ti","lo","ra","ra","elle"],
      end:  ["ette","lyn","ina","a","ique","nia"]
    }
  },

  HighmountainTauren: {
    male: {
      start: ["Ban","Gra","Tor","Ruk","Hru","Dru","Kha","Bron","Har","Mok","Gor","Thun","Brek"],
      middle:["horn","hoof","mane","gar","peak","stone","clan"],
      end:  ["walker","caller","son","stag","run","hoof","horn","stride"]
    },
    female: {
      start: ["Asha","Mara","Hara","Sera","Luna","Kara","Tala","Rina"],
      middle:["a","ra","na","ri","ea","ora"],
      end:  ["a","ra","na","elle","wyn","nea"]
    }
  },

  Earthen: {
    male: {
      start: ["Gran","Mol","Dron","Kar","Kor","Bas","Rok","Garn","Ter","Vok","Grund","Thar"],
      middle:["ar","on","ur","ir","ag","en","orn"],
      end:  ["in","stone","gran","bor","khan","um","gar","thor"]
    },
    female: {
      start: ["Gara","Mora","Lina","Bela","Tera","Hela"],
      middle:["a","e","i","ora","elle"],
      end:  ["a","ra","na","elle","ia","ess"]
    }
  },

  Pandaren: {
    male: {
      start: ["Bao","Lin","Mei","Shan","Ping","Wei","Lan","Chi","Tao","Feng","Baoz","Hao"],
      middle:["li","na","ra","fen","do","shi","lun"],
      end:  ["li","mei","to","lin","xin","zhen","bei","min"]
    },
    female: {
      start: ["Mei","Lan","Bao","Xia","Lina","Feng","Hua","Lulu"],
      middle:["a","i","ia","en","yu","ao"],
      end:  ["na","li","ra","mei","a","ling","hua"]
    }
  },

  Dracthyr: {
    male: {
      start: ["Azy","Kry","Veth","Dra","Thal","Ryn","Syth","Vyr","Zer","Oth","Skar","Keth","Ryx"],
      middle:["al","ir","or","eth","en","ael","yr","aal"],
      end:  ["ix","or","on","ar","eth","is","ak","eus","rax"]
    },
    female: {
      start: ["Aza","Vyra","Kara","Syl","Ira","Vela","Thy","Zyra","Arya"],
      middle:["a","i","e","or","al","ya","ara"],
      end:  ["a","ia","is","eth","ra","elle","aer"]
    }
  },

  Troll: {
    male: {
      start: ["Zul","Vol","Rok","Jin","Hex","Tal","Rokh","Zan","Sen","Mal","Riva","Gon","Hek"],
      middle:["a","o","u","ar","an","ul","ok","az"],
      end:  ["jin","zan","gor","tul","tek","gari","zub","rak"]
    },
    female: {
      start: ["Zala","Vela","Roka","Jina","Shal","Zuri","Kela","Safa"],
      middle:["a","o","i","u","ea","ai"],
      end:  ["a","ra","na","sha","ea","sha"]
    }
  },

  BloodElf: {
    male: {
      start: ["Kael","Ther","Lor","Val","Eli","Syl","Ael","Fen","Mael","Sael","Rael","Vaen"],
      middle:["is","en","or","ar","el","ae","ion"],
      end:  ["thas","ien","or","as","iel","ion","ar","thir"]
    },
    female: {
      start: ["Lia","Sera","Kael","Ari","Lysa","Mira","Ely","Saera","Aely","Maera"],
      middle:["a","e","ia","el","is","ae","elle"],
      end:  ["a","elle","ia","ra","is","elle","ria"]
    }
  },

  Undead: {
    male: {
      start: ["Mor","Dar","Var","Nec","Rav","Mal","Kor","Vek","Grav","Than","Mord","Zal"],
      middle:["dus","ven","mor","dar","ul","ek","oth"],
      end:  ["fang","shade","ven","mort","dar","us","grim","bane"]
    },
    female: {
      start: ["Mora","Lera","Vela","Nara","Sel","Eir","Mara","Zera"],
      middle:["a","e","i","el","ae"],
      end:  ["a","ia","na","ra","eth","ine"]
    }
  },

  Goblin: {
    male: {
      start: ["Gaz","Nib","Zix","Razz","Fizz","Snig","Griz","Bok","Rik","Snik","Gazz","Pog"],
      middle:["zap","blast","spark","whiz","zik","fizz","bolt"],
      end:  ["boom","bang","trix","fuse","blast","pip","dock","nik"]
    },
    female: {
      start: ["Giz","Pip","Zaza","Mira","Bixi","Pella","Zori"],
      middle:["pi","zi","ka","zi","le"],
      end:  ["ette","ina","a","belle","ette"]
    }
  },

  Vulpera: {
    male: {
      start: ["Kip","Tiz","Rin","Mek","Nok","Siv","Rok","Vex","Keth","Sori","Fex","Jin"],
      middle:["ta","ri","zi","ra","en","ol","un"],
      end:  ["a","in","ra","zi","o","el","vik","en"]
    },
    female: {
      start: ["Kiri","Tira","Nala","Miri","Sira","Liri","Fira","Kera"],
      middle:["a","i","e","o","ia"],
      end:  ["a","ra","na","elle","lyn","ia"]
    }
  },

  MagharOrc: {
    male: {
      start: ["Gar","Dor","Kru","Rok","Dur","Gor","Zul","Gro","Mok","Hru","Gorv","Thag"],
      middle:["gar","ruk","tar","mok","ug","ak","ugr"],
      end:  ["nak","tar","rok","grom","rug","ok","zug","ghar"]
    },
    female: {
      start: ["Gara","Dora","Kura","Roka","Shara","Mora"],
      middle:["a","o","u","ar","ra"],
      end:  ["a","ra","na","ka","sha","ra"]
    }
  },

  Zandalari: {
    male: {
      start: ["Rast","Zul","Vol","Tal","Daz","Hex","Zan","Ral","Kor","Hek","Yaz","Taz"],
      middle:["ari","jin","zan","goro","ul","tek","khan"],
      end:  ["tek","gath","th","zan","goro","ar","khan","dar"]
    },
    female: {
      start: ["Zala","Rana","Tala","Sera","Nala","Tazi","Kala"],
      middle:["a","i","e","o","u"],
      end:  ["a","ra","na","ia","sha","la"]
    }
  },

  Nightborne: {
    male: {
      start: ["Nar","Seth","Quel","Thal","Lor","Val","Ryn","Kel","Ari","Sael","Eryn","Delyn"],
      middle:["ae","or","in","el","is","al","en","oril"],
      end:  ["or","as","ion","eth","ir","el","ae","irn"]
    },
    female: {
      start: ["Sel","Ly","Aria","Rael","Zia","Mira","Ely","Sael","Nera"],
      middle:["a","e","ia","el","yn","ae","ora"],
      end:  ["a","elle","ia","ra","is","yne","ria"]
    }
  }
};

export const accentedVariants = {
  a: [
    'á','Á','à','À','â','Â','ä','Ä','å','Å','ª','æ','Æ'
  ],
  c: [
    'ç','Ç','œ','Œ'
  ],
  e: [
    'é','É','è','È','ê','Ê','ë','Ë'
  ],
  f: [
    'ƒ'
  ],
  i: [
    'í','Í','ì','Ì','î','Î','ï','Ï'
  ],
  n: [
    'ñ','Ñ'
  ],
  o: [
    'ó','Ó','ò','Ò','ô','Ô','ö','Ö','º'
  ],
  u: [
    'ú','Ú','ù','Ù','û','Û','ü','Ü'
  ],
  y: [
    'ý','Ý','ÿ'
  ]
};
