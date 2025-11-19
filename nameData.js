// nameData.js
// Large loose-style syllable pools for many playable races.
// Structure: raceName -> { male: { start:[], middle:[], end:[] }, female: { ... } }

export const raceNameSyllables = {
  Human: {
    male: {
      start: [
        "Al","Ber","Cor","Dar","Ed","Fer","Gal","Har","Ian","Jor","Kel","Lor","Mar","Nor","Orr","Pav","Quin","Ran","Sol","Tor","Val","Wes",
        "Ad","Bran","Ced","Dun","Edr","Fend","Garr","Hale","Ivor","Jace","Kellan","Lorn","Mir","Ned","Orin","Perr","Quell","Rhett","Soren","Talen",
        "Tav","Em","Farr","Gide","Harr","Jorv","Kalen","Leof","Merr","Niall","Owen","Perrin","Ruf","Seb","Tyr","Ulfr","Varr","Wynn",
        "Ar","Lan","Dan","Var","Jon","The","Rob","Sten","Wry","Ter","Eld","Ron","Gar","And","Wil","Ric","Vin"
      ],
      middle: [
        "an","er","in","or","el","ar","un","is","en","al","io","ur","ei",
        "as","on","ea","au","yn","ou","es","ai",
        "orv","ean","ion","ad","urv","eanr","iar","eanor",
        "ald","and","ath","bar","bert","bor","car","der","dor","dric",
        "ed","eld","eric","fred","gar","ger","greg","har","iel","ior",
        "lan","lar","len","lin","lon","mar","mer","mon","mor","nar",
        "net","nor","olf","red","ren","ric","ron","ster","tar","ter",
        "thur","tor","tran","ulf","van","var","ven","ver","vin","win"
      ],
      end: [
        "ric","son","mar","wyn","ard","en","as","ian","or","us","on","eth","el",
        "dren","bard","helm","ford","ward","dus","mere","mont",
        "thorne","garde","bain","vorn","ley","riche","dell","merek",
        "ton","well","brook","vale","stone","wood","field","ville","burg","dale",
        "worth","ham","shire","crest","hold","keep","haven","ridge","bridge","gate",
        "borne","man","der","bert","fred","gram","gard","hart","win","vald",
        "dric","wick","lon","don","nor","vern","tain","dane","thor","mor",
        "gan","van","stan","ran","kan","ban","lan","tan","ven","sen"
      ]
    },
    female: {
      start: [
        "Ari","Bel","Cel","Dae","Eli","Fae","Gwen","Hara","Il","Jae","Ka","Lia","Mira","Nia","Ola","Pera","Quin","Ria","Sera","Tia","Vera","Wyn",
        "Asha","Bri","Cira","Della","Elin","Fiora","Gala","Hila","Irena","Jora","Kei","Lysa",
        "Maela","Nora","Oriel","Perrin","Rhea","Selle","Talia","Una",
        "Ar","Lan","Dan","Var","Jon","The","Al","Bran","Rob","Sten","Mar","Wry","Ter","Eld","Ron","Gar","And","Wil","Ric","Har","Vin"
      ],
      middle: [
        "a","e","i","y","ra","la","na","ri","el","en","is","or",
        "ae","io","ua","ya","elle",
        "ara","eon","ella","ine","yra",
        "bel","ber","cil","da","de","di","dor","dra","ea","eli",
        "er","eth","ian","iel","il","in","isa","len","lia","lin",
        "lon","lor","lys","ma","mer","mir","ndr","nel","ner","ni",
        "nor","ola","oli","ona","ori","os","ros","sa","sel","sil",
        "tha","thel","tri","val","vel","ver","via","wen","win","wyn"
      ],
      end: [
        "na","elle","ia","ine","ara","ette","lyn","a","ra","ine","ora",
        "elle","beth","yra","sha","lynne",
        "delle","ria","sa","vera","wynn",
        "belle","line","rielle","anne","andra","endra","ondra","essa","issa","ossa",
        "elle","ielle","uelle","aelle","da","dra","la","lea","lia","lina",
        "mira","nora","dora","lia","nia","via","wyn","win","wen","len",
        "sera","thea","thia","tia","dia","fia","gia","mia","pia","zia",
        "rose","mae","rae","fae","dae","sae","tae","vae","leigh","lynn"
      ]
    }
  },

  Orc: {
    male: {
      start: [
        "Gor","Grum","Drok","Mok","Rok","Kr","Gul","Thr","Zug","Mar","Hru","Kor","Brak","Thok","Naz","Rag","Vor","Kog","Dur","Rak",
        "Ur","Skal","Brug","Lok","Mag","Urz","Grak","Thul","Karn","Zhar",
        "Ghaz","Brok","Krul","Raug","Thokh","Maug","Krag","Drug",
        "Tar","Grom","Gar","Zul","Gol","Rog","Thrall","Krom","Nar","Zog","Drak","Bor"
      ],
      middle: [
        "ug","ok","ar","th","ur","ag","ok","og","uk","an",
        "uk","argh","ul","og","ak",
        "ogg","urg","akh","rok","zar",
        "ath","ath","bor","dak","dash","gak","gash","gok","gol","grath",
        "grish","grum","guk","kar","kosh","krag","mak","mog","mosh","nag",
        "nakh","rath","ruk","shak","shar","tagh","thak","thog","ugath","ugg",
        "ukk","urk","ush","vok","zak","zog","zuk","drog","ghar","khor"
      ],
      end: [
        "g","gar","ok","nak","tar","grom","mash","rok","th",
        "zug","dakh","gruk","mok","vok",
        "goth","ruk","nakh","ghar","zugh",
        "ash","bak","bane","bash","blood","bone","crush","doom","fang","gore",
        "grim","grind","hammer","howl","kahn","kill","maul","rage","reaver","rend",
        "ripper","roar","scar","skull","slash","slayer","smash","spike","splitter","thrasher",
        "tusk","wrath","gul","dan","kar","kor","lok","mal","nor","rak","thak","zar"
      ]
    },
    female: {
      start: [
        "Drak","Mog","Gra","Kor","Sha","Rok","Vek","Zal","Gri","Mor","Tas","Brak","Hra",
        "Yra","Zera","Koa","Bhra","Ora",
        "Maga","Zula","Korra","Thara",
        "Grum","Lok","Tar","Grom","Gar","Mok","Zul","Ur","Thok","Gol","Dur","Rog","Rag"
      ],
      middle: [
        "a","o","u","ra","ha","ra","ai",
        "oa","ua","i",
        "ara","oa","e",
        "ag","ak","ar","ash","ath","au","ek","ga","gha","go",
        "gor","gra","ka","kar","ko","kra","ma","mag","mor","na",
        "nak","og","rag","rok","sha","tar","tha","za","zar","zha"
      ],
      end: [
        "a","ra","sha","ka","na","ra","i",
        "era","tha","sha",
        "aka","ara","sha",
        "ga","gha","gra","ha","ja","kha","la","ma","oga","oka",
        "ona","ora","rga","rka","rna","ta","tha","tka","va","ya",
        "za","zha","zka","zna","zra","shra","gara","kara","mara","zara"
      ]
    }
  },

  NightElf: {
    male: {
      start: [
        "Syl","Tha","Eri","Lun","Ael","Tyr","Mael","Fen","Vael","Ryn","Orin","Nol","Quel","Ery","Sael","Lor","Myth","Aen",
        "Vaen","Loth","Nael","Sael","Aer","Ith","Cel",
        "Ari","Elen","Fael","Hely","Ithar","Kel","Saer","Tael",
        "Ae","Lan","Thir","Drae","Sil","Vel","El","Raen","Del","Morn","Va","Shan","Li","An","Thal","Dal","Il","Ar","Mir","Sun"
      ],
      middle: [
        "ael","ri","or","el","en","yn","ir","ae","al",
        "iel","orë","aeon",
        "ion","aer","yr","oril",
        "and","ath","dor","dras","dur","elor","end","eor","eth","far",
        "fel","fin","for","gan","gar","gol","hal","idor","ilr","ios",
        "lad","lan","las","lor","mael","mar","mas","mor","nad","nal",
        "nor","ond","orath","orn","os","ran","ras","reth","ros","sil",
        "sul","tal","than","thel","thor","tor","thas","val","var","ven"
      ],
      end: [
        "ion","thas","ar","eth","el","is","or","an","ae",
        "wyn","thir","dell","nor",
        "rael","thil","var","norin",
        "adan","alas","anar","andor","anel","anthas","aran","arias","aros","ashal",
        "ashar","ashir","assas","dain","danar","daros","delan","doral","dorath","dras",
        "ellas","elor","eron","falas","falon","faron","gol","gorath","hadros","halar",
        "helion","ilon","indis","las","lassir","lon","maelon","maeron","nadal","nalan",
        "nalor","naris","nos","onas","randor","riel","rion","ros","salar","salor"
      ]
    },
    female: {
      start: [
        "Elu","Lia","Syl","Ily","Ari","Tala","Nael","Yl","Saer","Illy","Ely","Lae","Myr",
        "Ael","Fae","Lune","Myra","Sael",
        "Auri","Eira","Liora","Naera",
        "Ae","Lan","Thir","Drae","Sil","Vel","Lun","El","Raen","Quel","Lor","Del","Morn","Va","Shan","Li","An","Thal","Dal","Il","Ar","Mir","Sun"
      ],
      middle: [
        "ae","ia","el","or","yn","il","ra",
        "ea","io","aei",
        "iael","ary","elle",
        "adr","ael","al","an","ar","ara","ath","dor","dra","eli",
        "en","endra","eri","eth","eth","far","fel","fyn","gra","hal",
        "ian","idr","iel","ila","in","ind","ior","ir","is","ith",
        "lad","lan","las","len","lin","lor","lun","lyr","mai","mar",
        "myr","nad","nal","nis","nys","rad","ral","ran","res","ril"
      ],
      end: [
        "a","ara","ia","eth","elle","ara","wyn","ara",
        "isse","ith","iel","ora",
        "yra","ellea","nys","thra",
        "adra","aena","aia","ala","alia","andra","antha","ara","ariel","aris",
        "assa","atha","dora","dra","driel","ea","ela","elara","elena","elia",
        "ellia","ellora","ena","endra","era","essa","etha","ethil","ia","idra",
        "ila","ina","indra","iora","ira","is","issa","issia","itha","lana",
        "lara","las","lea","lia","llara","lora","luna","lyra","mara","nara"
      ]
    }
  },

  Dwarf: {
    male: {
      start: [
        "Bor","Dur","Thra","Bal","Gim","Bro","Bar","Karg","Dro","Mag","Har","Tor","Fen","Kor","Brun","Rund",
        "Dain","Oin","Thorin","Grim","Brom","Kez","Hald",
        "Garr","Hork","Keld","Mor","Rud","Sten","Torr","Ulf",
        "Brum","Gor","Kar","Grin","Khar","Dol","Ul","Gro","Nor","Farg","Drin","Dwal","Thrain","Bel"
      ],
      middle: [
        "an","ur","or","in","ag","ar","im",
        "ain","orv","dar",
        "grim","vald","orin",
        "ald","aldr","and","bald","bar","barl","bor","brom","dain","dor",
        "drak","drum","dun","dur","far","farg","gal","gar","gimr","gnar",
        "gor","gord","gorn","gram","grin","grom","grun","kar","karn","kor",
        "lad","mund","nar","nir","nor","rak","ram","ran","rim","rom",
        "sten","thain","thar","thor","tor","torm","trom","tror","uld","vorn"
      ],
      end: [
        "in","gar","dun","grim","son","rik","thor","nar","mund",
        "stein","hold","bryn","forge",
        "beard","shield","holm","dur",
        "ak","aldr","an","ar","axe","bak","bal","bane","bar","bash",
        "blast","blood","bold","bore","born","brak","brand","breaker","brim","bronze",
        "crusher","delver","digger","dor","drake","drum","fist","flame","fyr","gard",
        "grim","guard","hammer","helm","horn","iron","kar","keld","kor","kun",
        "mane","mine","miner","nor","ram","rock","runner","skar","smith","spike"
      ]
    },
    female: {
      start: [
        "Brun","Dori","Gimli","Hilda","Bera","Fina","Helga","Mira","Nora","Runa",
        "Thora","Elda","Brynn",
        "Dagna","Erla","Frida","Hildr",
        "Dur","Brum","Thar","Gor","Bal","Mor","Kar","Tor","Gim","Bar","Grin","Bor","Khar","Dol","Ul","Gro","Nor","Farg","Drin","Dwal","Thrain","Bel"
      ],
      middle: [
        "a","i","o","ur","in","el",
        "ai","ea",
        "ora","ela",
        "ald","aldr","ara","bel","bor","brun","da","dor","dra","el",
        "eld","en","er","gal","gar","gil","gund","hel","hild","ia",
        "il","ild","ir","la","lin","lis","lor","ma","mel","na",
        "nal","nor","ol","ond","or","ot","ra","ran","ril","rin",
        "run","ta","tin","tor","trud","ul","un","va","val","vild"
      ],
      end: [
        "a","i","na","eth","a","hild","wyn",
        "dott","bera","drea",
        "dis","hildr","lina",
        "ara","bera","bor","da","di","dis","dora","dra","dris","ella",
        "en","era","eth","ga","gard","gerd","gil","grim","guard","gundr",
        "helm","hild","ia","il","in","ina","is","la","lei","lin",
        "linda","lis","lith","lotte","na","nis","nna","nora","ra","reth",
        "ri","ril","rin","ris","run","runa","ta","thea","tild","trud","va"
      ]
    }
  },

  Gnome: {
    male: {
      start: [
        "Fizz","Tink","Giz","Pip","Nim","Bim","Wiz","Cog","Gadget","Mek","Quin","Pix",
        "Zeb","Bix","Rik","Morp","Tazz","Sprocket","Gree","Dax",
        "Fid","Gim","Nex","Zod","Prax","Kip","Snip",
        "Mil","Wil","Bin","Fin","Tri","Nix","Flix","Zix","Dib","Fib","Ril","Nil","Kil","Lil","Bil","Zip"
      ],
      middle: [
        "bit","bolt","gear","wrench","spin","pip","tic","zip",
        "nik","ron","ble",
        "zzle","fizz","bot","tick",
        "beep","bleep","bloink","boing","buzz","chip","chron","circuit",
        "clank","click","dink","flip","fuse","gad","giga","glitch","hertz",
        "jack","jet","link","mech","mega","micro","nano","node","plunk","pulse",
        "quirk","rivet","robo","spark","sproc","steam","switch","tech","tinker","turbo",
        "tweak","wire","zap","zoom"
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
        "Trissa","Belli","Cora","Dilly",
        "Giz","Mil","Wil","Bin","Fin","Tri","Bix","Pix","Flix","Mek","Zix","Dib","Fib","Ril","Nil","Kil","Lil","Bil","Zip","Nim"
      ],
      middle: [
        "pi","zi","lo","le","li",
        "ella","ora",
        "ette","ina","ia"
      ],
      end:  ["ette","lyn","ella","ie","ina","elle","etta",
        "belle","delle","nette",
        "bellea","lune","fina",
        "anne","ara","beth","bloom","blossom","bright","chime","click","cog","crystal",
        "dee","dew","doodle","elli","emblem","etta","fae","fiddle","flame","flora",
        "gear","gem","giddy","glee","glim","glitter","ia","ie","illi","ina",
        "jinx","joy","la","lea","lee","lei","lia","light","lil","line",
        "lis","lita","lune","mia","nia","penny","pie","pop","ra","shine","spark"
      ]
    }
  },

  Worgen: {
    male: {
      start: [
        "Fen","Grim","Ul","Har","Kor","Fenr","Ragn","Thal","Mor","Garth","Loth",
        "War","Keth","Bran","Rhul","Vorn",
        "Vale","Hroth","Mord","Skel","Brugh","Vorin",
        "Grey","Fur","Moon","Howl","Claw","Fang","Lyc","Wol","Dark","Night","Genn","Tal","Rook","Sha","Maw","Snarl","Growl","Bark","Lup","Lun","Shad"
      ],
      middle: [
        "en","or","ar","un","ur","im",
        "ahn","orv",
        "gar","olm","ern",
        "and","ash","ath","bane","blood","claw","dar","dor","drak","dread",
        "eth","fang","fel","fen","fur","gall","grey","grim","growl","har",
        "howl","hun","kan","kor","lor","loth","lycan","moon","mor","mord",
        "night","nor","rak","ran","rav","red","ren","rook","scar","shad",
        "snarl","thorn","tor","ulv","van","var","ven","vor","wol","wolf"
      ],
      end: [
        "fang","howl","son","bane","dred","gar","rok",
        "claw","maw","rend","hart",
        "blood","mar","fel","wyn",
        "ash","beast","bite","blade","blood","bone","breath","claw","curse","dark",
        "death","doom","dread","eye","fang","fear","fel","fenrir","fur","gore",
        "grey","grim","growl","guard","heart","hide","horn","howl","hunt","hunter",
        "jaw","kill","mane","maul","moon","night","pack","paw","rage","ravage",
        "ripper","scar","shadow","slayer","snarl","soul","stalker","storm","strike","tooth",
        "track","walker","watcher","wilde","wolf","wrath"
      ]
    },
    female: {
      start: [
        "Ly","Fen","Myr","Rha","Sera","Nym","El","Ara","Lia",
        "Mara","Lyra","Vela",
        "Seri","Eira","Kyla","Mysa",
        "Grey","Fur","Moon","Howl","Claw","Fang","Lyc","Wol","Dark","Night","Genn","Tal","Rook","Sha","Maw","Snarl","Growl","Bark","Lup","Lun","Shad"
      ],
      middle: [
        "a","e","ia","yn","or",
        "ea","ou",
        "elle","ira",
        "an","ar","ash","bane","blood","claw","dark","dra","dread","el",
        "en","eth","fang","fel","fen","fur","grey","grim","howl","il",
        "lyn","moon","night","ra","rav","ren","scar","shad","snarl","wyn"
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
        "Rael","Vaer","Kele","Thae","Ilyr",
        "Ak","Velen","Dra","Naru","Aal","Raa","Tal","Iri","Yrel","Mara","Adal","Exo","Har","Dal","Mal","Sal","Kel","Del","Val","Lor","Tel"
      ],
      middle: [
        "aar","el","un","ir","ash","ael",
        "ion","ar","een",
        "eth","aer","ius",
        "ad","adal","ael","aen","aer","al","alar","anar","ar","aran",
        "ath","daal","dal","dar","den","dor","dral","dur","eel","ein",
        "el","elar","en","eon","er","eth","exo","hal","iar","iel",
        "ion","ior","ir","irus","ius","kaar","kel","lor","maar","mal",
        "mael","nar","naar","oor","or","rael","ral","raan","sal","saar",
        "tal","taar","thal","thel","uel","uur","val","vaar","vel","xar","zaar"
      ],
      end: [
        "dor","dar","on","aar","esh","ir","eth",
        "ius","al","nath",
        "ion","iel","thir",
        "adal","adar","ador","aen","aeon","aer","al","alar","an","anar",
        "ar","aran","ath","dal","dor","dral","dur","eel","el","elar",
        "en","eon","er","eron","eth","eus","hal","iel","ior","ir",
        "is","ius","kael","laan","lor","mael","mus","naal","nath","nor",
        "on","or","os","raan","rael","rus","taal","thar","uel","uur","vaan","xen"
      ]
    },
    female: {
      start: [
        "Yrel","Ael","Lia","Shae","Va","Ira","Mira","Ola",
        "Kei","Nire","Sael","Vira",
        "Aera","Lira","Mysa","Rae",
        "Ak","Velen","Dra","Naru","Aal","Raa","Tal","Iri","Mara","Adal","Exo","Har","Dal","Mal","Sal","Kel","Del","Val","Lor","Rael","Tel"
      ],
      middle: [
        "ael","ia","el","un","ora",
        "ae","ia",
        "elle","ysa",
        "ada","adal","ael","aen","aer","al","ala","an","ara","dal",
        "dar","dra","ea","el","ela","en","era","eth","hal","iar",
        "iel","il","ina","ion","ira","ius","lor","mal","mir","naa",
        "nar","nel","or","ora","rael","ral","raa","sal","tal","tha",
        "thal","thel","vel","vir","xar","ysa","zel"
      ],
      end: [
        "a","iel","ra","na","eth","ara",
        "elle","ysa","ira",
        "ine","arae",
        "ada","adra","ael","aen","aera","ala","ana","andra","ara","dara",
        "dra","ea","ela","elena","ella","elle","en","ena","era","essa",
        "eth","etha","ia","iel","ila","ina","ine","ira","is","la",
        "lana","lea","lia","lora","mara","mira","na","nara","nira","ra",
        "rael","rala","rana","riel","sa","sara","sel","tala","vela","vira","xara","ysa"
      ]
    }
  },

  VoidElf: {
    male: {
      start: [
        "Vel","Nyr","Tel","Vyn","Zar","Kyr","Ely","Syr","Nyx","Vael","Cael",
        "Kyre","Zev",
        "Xyr","Nyre","Zhal","Vaer",
        "Ae","Lan","Thir","Drae","Sil","Lun","El","Raen","Quel","Lor","Del","Morn","Va","Shan","Li","Syl","An","Thal","Dal","Il","Ar","Mir","Sun"
      ],
      middle: [
        "ir","el","as","or","ael",
        "yn","ae",
        "oril","eth",
        "ael","aer","al","an","ar","as","ath","dar","dor","dras",
        "el","en","er","eth","hal","ir","is","ith","las","lor",
        "mor","nyx","or","os","ral","ren","ril","ros","shar","sil",
        "thas","thor","var","vel","ven","vor","xal","xar","xen","yn",
        "yr","zal","zar","zen","zhal","zhor"
      ],
      end: [
        "is","or","ith","en","al",
        "os","yr","eth",
        "ion","ae","ir",
        "adow","aeon","akar","al","alas","an","anar","ar","aros","as",
        "ath","dar","dor","dras","el","en","eon","er","eth","hal",
        "ion","ir","is","ith","las","lor","nyx","on","or","os",
        "ral","ras","ren","rion","ros","rus","thas","thor","us","var",
        "vel","ven","vor","xal","xen","yn","yr","zar","zor"
      ]
    },
    female: {
      start: [
        "Lyr","Ely","Nyra","Vael","Sia","Ily","Nyx","Zia",
        "Rael","Kyla","Syris","Eira",
        "Ae","Lan","Thir","Drae","Sil","Vel","Lun","El","Raen","Quel","Lor","Del","Morn","Va","Shan","Li","Syl","An","Thal","Dal","Il","Ar","Mir","Sun"
      ],
      middle: [
        "ae","ia","el","or",
        "yn","ea",
        "ira","elle",
        "adow","ael","aer","al","an","ar","as","ath","dar","dor","dra",
        "el","ella","en","er","eth","hal","ia","iel","il","in",
        "ir","is","ith","las","lor","nyx","or","os","ra","ral",
        "ren","ril","ros","shar","sil","thas","var","vel","ven","vor",
        "xal","yn","yr","zal","zar","zen","zhal"
      ],
      end: [
        "a","eth","ia","elle","is",
        "yn","ara",
        "iel","yne",
        "adow","ae","aen","aera","al","ala","an","andra","ara","as","ath",
        "dar","dra","ea","el","ela","elle","en","era","eth","etha",
        "ia","iel","ila","in","ina","ir","ira","is","issa","ith",
        "la","las","lea","lia","lor","nyx","nyxia","or","ora","os",
        "ra","ral","ren","ria","riel","ril","ros","sil","var","vel","via",
        "xara","yn","yne","yr","yra","zal","zara","zen","zhal","zira"
      ]
    }
  },

  LightforgedDraenei: {
    male: {
      start: [
        "Lor","Ael","Tir","Xen","Val","Sael","Ril","Hael","Morn",
        "Taer","Lyr","Korr",
        "Lum","Sol","Tal","Vind","Era","Xer","Ara","Nar","Irid","Hal","Ser","Lar","Tuur","Ador","Faol","Aldor","Aru","Sola","Telu","Loth","Kar"
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
        "Mira","Ena","Isha",
        "Lum","Sol","Tal","Vind","Era","Xer","Ara","Nar","Irid","Hal","Ser","Lar","Tuur","Ador","Faol","Aldor","Aru","Sola","Telu","Xen","Loth","Kar"
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
      start: ["Lor","Ael","Tir","Xen","Val","Sael","Ril",
        "Lum","Sol","Tal","Vind","Era","Xer","Ara","Nar","Irid","Hal","Ser","Lar","Tuur","Ador","Faol","Aldor","Aru","Sola","Telu","Loth","Kar"],
      middle: ["or","el","an","ir"],
      end: ["ion","ar","eth","iel","on"]
    },
    female: {
      start: ["Ora","Lia","Sera","Ari","Luna","Vael",
        "Lum","Sol","Tal","Vind","Era","Xer","Ara","Nar","Irid","Hal","Ser","Lar","Tuur","Ador","Faol","Aldor","Aru","Sola","Telu","Xen","Loth","Kar"],
      middle: ["a","ia","el","ra"],
      end: ["a","elle","ia","na"]
    }
  },

  DarkIronDwarf: {
    male: {
      start: [
        "Mol","Dur","Gor","Thar","Black","Iron","Krag","Brom","Rok","Kul","Mag","Kor",
        "Moln","Durg","Khar","Bolk",
        "Dark","Anvil","Sulf","Rag","Core","Thaur","Grim","Flam","Forge","Bar","Doom","Gol","Kaz","Thal","Drak","Bael","Moth","Grin"
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
      start: ["Bryn","Dora","Mara","Gilda","Vera",
        "Dark","Mol","Anvil","Sulf","Rag","Core","Thaur","Grim","Flam","Forge","Iron","Mag","Bar","Doom","Gol","Kaz","Thal","Drak","Bael","Moth","Grin","Thar"],
      middle: ["a","i","ur","el"],
      end: ["a","eth","na","ine"]
    }
  },

  "Dark Iron Dwarf": {
    male: {
      start: ["Mol","Dur","Gor","Thar","Iron","Krag","Brom","Rok","Kul",
        "Dark","Anvil","Sulf","Rag","Core","Thaur","Grim","Flam","Forge","Mag","Bar","Doom","Gol","Kaz","Thal","Drak","Bael","Moth","Grin"],
      middle: ["in","ar","or","ur","ag"],
      end:  ["forge","grim","stone","dun","rik","gar"]
    },
    female: {
      start: ["Bryn","Dora","Mara","Gilda","Vera","Kul",
        "Dark","Mol","Anvil","Sulf","Rag","Core","Thaur","Grim","Flam","Forge","Iron","Mag","Bar","Doom","Gol","Kaz","Thal","Drak","Bael","Moth","Grin","Thar"],
      middle: ["a","i","ur","el"],
      end:  ["a","eth","na","ine"]
    }
  },

  KulTiran: {
    male: {
      start: [
        "Hal","Kor","Mar","Tyr","Ead","Ror","Bren","Harr","Cal","Derr","Fen",
        "Jor","Leif","Marn",
        "Kul","Tide","Ford","Storm","Drus","Nor","Way","Cres","Flet","Har","Kath","Proud","Ash","Fay","Dale","Boral","Tir","Asha","Ros","Fal","Glen"
      ],
      middle: ["wick","son","mar","ard","ley","ton","mere","shore"],
      end:  ["well","ton","ric","son","mar","hold","bay"]
    },
    female: {
      start: ["Tara","Mira","Cora","Lina","Etta","Pira","Hala",
        "Kul","Tide","Ford","Storm","Drus","Nor","Way","Cres","Flet","Har","Kath","Proud","Mar","Ash","Fay","Dale","Boral","Tir","Asha","Ros","Fal","Glen"],
      middle:["a","e","ia","ri","elle"],
      end:  ["na","elle","ette","ia","wyn"]
    }
  },

  Mechagnome: {
    male: {
      start: ["Cog","Bolt","Unit","Mech","Grix","Plex","Zin","Quin","Tek","Rex","Opt","Hex",
        "Giga","Volt","Sprock","Gear","Mecha","Nano","Dyna","Servo","Rust","Jolt","Cyber","Fus","Hertz","Tinker","Diode","Crank","Tech","Rotor"],
      middle:["tron","gear","core","tek","matic","oid","sync","volt",
        "beep","blast","bolt","bore","bot","brain","byte","charge","chip","chrome",
        "circuit","clank","click","cog","compute","cyber","data","digit","droid",
        "engine","flux","forge","frame","fuse","gad","giga","grid","gyro",
        "hack","hertz","hub","hydro","ion","jet","link","logic","mach",
        "mech","mega","metal","micro","nano","neuro","node","piston","plasma",
        "plex","power","prime","proto","pulse","quantum","rivet","robo","rocket","servo",
        "spark","sproc","steam","tech","tinker","titan","turbo","ultra","volt","wire","zap","zoom"],
      end:  ["x","o","ix","ar","bot","core","prime","rix",
        "beam","blast","bolt","bot","brain","byte","cast","charge","chip","chrome",
        "cog","compute","con","core","craft","cron","dex","droid","dron","eer",
        "forge","frame","fuse","gadget","gear","gon","grid","guard","helm","hub",
        "ix","jet","keeper","kin","link","lock","logic","mancer","matic","max",
        "mech","mind","mor","naut","nik","nix","node","nog","o","oid",
        "on","plex","pod","prime","punk","rex","rix","ron","runner","servo",
        "smith","spark","stream","tek","tick","ton","tonic","tron","tus","us","volt","wise","wright","x",
        "beam","bop","box","cast","charge","chrome","dex","do","doodle","ex","fix","fizzle",
        "gleam","gle","glow","go","knob","lox","mix","nab","nick","nut","op","pak","plug","pop","pulse","punk","spin"]
    },
    female: {
      start: ["Tika","Mecha","Pip","Zela","Gigi","Vexa","Lumi",
        "Giga","Volt","Cog","Sprock","Bolt","Gear","Plex","Nano","Dyna","Servo","Rust","Jolt","Cyber","Fus","Hertz","Tinker","Diode","Crank","Tech","Rotor"],
      middle:["pi","ka","ti","lo","ra","ra","elle"],
      end:  ["ette","lyn","ina","a","ique","nia"]
    }
  },

  HighmountainTauren: {
    male: {
      start: ["Ban","Gra","Tor","Ruk","Hru","Dru","Kha","Bron","Har","Mok","Gor","Thun","Brek",
        "High","Mount","Eag","River","Stone","Sky","Horn","Pine","Roc","Elk","Crag","Iron","May","Mist","Bar","Elan","Nav","Ran","Trak","Wol","Cair","Baine","Sun","Earth","Mo","Ro","Bra","Mul","Grom","Tar","Lo","Chie","Kodo","He","Tal","Pah","Ahn","Moo"],
      middle:["horn","hoof","mane","gar","peak","stone","clan"],
      end:  ["walker","caller","son","stag","run","hoof","horn","stride"]
    },
    female: {
      start: ["Asha","Mara","Hara","Sera","Luna","Kara","Tala","Rina",
        "High","Mount","Tor","Eag","River","Stone","Sky","Horn","Pine","Roc","Elk","Crag","Iron","May","Mist","Thun","Bar","Elan","Nav","Ran","Trak","Wol","Cair","Baine","Sun","Earth","Mo","Ro","Bra","Mul","Grom","Tar","Lo","Chie","Kodo","He","Tal","Pah","Ahn","Moo"],
      middle:["a","ra","na","ri","ea","ora"],
      end:  ["a","ra","na","elle","wyn","nea"]
    }
  },

  Earthen: {
    male: {
      start: ["Gran","Mol","Dron","Kar","Kor","Bas","Rok","Garn","Ter","Vok","Grund","Thar",
        "Ear","Stone","Rock","Grav","Boul","Cra","Mag","Lith","Thor","Grim","Iron","Volk","Uld","Kaz","Bould","Forge","Crag","Archa","Dur","Moun","Titan","Hard","Met","Vul","Geom","Basal","Gneiss","Quart","Obsi"],
      middle:["ar","on","ur","ir","ag","en","orn"],
      end:  ["in","stone","gran","bor","khan","um","gar","thor"]
    },
    female: {
      start: ["Gara","Mora","Lina","Bela","Tera","Hela",
        "Ear","Stone","Rock","Grav","Boul","Cra","Mag","Lith","Thor","Grim","Iron","Volk","Uld","Kaz","Bould","Forge","Crag","Archa","Dur","Moun","Titan","Hard","Met","Gran","Vul","Geom","Basal","Gneiss","Quart","Obsi"],
      middle:["a","e","i","ora","elle"],
      end:  ["a","ra","na","elle","ia","ess"]
    }
  },

  Pandaren: {
    male: {
      start: ["Bao","Lin","Mei","Shan","Ping","Wei","Lan","Chi","Tao","Feng","Baoz","Hao",
        "Pand","Lao","Shen","Tush","Chen","Li","Sha","Mon","Zhi","Ji","Po","Huo","Tsang","Yun","Mao","Lu","Shu","Tian","Mo"],
      middle:["li","na","ra","fen","do","shi","lun",
        "an","bao","chen","chi","chun","dao","dian","en","fang","feng",
        "fu","gang","guo","hai","han","hao","hong","hu","hua","huang",
        "ji","jian","jie","jin","jun","kai","kun","lan","lei","li",
        "liang","lin","ling","liu","long","lu","lun","mei","meng","min",
        "ming","nan","ning","peng","ping","qian","qiang","qin","qing","quan",
        "ren","rong","shan","sheng","shi","shu","shun","tao","tian","ting",
        "wei","wen","xian","xiang","xiao","xin","xiong","xu","xuan","xue"],
      end:  ["li","mei","to","lin","xin","zhen","bei","min",
        "an","ang","ao","bao","bei","ben","bo","cai","chao","chen",
        "cheng","chi","chuan","chun","cong","cui","dao","de","di","dong","du",
        "duan","en","fan","fang","fei","fen","feng","fo","fu","gang",
        "gao","ge","gen","gong","gu","guan","gui","guo","hai","han",
        "hao","he","heng","hong","hou","hu","hua","huan","huang","hui",
        "hun","huo","ji","jia","jian","jiang","jiao","jie","jin","jing",
        "jiong","jiu","ju","juan","jun","kai","kan","kang","ke","ken"]
    },
    female: {
      start: ["Mei","Lan","Bao","Xia","Lina","Feng","Hua","Lulu",
        "Pand","Lao","Shen","Tush","Chen","Li","Sha","Mon","Zhi","Ji","Po","Huo","Tsang","Yun","Mao","Lu","Chi","Shu","Tian","Mo"],
      middle:["a","i","ia","en","yu","ao"],
      end:  ["na","li","ra","mei","a","ling","hua"]
    }
  },

  Dracthyr: {
    male: {
      start: ["Azy","Kry","Veth","Dra","Thal","Ryn","Syth","Vyr","Zer","Oth","Skar","Keth","Ryx",
        "Thyr","Nel","Ras","Zag","Ab","Wey","Vir","Em","Azur","Cin","Sark","Ebon","Scale","Comm","Vor","Quin","Thar","Oath","Mal","Gos","Bind","Rath","Thel","Rion","Abyss","Tal","Vig","Drak","Onid","Spawn","Cruc","Aspect","Primal","Inc","Earth","Ward","Shad","Dusk","Wing","Talon","Reach","Flame","Obsid","Dark","Heal","Sund","Fligh","Forb","Guard"],
      middle:["al","ir","or","eth","en","ael","yr","aal",
        "akar","al","alas","anar","anor","ar","aras","ath","athar","azur",
        "dar","dor","drak","dras","dur","el","en","eon","er","eth",
        "evar","gar","gor","gos","hal","ior","ir","is","ith","kar",
        "khor","kor","kos","lor","mal","mor","nar","nax","nor","nyx",
        "on","onis","or","orak","os","oth","ox","rax","ren","rex",
        "rion","ros","ryx","sal","sar","skar","tal","tar","thal","thar",
        "thor","thyr","tor","var","ver","vor","vyr","xal","xar","yr","zar"],
      end:  ["ix","or","on","ar","eth","is","ak","eus","rax",
        "akar","akor","ak","al","alas","an","anar","ar","arak","aros","as",
        "ath","athos","ax","azur","dar","dor","drak","dras","dur","eon",
        "eth","eus","ex","gar","gon","gor","gos","hal","ion","ior",
        "ir","is","ith","ix","kar","kos","lor","mal","mor","mus",
        "nax","nor","nyx","on","onis","onyx","or","orak","orax","orix","os",
        "oth","ox","rax","rex","rion","ros","rus","ryx","skar","tal","thar",
        "thor","thyr","tor","tus","us","var","vor","vyr","xar","xus","yr","zar"]
    },
    female: {
      start: ["Aza","Vyra","Kara","Syl","Ira","Vela","Thy","Zyra","Arya",
        "Dra","Thyr","Nel","Ras","Zag","Ab","Wey","Vir","Em","Azur","Cin","Sark","Ebon","Scale","Comm","Vor","Quin","Thar","Oath","Mal","Gos","Bind","Rath","Thel","Rion","Abyss","Tal","Vig","Drak","Onid","Spawn","Cruc","Aspect","Primal","Inc","Earth","Ward","Shad","Dusk","Wing","Talon","Reach","Flame","Obsid","Dark","Heal","Sund","Fligh","Forb","Guard"],
      middle:["a","i","e","or","al","ya","ara"],
      end:  ["a","ia","is","eth","ra","elle","aer"]
    }
  },

  Troll: {
    male: {
      start: ["Zul","Vol","Rok","Jin","Hex","Tal","Rokh","Zan","Sen","Mal","Riva","Gon","Hek",
        "Loa","Zek","Ar","Hak","Mo","Zar","Thok","Rek","Lan","Dak","Lok"],
      middle:["a","o","u","ar","an","ul","ok","az",
        "aj","ak","al","am","ar","ash","at","dak","dar","daz",
        "djin","ek","gah","gon","gor","hak","hex","in","jar","jek",
        "jin","kar","kaz","kin","kon","lan","loa","lok","mal","mon",
        "rak","ral","ran","raz","rik","rok","sek","sen","taj","tek",
        "tul","uja","val","var","vek","vok","vol","zal","zan","zek"],
      end:  ["jin","zan","gor","tul","tek","gari","zub","rak",
        "ak","al","am","ar","ath","bwon","chak","dak","dar","das",
        "du","ek","gah","gar","gath","gon","hak","hex","in","jal",
        "jar","jin","jun","kan","kar","kaz","kin","kon","lak","lan",
        "lok","lon","mal","mon","nok","raj","rak","ral","ran","raz",
        "sek","sen","tal","tar","tek","ton","tul","val","var","vek",
        "vol","zak","zal","zan","zar","zek","zin","zub","zul"]
    },
    female: {
      start: ["Zala","Vela","Roka","Jina","Shal","Zuri","Kela","Safa",
        "Jin","Zul","Vol","Mal","Rok","Tal","Loa","Zek","Ar","Sen","Hak","Mo","Zar","Thok","Rek","Lan","Dak","Zan","Lok"],
      middle:["a","o","i","u","ea","ai",
        "aj","ak","al","am","an","ar","ash","dak","djin","ga","gon",
        "ha","jin","ka","lan","loa","lok","ma","na","oj","ra",
        "ral","rok","sha","taj","va","vol","za","zan","zek"],
      end:  ["a","ra","na","sha","ea","sha",
        "ah","ak","al","ara","da","di","dra","ga","ha","ja","jin",
        "ka","kha","la","li","ma","na","ni","ra","sha","ta",
        "tha","va","wa","ya","za","zah","zara","zha","zina","zura"]
    }
  },

  BloodElf: {
    male: {
      start: ["Kael","Ther","Lor","Val","Eli","Syl","Ael","Fen","Mael","Sael","Rael","Vaen",
        "Ae","Lan","Thir","Drae","Sil","Vel","Lun","El","Raen","Quel","Del","Morn","Va","Shan","Li","An","Thal","Dal","Il","Ar","Mir","Sun"],
      middle:["is","en","or","ar","el","ae","ion",
        "ael","aen","aer","al","alan","alas","an","andor","ar","aras","ath","athas",
        "dor","doras","dras","el","elan","elas","elor","en","endor","eron","eth",
        "hal","ian","iel","ilan","ion","ior","ir","is","ith","las",
        "lor","mas","mor","nor","on","or","orin","oris","os","quel",
        "ral","ran","ras","ren","ril","rin","ron","ros","sil","thal",
        "thas","thel","thor","thoras","val","var","ven","vin"],
      end:  ["thas","ien","or","as","iel","ion","ar","thir",
        "adore","alas","alan","amar","an","anar","andor","ar","aran","aros","as",
        "ashal","dar","dor","doras","dral","dras","el","elan","elar","elor","en",
        "endor","eron","hal","ian","iel","ien","il","ion","ior","ir",
        "is","ith","las","lon","lor","mael","mas","mor","nos","on",
        "or","orin","oris","os","quel","rael","ral","ran","ras","ren",
        "riel","ril","rion","ros","salar","thal","thalas","thas","thel","thir","thor","val"]
    },
    female: {
      start: ["Lia","Sera","Kael","Ari","Lysa","Mira","Ely","Saera","Aely","Maera",
        "Ae","Lan","Thir","Drae","Sil","Vel","Lun","El","Raen","Quel","Lor","Del","Morn","Va","Shan","Li","Syl","An","Thal","Dal","Il","Ar","Mir","Sun"],
      middle:["a","e","ia","el","is","ae","elle"],
      end:  ["a","elle","ia","ra","is","elle","ria"]
    }
  },

  Undead: {
    male: {
      start: ["Mor","Dar","Var","Nec","Rav","Mal","Kor","Vek","Grav","Than","Mord","Zal",
        "Rik","Van","Thras","Dark","Gul","Mald","Rot","Dead","Lich","Soul","Dread","Skel","Cri","Foul","Blight","Shad","Ghoul","Plag","Morb","Grim"],
      middle:["dus","ven","mor","dar","ul","ek","oth",
        "ac","ath","bane","bile","black","blight","blood","bone","curse","dark",
        "dead","death","decay","doom","dread","dred","fel","foul","ghast","ghoul",
        "grave","grim","haunt","hor","lich","mar","mort","nec","neth","night",
        "ock","phan","plague","rav","reap","rend","rot","scar","shade","shad",
        "sick","skele","skull","soul","spec","thana","tomb","tor","undeath","var",
        "vile","wight","wraith","zom"],
      end:  ["fang","shade","ven","mort","dar","us","grim","bane",
        "ash","bane","bile","blight","blood","bone","crypt","curse","dark","death",
        "decay","doom","dread","fang","fel","fiend","flesh","foul","ghost","ghoul",
        "gore","grave","grim","haunt","hex","kin","lich","mar","mort","murk",
        "nec","net","pox","rage","ravage","reaper","rend","rot","scar","scourge",
        "shade","shadow","shroud","sickness","skull","soul","specter","tomb","torment","tor",
        "undeath","us","ven","vile","walker","wight","wraith","zom"]
    },
    female: {
      start: ["Mora","Lera","Vela","Nara","Sel","Eir","Mara","Zera",
        "Mor","Rik","Van","Thras","Dark","Gul","Mald","Rot","Dead","Lich","Soul","Dread","Skel","Rav","Cri","Foul","Blight","Shad","Ghoul","Plag","Morb","Grim"],
      middle:["a","e","i","el","ae"],
      end:  ["a","ia","na","ra","eth","ine"]
    }
  },

  Goblin: {
    male: {
      start: ["Gaz","Nib","Zix","Razz","Fizz","Snig","Griz","Bok","Rik","Snik","Gazz","Pog",
        "Rix","Jix","Mek","Nog","Wix","Kix","Trix","Bling","Gold","Coin","Zaz","Lux","Flix","Glix","Niz","Biz","Daz","Jaz"],
      middle:["zap","blast","spark","whiz","zik","fizz","bolt",
        "bang","biz","blast","bling","blink","blip","bop","boss","buck","buzz",
        "cash","clank","click","clink","coin","crack","crank","deal","dink","dosh",
        "fizz","flash","flip","fortune","fuse","gizz","glint","gold","greed","grin",
        "jink","kazz","klink","knock","lux","money","nick","pop","profit","quick",
        "razz","rig","rocket","scheme","shnazz","snap","spark","sprocket","stack","trick",
        "whir","whiz","wiz","zap","zik","zip","zoom"],
      end:  ["boom","bang","trix","fuse","blast","pip","dock","nik",
        "bang","bazz","bing","biz","blast","bling","blitz","bob","boom","bop",
        "boss","buck","buzz","cap","cash","ching","clink","con","crack","dash",
        "deal","deck","dock","flash","flip","fob","fortune","fuse","gab","gadget",
        "gazz","gear","glint","gold","grip","hedge","jab","jack","jink","knock",
        "lock","loot","lux","nick","nob","nog","pack","pip","pop","profit",
        "razz","rigg","rocket","scam","scheme","shiv","snap","spark","squib","trick",
        "trix","vault","whiz","wig","wiz","zap","zik","zip","zoom"]
    },
    female: {
      start: ["Giz","Pip","Zaza","Mira","Bixi","Pella","Zori",
        "Gaz","Rix","Jix","Mek","Zix","Nog","Wix","Kix","Trix","Bling","Gold","Coin","Zaz","Lux","Flix","Glix","Niz","Razz","Biz","Daz","Jaz"],
      middle:["pi","zi","ka","zi","le"],
      end:  ["ette","ina","a","belle","ette"]
    }
  },

  Vulpera: {
    male: {
      start: ["Kip","Tiz","Rin","Mek","Nok","Siv","Rok","Vex","Keth","Sori","Fex","Jin",
        "Vulp","Nomi","Kiro","Meer","Car","Sash","Dune","Raki","Vek","Tola","Nisha","Hir","Veh","Zer","Mira","Kasa","Fer","Raku","Ser","Thro","Yash","Zal"],
      middle:["ta","ri","zi","ra","en","ol","un"],
      end:  ["a","in","ra","zi","o","el","vik","en"]
    },
    female: {
      start: ["Kiri","Tira","Nala","Miri","Sira","Liri","Fira","Kera",
        "Vulp","Nomi","Kiro","Meer","Car","Sash","Dune","Raki","Vek","Tola","Nisha","Hir","Veh","Zer","Mira","Kasa","Fer","Raku","Ser","Thro","Yash","Zal"],
      middle:["a","i","e","o","ia"],
      end:  ["a","ra","na","elle","lyn","ia"]
    }
  },

  MagharOrc: {
    male: {
      start: ["Gar","Dor","Kru","Rok","Dur","Gor","Zul","Gro","Mok","Hru","Gorv","Thag",
        "Mag","Kosh","Karg","Dra","Zala","Mak","Grom","Lok","Ogar","Grul","Nok","Rath","Uruk","Zug","Gesh","Hara","Kor","Mosh","Throm"],
      middle:["gar","ruk","tar","mok","ug","ak","ugr"],
      end:  ["nak","tar","rok","grom","rug","ok","zug","ghar"]
    },
    female: {
      start: ["Gara","Dora","Kura","Roka","Shara","Mora",
        "Mag","Gor","Kosh","Karg","Dra","Zala","Mak","Grom","Lok","Ogar","Grul","Nok","Rath","Uruk","Zug","Rok","Dur","Gesh","Hara","Kor","Mosh","Throm"],
      middle:["a","o","u","ar","ra"],
      end:  ["a","ra","na","ka","sha","ra"]
    }
  },

  Zandalari: {
    male: {
      start: ["Rast","Zul","Vol","Tal","Daz","Hex","Zan","Ral","Kor","Hek","Yaz","Taz",
        "Loa","Rez","Aka","Tor","Gonk","Krag","Pa","Kim","Bwom","Dazar","Jani","Reek","Talan","Zeb","Kha","Rak","Thun"],
      middle:["ari","jin","zan","goro","ul","tek","khan"],
      end:  ["tek","gath","th","zan","goro","ar","khan","dar"]
    },
    female: {
      start: ["Zala","Rana","Tala","Sera","Nala","Tazi","Kala",
        "Zan","Rast","Loa","Rez","Aka","Tor","Zul","Gonk","Krag","Pa","Kim","Bwom","Dazar","Jani","Reek","Talan","Yaz","Zeb","Kha","Rak","Thun","Vol"],
      middle:["a","i","e","o","u"],
      end:  ["a","ra","na","ia","sha","la"]
    }
  },

  Nightborne: {
    male: {
      start: ["Nar","Seth","Quel","Thal","Lor","Val","Ryn","Kel","Ari","Sael","Eryn","Delyn",
        "Sur","Arist","Ela","Arcan","Shala","Luna","Nigh","Tel","Thera","Veth","Esse","Mer","Fal","Anar","Oru","Asto","Ilis","Lynd","Stel","Vash","Zura"],
      middle:["ae","or","in","el","is","al","en","oril"],
      end:  ["or","as","ion","eth","ir","el","ae","irn"]
    },
    female: {
      start: ["Sel","Ly","Aria","Rael","Zia","Mira","Ely","Sael","Nera",
        "Sur","Arist","Ela","Arcan","Shala","Luna","Nigh","Tel","Thera","Veth","Esse","Mer","Fal","Anar","Oru","Asto","Ilis","Lynd","Stel","Thal","Vash","Zura"],
      middle:["a","e","ia","el","yn","ae","ora"],
      end:  ["a","elle","ia","ra","is","yne","ria"]
    }
  }
};

export const accentedVariants = {
  a: [
    'á','Á','à','À','â','Â','ä','Ä','å','Å','æ','Æ'
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
