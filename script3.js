//Definiëer variabelen
var fase = 0;
var COopgelost = [0, 0, 0, 0, 0, 0, 0, 0]
var EOopgelost = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var UD1opgelost = [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
var COstaat;
var EOstaat;
var UD1staat;
var scramble;
var fase2scramble;
var solved;
var max;
var Coord, COcoord, EOcoord, UD1coord, scramblecoord;
var pruningtableF1 = []
var CPopgelost = [0, 1, 2, 3, 4, 5, 6, 7] //UBL URB UFR ULF DFL DRF DBR DLB
var EPopgelost = [0, 1, 2, 3, 4, 5, 6, 7] //UB UR UF UD DF DR DB DL
var UD2opgelost = [0, 1, 2, 3]
var CPstaat;
var EPstaat;
var UD2staat;
var CPtracker = []
var EPtracker = []
var Coord2, CPcoord, EPcoord, UD2coord;
var diepte, diepte2;
var pruningtableF2 = []
var solutionF1;
var solutionF2;
var verkeerdgetekend;
var failed;
var tries = 0;
var extra = ""
var gebleven = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // [diepte, i, j, k, l]
var mode = "byscramble"
var oploslengte;

//Een functie die je laat switchen tussen de modus "afbeelding" en "notatie"
function switchmode() {
  if (mode == "byscramble") {
    mode = "byimage"
    document.getElementById("mode").innerHTML = "<b>Input modus</b>: Afbeelding"
  } else {
    mode = "byscramble"
    document.getElementById("mode").innerHTML = "<b>Input modus</b>: Slagen"
  }

}

//De functie die uitgevoert wordt als er op "Oplossen" gedrukt wordt.
function ga() {
  failed = false
  oplosstaatF1()
  oplosstaatF2()

  //Fase 1
  fase = 1

  //interpreteer scramble

  //Als de modus "Slagen" is
  if (mode == "byscramble") {
    solved = false
    scramble = (document.getElementById("inputtedscramble").value).split(" ")
    //Check of alle ingevulde draaien echt bestaan...
    const iseendraai = (gegevendraai) => draaien.includes(gegevendraai)
    if (scramble.every(iseendraai)) {
      //Zo ja, onthoud de coördinaat van de scramble en sla deze op
      scramble.forEach(draai)
      scramblecoord = Coord
      losop1()
    }
    else {
      //Zo nee, geef een foutmelding
      alert("Helaas, dit zijn niet allemaal kloppende slagen")
      return;
    }
  } else if (mode == "byimage") { //Als de modus "Afbeelding" is
    scramblecoord = scramblecoordUitPlaatje() //Kijk in drawer.js na of het een kloppende positie is en welke coördinaat hierbij hoort.
    if (!verkeerdgetekend) {
      //ga oplossen als hij niet verkeerd is getekend
      losop1()
    } else {
      //Geef anders een foutmelding
      alert("Helaas, de kubus is verkeerd ingekleurd")
      return;
    }
  }
  //losop
  function losop1() {
    //Zet de interne kubus in de scramblestaat
    scramblestaatF1()

    //de diepte is het eerste element uit de lijst gebleven, voor als er meerdere keren gezocht moet worden.
    diepte = gebleven[0]
    //Als er voor de scramblestaat iets staat in de eindtabel...
    if (pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
      //...Geef dat als oplossing voor fase 1 en stop met de functie uitvoeren
      solutionF1 = pruningtableF1[Coord[0]][Coord[1]][Coord[2]] + " "
      return;
    }

    //Ga nu zoeken op diepte 1
    if (diepte == 0) {
      diepte = 1
      for (var i = gebleven[1]; i < draaien.length; i++) {
        //Probeer alle mogelijke draaien op de scramblestaat
        draai(draaien[i])
        //Alleen als er voor de nieuwe staat iets staat in de eindtabel...
        if (pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
          //...Geef de draai + dat wat staat in de tabel als oplossing en stop met uitvoeren
          solutionF1 = draaien[i] + " " + pruningtableF1[Coord[0]][Coord[1]][Coord[2]]
          //Houd bij wat de laatste waarde van i is die is gecheckt voor als je nog een keer moet gaan zoeken.
          gebleven = [0, i]
          return;
        }
        scramblestaatF1()
      }
      //Als hier niets gevonden is, zet gebleven weer op 0 zodat hij voor de volgende diepte weer vanaf 0 gaat zoeken.
      gebleven = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    //Diepte 2
    //Voor toelichting hierbij, zie diepte 3
    if (diepte == 1) {
      diepte = 2
      for (var i = gebleven[1]; i < draaien.length; i++) {
        for (var j = gebleven[2]; j < draaien.length; j++) {
          scramblestaatF1()
          draai(draaien[i])
          draai(draaien[j])
          if (pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
            solutionF1 = draaien[i] + " " + draaien[j] + " " + pruningtableF1[Coord[0]][Coord[1]][Coord[2]]
            gebleven = [1, i, j]
            return;
          }
        }
      }
      gebleven = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    //Diepte 3
    if (diepte == 2) {
      diepte = 3
      for (var i = gebleven[1]; i < draaien.length; i++) {
        for (var j = gebleven[2]; j < draaien.length; j++) {
          //Voorkom dat er 2 keer achter elkaar een draai aan dezelfde kant wordt gedaan, dit zou dan al eerder gevonden moeten zijn.
           if (Math.floor(i / 3) != Math.floor(j / 3)) {
          for (var k = gebleven[3]; k < draaien.length; k++) {
            //Voor elke mogelijke combinatie van drie draaien: voer de drie draaien uit op de scramblestaat en check of het resultaat te vinden is in de eindtabel. Zo nee? Ga door met diepte 4. Zo ja? Geef de draaien + dat wat in de eindtabel staat als oplossing, sla op waar hij is gebleven en stop met losop1() uitvoeren.
            scramblestaatF1()
            draai(draaien[i])
            draai(draaien[j])
            draai(draaien[k])
            if (pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
              solutionF1 = draaien[i] + " " + draaien[j] + " " + draaien[k] + " " + pruningtableF1[Coord[0]][Coord[1]][Coord[2]]
              return;
              gebleven = [2, i, j, k]
            }
          }
          }
        }
      }
      gebleven = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    //Diepte 4
    //Voor toelichting hierbij, zie diepte 3
    if (diepte == 3) {
      diepte = 4
      for (var i = gebleven[1]; i < draaien.length; i++) {
        for (var j = gebleven[2]; j < draaien.length; j++) {
           if (Math.floor(i / 3) != Math.floor(j / 3)) {
          for (var k = gebleven[3]; k < draaien.length; k++) {
            for (var l = gebleven[4]; l < draaien.length; l++) {
              scramblestaatF1()
              draai(draaien[i])
              draai(draaien[j])
              draai(draaien[k])
              draai(draaien[l])
              if (pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
                solutionF1 = draaien[i] + " " + draaien[j] + " " + draaien[k] + " " + draaien[l] + " " + pruningtableF1[Coord[0]][Coord[1]][Coord[2]]
                gebleven = [3, i, j, k, l]
                return;
              }
            }
          }
          }
        }
      }
      gebleven = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    //Diepte 5
    //Voor toelichting hierbij, zie diepte 3
    if (diepte == 4) {
      diepte = 5
      for (var i = gebleven[1]; i < draaien.length; i++) {
        for (var j = gebleven[2]; j < draaien.length; j++) {
           if (Math.floor(i / 3) != Math.floor(j / 3)) {
          for (var k = gebleven[3]; k < draaien.length; k++) {
            if (Math.floor(i / 3) != Math.floor(j / 3)) {
            for (var l = gebleven[4]; l < draaien.length; l++) {
              for (var m = gebleven[5]; m < draaien.length; m++) {
                scramblestaatF1()
                draai(draaien[i])
                draai(draaien[j])
                draai(draaien[k])
                draai(draaien[l])
                draai(draaien[m])
                if (pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
                  solutionF1 = draaien[i] + " " + draaien[j] + " " + draaien[k] + " " + draaien[l] + " " + draaien[m] + " " + pruningtableF1[Coord[0]][Coord[1]][Coord[2]]
                  gebleven = [4, i, j, k, l, m]
                  return;
                }
              }
            }
              }
            }
          }
        }
      }
      gebleven = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    //Diepte 6
    //Voor toelichting hierbij, zie diepte 3
    if (diepte == 5) {
      diepte = 6
      for (var i = gebleven[1]; i < draaien.length; i++) {
        for (var j = gebleven[2]; j < draaien.length; j++) {
           if (Math.floor(i / 3) != Math.floor(j / 3)) {
          for (var k = gebleven[3]; k < draaien.length; k++) {
            if (Math.floor(j / 3) != Math.floor(k / 3)) {
            for (var l = gebleven[4]; l < draaien.length; l++) {
              for (var m = gebleven[5]; m < draaien.length; m++) {
                for (var n = gebleven[6]; n < draaien.length; n++) {
                  scramblestaatF1()
                  draai(draaien[i])
                  draai(draaien[j])
                  draai(draaien[k])
                  draai(draaien[l])
                  draai(draaien[m])
                  draai(draaien[n])
                  if (pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
                    solutionF1 = draaien[i] + " " + draaien[j] + " " + draaien[k] + " " + draaien[l] + " " + draaien[m] + " " + draaien[n] + "  " + pruningtableF1[Coord[0]][Coord[1]][Coord[2]]
                    gebleven = [5, i, j, k, l, m, n]
                    return;
                  }
                }
              }
              }
            }
            }
          }
        }
      }
      gebleven = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    //Diepte 7
    //Voor toelichting hierbij, zie diepte 3
    if (diepte == 6) {
      diepte = 7
      for (var i = gebleven[1]; i < draaien.length; i++) {
        for (var j = gebleven[2]; j < draaien.length; j++) {
          if (Math.floor(i / 3) != Math.floor(j / 3)) {
            for (var k = gebleven[3]; k < draaien.length; k++) {
              if (Math.floor(j / 3) != Math.floor(k / 3)) {
              for (var l = gebleven[4]; l < draaien.length; l++) {
                for (var m = gebleven[5]; m < draaien.length; m++) {
                  for (var n = gebleven[6]; n < draaien.length; n++) {
                    for (var o = gebleven[7]; o < draaien.length; o++) {
                      scramblestaatF1()
                      draai(draaien[i])
                      draai(draaien[j])
                      draai(draaien[k])
                      draai(draaien[l])
                      draai(draaien[m])
                      draai(draaien[n])
                      draai(draaien[o])
                      if (pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
                        solutionF1 = draaien[i] + " " + draaien[j] + " " + draaien[k] + " " + draaien[l] + " " + draaien[m] + " " + draaien[n] + "  " + draaien[o] + " " + pruningtableF1[Coord[0]][Coord[1]][Coord[2]]
                        gebleven = [6, i, j, k, l, m, n, o]
                        return;
                      }
                    }
                  }
                }
                }
              }
            }
          }
        }
      }
    }
  }

  //Met deze functie wordt de scramble + de fase-1 oplosser om gezet naar iets waar fase 2 iets aan heeft
  ConvertToFase2()
  function ConvertToFase2() {
    fase = 2

    if (mode == "byscramble") {
      //Maak de scramble + de oplossing voor fase 1 een scramble voor fase 2
      fase2scramble = scramble.concat(solutionF1.split(" "))
      //Doe alsof de CP en EP nu nog opgelost is
      CPtracker = [0, 1, 2, 3, 4, 5, 6, 7]
      EPtracker = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    } else if (mode == "byimage") {
      //Maak de oplossing voor fase 1 een scramble voor fase 2, de trackers zijn hier al ingesteld in drawer.js
      fase2scramble = solutionF1.split(" ")
    }
    //Doe voor elke draai uit fase2scramble de functie convertdraai uit draai3.js om te kijken hoe de EPtracker veranderd.
    fase2scramble.forEach(convertdraai)

    //De nieuwe CPstaat is gelijk aan de huidige CPtracker
    CPstaat = CPtracker.slice(0)
    //De elementen 4 t/m 7 uit EPtracker zijn per definitie de UD-randjes.
    UD2staat = [EPtracker[4] - 4, EPtracker[5] - 4, EPtracker[6] - 4, EPtracker[7] - 4]
    //Verwijder de UD-edges uit de EPtracker:
    EPtracker.splice(4, 4)
    //Zorg ervoor dat de hoogste waarde uit EPtracker 7 is en niet 11, zodat er niet random 4 stukjes missen.
    for (var i = 0; i < EPtracker.length; i++) {
      if (EPtracker[i] > 5) {
        EPstaat[i] = EPtracker[i] - 4
      }
      else {
        EPstaat[i] = EPtracker[i]
      }
    }
    //Bereken welke coördinaat er hoort bij de huidige CPstaat, EPstaat en UD2staat
    berekenCoordUitStaatF2();
    scramblecoord = Coord.slice(0)


  }
  //los fase 2 op
  losop2()
  function losop2() {
    //Zet de interne kubus op de scramblestaat
    scramblestaatF2()
    solutionF2 = ""
    
    //Diepte 0
    //Als deze coördinaat te vinden is in de eindtabellen
    diepte2 = 0
    if (Array.isArray(pruningtableF2[Coord[0]])) {
      if (Array.isArray(pruningtableF2[Coord[0]][Coord[1]])) {
        if (pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
          //Geef dat als oplossing voor fase 2
          solutionF2 = pruningtableF2[Coord[0]][Coord[1]][Coord[2]]
          return;
        }
      }
    }

    //Diepte 1
    //Zie diepte 3 voor een toelichting.
    diepte2 = 1
    for (var i = 0; i < draaienf2.length; i++) {
      draai(draaienf2[i])
      if (Array.isArray(pruningtableF2[Coord[0]])) {
        if (Array.isArray(pruningtableF2[Coord[0]][Coord[1]])) {
          if (pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
            solutionF2 = draaienf2[i] + " " + pruningtableF2[Coord[0]][Coord[1]][Coord[2]]
            return;
          }
        }
      }
      scramblestaatF2()
    }

    //Diepte 2
    //Zie diepte 3 voor een toelichting.
    diepte2 = 2
    for (var i = 0; i < draaienf2.length; i++) {
      for (var j = 0; j < draaienf2.length; j++) {
        draai(draaienf2[i])
        draai(draaienf2[j])
        if (Array.isArray(pruningtableF2[Coord[0]])) {
          if (Array.isArray(pruningtableF2[Coord[0]][Coord[1]])) {
            if (pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
              solutionF2 = draaienf2[i] + " " + draaienf2[j] + " " + pruningtableF2[Coord[0]][Coord[1]][Coord[2]]
              return;
            }
          }
        }
        scramblestaatF2()
      }
    }

    //Diepte 3
    diepte2 = 3
    for (var i = 0; i < draaienf2.length; i++) {
      for (var j = 0; j < draaienf2.length; j++) {
        //Zorg ervoor dat de eerste en tweede draai niet aan dezelfde kant draaien door te kijken of de eerste letter hetzelfde is:
        if (draaienf2[i].charAt(0) != draaienf2[j].charAt(0)){
        for (var k = 0; k < draaienf2.length; k++) {
          //Pas elke mogelijke combinatie van 3 draaien toe op de scramblestaat
          draai(draaienf2[i])
          draai(draaienf2[j])
          draai(draaienf2[k])
          //Check of er voor de coördinaat na het toepassen van de drie slagen iets in de eindtabel staat
          if (Array.isArray(pruningtableF2[Coord[0]])) {
            if (Array.isArray(pruningtableF2[Coord[0]][Coord[1]])) {
              if (pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
                //Zo ja: geef dat als oplossing, zo nee, ga door met zoeken.
                solutionF2 = draaienf2[i] + " " + draaienf2[j] + " " + draaienf2[k] + " " + pruningtableF2[Coord[0]][Coord[1]][Coord[2]]
                return;
              }
            }
          }
          }
          scramblestaatF2()
        }
      }
    }
    
    //Diepte 4
    //Voor een toelichting, zie diepte 3.
    diepte2 = 4
    for (var i = 0; i < draaienf2.length; i++) {
      for (var j = 0; j < draaienf2.length; j++) {
        if (draaienf2[i].charAt(0) != draaienf2[j].charAt(0)){
        for (var k = 0; k < draaienf2.length; k++) {
           if (draaienf2[k].charAt(0) != draaienf2[j].charAt(0)){
          for (var l = 0; l < draaienf2.length; l++) {
            scramblestaatF2()
            draai(draaienf2[i])
            draai(draaienf2[j])
            draai(draaienf2[k])
            draai(draaienf2[l])
            if (Array.isArray(pruningtableF2[Coord[0]])) {
              if (Array.isArray(pruningtableF2[Coord[0]][Coord[1]])) {
                if (pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
                  solutionF2 = draaienf2[i] + " " + draaienf2[j] + " " + draaienf2[k] + " " + draaienf2[l] + " " + pruningtableF2[Coord[0]][Coord[1]][Coord[2]]
                  return;
                }
              }
            }
          }
          }
          }
        }
      }
    }

    //Diepte 2
    //Voor een toelichting hierbij, zie diepte 3
    diepte2 = 5
    for (var i = 0; i < draaienf2.length; i++) {
      for (var j = 0; j < draaienf2.length; j++) {
        if (draaienf2[i].charAt(0) != draaienf2[j].charAt(0)){
        for (var k = 0; k < draaienf2.length; k++) {
           if (draaienf2[k].charAt(0) != draaienf2[j].charAt(0)){
          for (var l = 0; l < draaienf2.length; l++) {
            for (var m = 0; m < draaienf2.length; m++) {
              scramblestaatF2()
              draai(draaienf2[i])
              draai(draaienf2[j])
              draai(draaienf2[k])
              draai(draaienf2[l])
              draai(draaienf2[m])
              if (Array.isArray(pruningtableF2[Coord[0]])) {
                if (Array.isArray(pruningtableF2[Coord[0]][Coord[1]])) {
                  if (pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
                    solutionF2 = draaienf2[i] + " " + draaienf2[j] + " " + draaienf2[k] + " " + draaienf2[l] + " " + draaienf2[m] + " " + pruningtableF2[Coord[0]][Coord[1]][Coord[2]]
                    return;
                  }
                }
              }
            }
          }
          }
          }
        }
      }
    }
    
    //Diepte 6
    //Voor een toelichting hierbij, zie diepte 3
    diepte2 = 6
    for (var i = 0; i < draaienf2.length; i++) {
      for (var j = 0; j < draaienf2.length; j++) {
        if (draaienf2[i].charAt(0) != draaienf2[j].charAt(0)){
        for (var k = 0; k < draaienf2.length; k++) {
           if (draaienf2[k].charAt(0) != draaienf2[j].charAt(0)){
          for (var l = 0; l < draaienf2.length; l++) {
            for (var m = 0; m < draaienf2.length; m++) {
              for (var n = 0; n < draaienf2.length; n++) {
                scramblestaatF2()
                draai(draaienf2[i])
                draai(draaienf2[j])
                draai(draaienf2[k])
                draai(draaienf2[l])
                draai(draaienf2[m])
                draai(draaienf2[n])
                if (Array.isArray(pruningtableF2[Coord[0]])) {
                  if (Array.isArray(pruningtableF2[Coord[0]][Coord[1]])) {
                    if (pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
                      solutionF2 = draaienf2[i] + " " + draaienf2[j] + " " + draaienf2[k] + " " + draaienf2[l] + " " + draaienf2[m] + " " + draaienf2[n] + " " + pruningtableF2[Coord[0]][Coord[1]][Coord[2]]
                      return;
                    }
                  }
                }
              }
            }
            }
            }
          }
        }
      }
    }

    //Diepte 7
    //Voor een toelichting hierbij, zie diepte 3
    diepte2 = 7
    for (var i = 0; i < draaienf2.length; i++) {
      for (var j = 0; j < draaienf2.length; j++) {
        if (draaienf2[i].charAt(0) != draaienf2[j].charAt(0)){
        for (var k = 0; k < draaienf2.length; k++) {
          if (draaienf2[k].charAt(0) != draaienf2[j].charAt(0)){
          for (var l = 0; l < draaienf2.length; l++) {
            for (var m = 0; m < draaienf2.length; m++) {
              for (var n = 0; n < draaienf2.length; n++) {
                for (var o = 0; o < draaienf2.length; o++) {
                  scramblestaatF2()
                  draai(draaienf2[i])
                  draai(draaienf2[j])
                  draai(draaienf2[k])
                  draai(draaienf2[l])
                  draai(draaienf2[m])
                  draai(draaienf2[n])
                  draai(draaienf2[o])
                  if (Array.isArray(pruningtableF2[Coord[0]])) {
                    if (Array.isArray(pruningtableF2[Coord[0]][Coord[1]])) {
                      if (pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
                        solutionF2 = draaienf2[i] + " " + draaienf2[j] + " " + draaienf2[k] + " " + draaienf2[l] + " " + draaienf2[m] + " " + draaienf2[n] + " " + draaienf2[o] + " " + pruningtableF2[Coord[0]][Coord[1]][Coord[2]]
                        return;
                      }
                    }
                  }
                }
              }
            }
            }
            }
          }
        }
      }
    }
    //Als er nu nog steeds niet gevonden is, vertel het programma dat hij gefaald heeft.
    failed = true
  }

  //als er niet gefaald is:
  if (!failed) {
    var oplossing = solutionF1 + " " + solutionF2
    var oplosdraaien = (oplossing.split(" "))
    var oploslengte = 0
    for (var i = 0; i < oplosdraaien.length; i++) {
      if (draaien.includes(oplosdraaien[i].charAt(0))) {
        oploslengte += 1
      }
    }
    if (oploslengte > 1 || oploslengte == 0) {
      document.getElementById("solution1").innerHTML = "<b>Oplossing</b>: " + oplossing + " (" + oploslengte + " draaien)"
    } else if (oploslengte == 1) {
      document.getElementById("solution1").innerHTML = "<b>Oplossing</b>: " + oplossing + " (" + oploslengte + " draai)"
    }
    extra = ""
    tries = 0
    gebleven = [0]
  }
  else if (failed) { //Als er wel gefaald is, laat het programma opnieuw beginnen met zoeken voor fase 1, maar vanaf het punt 1 draai verder dan de vorige oplossing die hij had gevonden.
    if (gebleven[gebleven.length - 1] != 17) {
      gebleven[gebleven.length - 1] += 1
    }
    else {
      gebleven[gebleven.length - 2] += 1
      gebleven[gebleven.length - 1] = 0
    }
    //Zeg dat hij niet meer gefaald heeft omdat hij opnieuw mag beginnen
    failed = false
    ga()
  }
}

//Een functie die de interne kubus (bijgehouden met "Coord") weer op de opgeloste stand zet voor fase 1
function oplosstaatF1() {
  COstaat = COopgelost.slice(0)
  EOstaat = EOopgelost.slice(0)
  UD1staat = UD1opgelost.slice(0);
  berekenCoordUitStaatF1();
}

//Een functie die de interne kubus ("Coord") op de gescramblede stand zet voor fase 1
function scramblestaatF1() {
  Coord = scramblecoord.slice(0)
  COcoord = scramblecoord[0]
  EOcoord = scramblecoord[1]
  UD1coord = scramblecoord[2]
}

//Een functie die de interne kubus (bijgehouden met "Coord") weer op de opgeloste stand zet voor fase 2
function oplosstaatF2() {
  CPstaat = CPopgelost.slice(0)
  EPstaat = EPopgelost.slice(0)
  UD2staat = UD2opgelost.slice(0)
  berekenCoordUitStaatF2();
}

//Een functie die de interne kubus ("Coord") op de gescramblede stand zet voor fase 1
function scramblestaatF2() {
  Coord = scramblecoord.slice(0)
  CPcoord = scramblecoord[0]
  EPcoord = scramblecoord[1]
  UD2coord = scramblecoord[2]
}
