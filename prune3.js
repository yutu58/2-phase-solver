function pruneCreateTableF1() {
  for (var i = 0; i < 2187; i++) {
    pruningtableF1[i] = []
    for (var j = 0; j < 2048; j++) {
      pruningtableF1[i][j] = []
    }
  }
}

function pruneFromSolvedF1() {
  oplosstaatF1()
  pruneCreateTableF1()

  fase = 1
  diepte = 0
  pruningtableF1[Coord[0]][Coord[1]][Coord[2]] = " "

  diepte = 1
  for (var i = 0; i < draaien.length; i++) {
    draai(draaien[i])
    if (!pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
      pruningtableF1[Coord[0]][Coord[1]][Coord[2]] = inverse(draaien[i])
    }
    oplosstaatF1()
  }

  diepte = 2
  for (var i = 0; i < draaien.length; i++) {
    for (var j = 0; j < draaien.length; j++) {
      draai(draaien[i])
      draai(draaien[j])
      if (!pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
        pruningtableF1[Coord[0]][Coord[1]][Coord[2]] = inverse(draaien[j]) + " " + inverse(draaien[i])
      }
      oplosstaatF1()
    }
  }

  diepte = 3
  for (var i = 0; i < draaien.length; i++) {
    for (var j = 0; j < draaien.length; j++) {
      for (var k = 0; k < draaien.length; k++) {
        draai(draaien[i])
        draai(draaien[j])
        draai(draaien[k])
        if (!pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
          pruningtableF1[Coord[0]][Coord[1]][Coord[2]] = inverse(draaien[k]) + " " + inverse(draaien[j]) + " " + inverse(draaien[i])
        }
        oplosstaatF1()
      }
    }
  }

  diepte = 4
  for (var i = 0; i < draaien.length; i++) {
    for (var j = 0; j < draaien.length; j++) {
      for (var k = 0; k < draaien.length; k++) {
        for (var l = 0; l < draaien.length; l++) {
          draai(draaien[i])
          draai(draaien[j])
          draai(draaien[k])
          draai(draaien[l])
          if (!pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
            pruningtableF1[Coord[0]][Coord[1]][Coord[2]] = inverse(draaien[l]) + " " + inverse(draaien[k]) + " " + inverse(draaien[j]) + " " + inverse(draaien[i])
          }
          oplosstaatF1()
        }
      }
    }
  }

  diepte = 5
  for (var i = 0; i < draaien.length; i++) {
    for (var j = 0; j < draaien.length; j++) {
      for (var k = 0; k < draaien.length; k++) {
        for (var l = 0; l < draaien.length; l++) {
          for (var m = 0; m < draaien.length; m++) {
            draai(draaien[i])
            draai(draaien[j])
            draai(draaien[k])
            draai(draaien[l])
            draai(draaien[m])
            if (!pruningtableF1[Coord[0]][Coord[1]][Coord[2]]) {
              pruningtableF1[Coord[0]][Coord[1]][Coord[2]] = inverse(draaien[m]) + " " + inverse(draaien[l]) + " " + inverse(draaien[k]) + " " + inverse(draaien[j]) + " " + inverse(draaien[i])
            }
            oplosstaatF1()
          }
        }
      }
    }
  }
}


function pruneCreateTableF2() {
  for (var i = 0; i < 10; i++) {
    pruningtableF2[i] = []
    for (var j = 0; j < 10; j++) {
      pruningtableF2[i][j] = []
    }
  }
}

