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


function ga() {
  failed = false
  oplosstaatF1()
  oplosstaatF2()

  //Fase 1
  fase = 1

  //interpreteer scramble
  solved = false
  /*scramble = (document.getElementById("inputtedscramble").value + " " + extra).split(" ")
  scramble.forEach(draai)
  scramblecoord = Coord*/
  scramblecoord = scramblecoordUitPlaatje()

  //losop
  if (!verkeerdgetekend) {
  losop()
  } else {
    alert("Helaas, de kubus is verkeerd ingekleurd")
  }
  function losop(){
    losop1()
  function losop1() {
    scramblestaatF1()

    diepte = gebleven[0]
    if (pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
      solutionF1 = pruningtableF1[Coord[0]][Coord[1]][Coord[2]]
      return;
    }

    if (diepte == 0){
    diepte = 1
    for (var i = gebleven[1]; i < draaien.length; i++) {
      draai(draaien[i])
      if (pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
        solutionF1 = draaien[i] + " " + pruningtableF1[Coord[0]][Coord[1]][Coord[2]]
        gebleven = [0, i]
        return;
      }
      scramblestaatF1()
    }
    gebleven = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    if (diepte == 1){
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

    if (diepte == 2){
      diepte = 3
    for (var i = gebleven[1]; i < draaien.length; i++) {
      for (var j = gebleven[2]; j < draaien.length; j++) {
        for (var k = gebleven[3]; k < draaien.length; k++) {
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
    gebleven = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    if (diepte == 3){
    diepte = 4
    for (var i = gebleven[1]; i < draaien.length; i++) {
      for (var j = gebleven[2]; j < draaien.length; j++) {
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
    gebleven = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    if (diepte == 4){
    diepte = 5
    for (var i = gebleven[1]; i < draaien.length; i++) {
      for (var j = gebleven[2]; j < draaien.length; j++) {
        for (var k = gebleven[3]; k < draaien.length; k++) {
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
    gebleven = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    
    if (diepte == 5) {
    diepte = 6
    for (var i = gebleven[1]; i < draaien.length; i++) {
      for (var j = gebleven[2]; j < draaien.length; j++) {
        for (var k = gebleven[3]; k < draaien.length; k++) {
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
    gebleven = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    if (diepte == 6) {
    diepte = 7
    for (var i = gebleven[1]; i < draaien.length; i++) {
      for (var j = gebleven[2]; j < draaien.length; j++) {
        for (var k = gebleven[3]; k < draaien.length; k++) {
          for (var l = gebleven[4]; l < draaien.length; l++) {
            for (var m = gebleven[5]; m < draaien.length; m++) {
              for (var n = gebleven[6]; n < draaien.length; n++) {
                for (var o = gebleven[7]; o < draaien.length; o++){
                scramblestaatF1()
                draai(draaien[i])
                draai(draaien[j])
                draai(draaien[k])
                draai(draaien[l])
                draai(draaien[m])
                draai(draaien[n])
                draai(draaien[o])
                if (pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
                  solutionF1 = draaien[i] + " " + draaien[j] + " " + draaien[k] + " " + draaien[l] + " " + draaien[m] + " " + draaien[n] + "  " + draaien[o] + " "+ pruningtableF1[Coord[0]][Coord[1]][Coord[2]]
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
    gebleven = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }
  document.getElementById("solution1").innerHTML = solutionF1


  //ConvertToFase2
  ConvertToFase2()
  function ConvertToFase2() {
    fase = 2
    /*fase2scramble = scramble.concat(solutionF1.split(" "))
    CPtracker = [0, 1, 2, 3, 4, 5, 6, 7]
    EPtracker = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]*/
    fase2scramble = solutionF1.split(" ")
    fase2scramble.forEach(convertdraai)

    CPstaat = CPtracker.slice(0)
    UD2staat = [EPtracker[4] - 4, EPtracker[5] - 4, EPtracker[6] - 4, EPtracker[7] - 4]
    EPtracker.splice(4, 4)
    for (var i = 0; i < EPtracker.length; i++) {
      if (EPtracker[i] > 5) {
        EPstaat[i] = EPtracker[i] - 4
      }
      else {
        EPstaat[i] = EPtracker[i]
      }
    }
    berekenCoordUitStaatF2();
    scramblecoord = Coord.slice(0)

  
  }
  //losop2()
  losop2()
  function losop2() {
    scramblestaatF2()
    solutionF2 = ""

    diepte2 = 0
    if (Array.isArray(pruningtableF2[Coord[0]])) {
      if (Array.isArray(pruningtableF2[Coord[0]][Coord[1]])) {
        if (pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
        solutionF2 = pruningtableF2[Coord[0]][Coord[1]][Coord[2]]
        return;
        }
      }
    }

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

    diepte2 = 3
    for (var i = 0; i < draaienf2.length; i++) {
      for (var j = 0; j < draaienf2.length; j++) {
        for (var k = 0; k < draaienf2.length; k++) {
          draai(draaienf2[i])
          draai(draaienf2[j])
          draai(draaienf2[k])
          if (Array.isArray(pruningtableF2[Coord[0]])) {
            if (Array.isArray(pruningtableF2[Coord[0]][Coord[1]])) {
              if (pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
                solutionF2 = draaienf2[i] + " " + draaienf2[j] + " " + draaienf2[k] + " " + pruningtableF2[Coord[0]][Coord[1]][Coord[2]]
                return;
              }
            }
          }
          scramblestaatF2()
        }
      }
    }

    diepte2 = 4
    for (var i = 0; i < draaienf2.length; i++) {
      for (var j = 0; j < draaienf2.length; j++) {
        for (var k = 0; k < draaienf2.length; k++) {
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

    diepte2 = 5
    for (var i = 0; i < draaienf2.length; i++) {
      for (var j = 0; j < draaienf2.length; j++) {
        for (var k = 0; k < draaienf2.length; k++) {
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

    diepte2 = 6
    for (var i = 0; i < draaienf2.length; i++) {
      for (var j = 0; j < draaienf2.length; j++) {
        for (var k = 0; k < draaienf2.length; k++) {
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
    failed = true
  }
  
  //solution = ...
  if (!failed) {
    document.getElementById("solution1").innerHTML = "Oplossing: " + extra + " " + solutionF1 + " " + solutionF2
    extra = ""
    tries = 0
    gebleven = [0]
  }
  else if (failed) {
    tries += 1
    if(gebleven[gebleven.length-2] != 17){
      gebleven[gebleven.length-2] += 1
      gebleven[gebleven.length-1] = 0
    }
    else{
      gebleven[gebleven.length-3] += 1
      gebleven[gebleven.length-2] = 0
      gebleven[gebleven.length-1] = 0
    }
    ga()
  }
  }
}

function oplosstaatF1() {
  COstaat = COopgelost.slice(0)
  EOstaat = EOopgelost.slice(0)
  UD1staat = UD1opgelost.slice(0);
  berekenCoordUitStaatF1();
}

function scramblestaatF1() {
  Coord = scramblecoord.slice(0)
  COcoord = scramblecoord[0]
  EOcoord = scramblecoord[1]
  UD1coord = scramblecoord[2]
}

function oplosstaatF2() {
  CPstaat = CPopgelost.slice(0)
  EPstaat = EPopgelost.slice(0)
  UD2staat = UD2opgelost.slice(0)
  berekenCoordUitStaatF2();
}

function scramblestaatF2() {
  Coord = scramblecoord.slice(0)
  CPcoord = scramblecoord[0]
  EPcoord = scramblecoord[1]
  UD2coord = scramblecoord[2]
}