function pruneFromSolvedF2() {
  oplosstaatF2()
  pruneCreateTableF2()

  fase = 2
  diepte = 0
  pruningtableF2[Coord[0]][Coord[1]][Coord[2]] = " "

  //diepte 1
  for (var i = 0; i < draaienf2.length; i++) {
    draai(draaienf2[i])
    checkIfArray()
    if (!pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
      pruningtableF2[Coord[0]][Coord[1]][Coord[2]] = inverse(draaienf2[i])
    }
    oplosstaatF2()
  }

  //diepte 2
  for (var i = 0; i < draaienf2.length; i++) {
    for (var j = 0; j < draaienf2.length; j++) {
      draai(draaienf2[i])
      draai(draaienf2[j])
      checkIfArray()
      if (!pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
        pruningtableF2[Coord[0]][Coord[1]][Coord[2]] = inverse(draaienf2[j]) + " " + inverse(draaienf2[i])
      }
      oplosstaatF2()
    }
  }

  //diepte 3
  for (var i = 0; i < draaienf2.length; i++) {
    for (var j = 0; j < draaienf2.length; j++) {
      for (var k = 0; k < draaienf2.length; k++) {
        draai(draaienf2[i])
        draai(draaienf2[j])
        draai(draaienf2[k])
        checkIfArray()
        if (!pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
          pruningtableF2[Coord[0]][Coord[1]][Coord[2]] = inverse(draaienf2[k]) + " " + inverse(draaienf2[j]) + " " + inverse(draaienf2[i])
        }
        oplosstaatF2()
      }
    }
  }

  //diepte 4
  for (var i = 0; i < draaienf2.length; i++) {
    for (var j = 0; j < draaienf2.length; j++) {
      for (var k = 0; k < draaienf2.length; k++) {
        for (var l = 0; l < draaienf2.length; l++) {
          draai(draaienf2[i])
          draai(draaienf2[j])
          draai(draaienf2[k])
          draai(draaienf2[l])
          checkIfArray()
          if (!pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
            pruningtableF2[Coord[0]][Coord[1]][Coord[2]] = inverse(draaienf2[l]) + " " + inverse(draaienf2[k]) + " " + inverse(draaienf2[j]) + " " + inverse(draaienf2[i])
          }
          oplosstaatF2()
        }
      }
    }
  }

  //diepte 5
  for (var i = 0; i < draaienf2.length; i++) {
    for (var j = 0; j < draaienf2.length; j++) {
      for (var k = 0; k < draaienf2.length; k++) {
        for (var l = 0; l < draaienf2.length; l++) {
          for (var m = 0; m < draaienf2.length; m++) {
            draai(draaienf2[i])
            draai(draaienf2[j])
            draai(draaienf2[k])
            draai(draaienf2[l])
            draai(draaienf2[m])
            checkIfArray()
            if (!pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
              pruningtableF2[Coord[0]][Coord[1]][Coord[2]] = inverse(draaienf2[m]) + " " + inverse(draaienf2[l]) + " " + inverse(draaienf2[k]) + " " + inverse(draaienf2[j]) + " " + inverse(draaienf2[i])
            }
            oplosstaatF2()
          }
        }
      }
    }
  }

  //diepte 6
  for (var i = 0; i < draaienf2.length; i++) {
    for (var j = 0; j < draaienf2.length; j++) {
      for (var k = 0; k < draaienf2.length; k++) {
        for (var l = 0; l < draaienf2.length; l++) {
          for (var m = 0; m < draaienf2.length; m++) {
            for (var n = 0; n < draaienf2.length; n++) {
              draai(draaienf2[i])
              draai(draaienf2[j])
              draai(draaienf2[k])
              draai(draaienf2[l])
              draai(draaienf2[m])
              draai(draaienf2[n])
              checkIfArray()
              if (!pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
                pruningtableF2[Coord[0]][Coord[1]][Coord[2]] = inverse(draaienf2[n]) + " " + inverse(draaienf2[m]) + " " + inverse(draaienf2[l]) + " " + inverse(draaienf2[k]) + " " + inverse(draaienf2[j]) + " " + inverse(draaienf2[i])
              }
              oplosstaatF2()
            }
          }
        }
      }
    }
  }

  //diepte 7
  for (var i = 0; i < draaienf2.length; i++) {
    for (var j = 0; j < draaienf2.length; j++) {
      for (var k = 0; k < draaienf2.length; k++) {
        for (var l = 0; l < draaienf2.length; l++) {
          for (var m = 0; m < draaienf2.length; m++) {
            for (var n = 0; n < draaienf2.length; n++) {
              for (var o = 0; o < draaienf2.length; o++) {
              draai(draaienf2[i])
              draai(draaienf2[j])
              draai(draaienf2[k])
              draai(draaienf2[l])
              draai(draaienf2[m])
              draai(draaienf2[n])
              draai(draaienf2[o])
              checkIfArray()
              if (!pruningtableF2[Coord[0]][Coord[1]][Coord[2]]) {
                pruningtableF2[Coord[0]][Coord[1]][Coord[2]] = inverse(draaienf2[o]) + " " + inverse(draaienf2[n]) + " " + inverse(draaienf2[m]) + " " + inverse(draaienf2[l]) + " " + inverse(draaienf2[k]) + " " + inverse(draaienf2[j]) + " " + inverse(draaienf2[i])
              }
              oplosstaatF2()
            }
            }
          }
        }
      }
    }
  }

}

pruneFromSolvedF1()
pruneFromSolvedF2();
document.getElementById("settingsmenu").style.visibility = "hidden"

function checkIfArray() {
  if (!Array.isArray(pruningtableF2[Coord[0]])) {
    pruningtableF2[Coord[0]] = []
  }
  if (!Array.isArray(pruningtableF2[Coord[0]][Coord[1]])) {
    pruningtableF2[Coord[0]][Coord[1]] = []
  }
}
