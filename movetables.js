var draaien = ["U", "U'", "U2", "R", "R'", "R2", "L", "L'", "L2", "F", "F'", "F2", "D", "D'", "D2", "B", "B'", "B2"]

function draai2(d) {
  var COoud = COstaat.slice(0)
  var EOoud = EOstaat.slice(0)
  var UD1oud = UD1staat.slice(0)
  switch (d) {
    case "U":
      MoveElementsInArray(COstaat, 3, 0)
      MoveElementsInArray(EOstaat, 3, 0)
      MoveElementsInArray(UD1staat, 3, 0)
      break;
    case "U'":
      MoveElementsInArray(COstaat, 0, 3)
      MoveElementsInArray(EOstaat, 0, 3)
      MoveElementsInArray(UD1staat, 0, 3)
      break;
    case "U2":
      MoveElementsInArray(COstaat, 3, 0)
      MoveElementsInArray(COstaat, 3, 0)
      MoveElementsInArray(EOstaat, 3, 0)
      MoveElementsInArray(EOstaat, 3, 0)
      MoveElementsInArray(UD1staat, 3, 0)
      MoveElementsInArray(UD1staat, 3, 0)
      break;
    case "D":
      MoveElementsInArray(COstaat, 7, 4)
      MoveElementsInArray(EOstaat, 11, 8)
      MoveElementsInArray(UD1staat, 11, 8)
      break;
    case "D'":
      MoveElementsInArray(COstaat, 4, 7)
      MoveElementsInArray(EOstaat, 8, 11)
      MoveElementsInArray(UD1staat, 8, 11)
      break;
    case "D2":
      MoveElementsInArray(COstaat, 7, 4)
      MoveElementsInArray(COstaat, 7, 4)
      MoveElementsInArray(EOstaat, 11, 8)
      MoveElementsInArray(EOstaat, 11, 8)
      MoveElementsInArray(UD1staat, 11, 8)
      MoveElementsInArray(UD1staat, 11, 8)
      break;
    case "R":
      //CO
      COstaat[1] = (COoud[2] + 1) % 3
      COstaat[2] = (COoud[5] + 2) % 3
      COstaat[5] = (COoud[6] + 1) % 3
      COstaat[6] = (COoud[1] + 2) % 3
      //EO
      EOstaat[1] = EOoud[4]
      EOstaat[4] = EOoud[9]
      EOstaat[5] = EOoud[1]
      EOstaat[9] = EOoud[5]
      //UD1
      UD1staat[1] = UD1oud[4]
      UD1staat[4] = UD1oud[9]
      UD1staat[5] = UD1oud[1]
      UD1staat[9] = UD1oud[5]
      break;
    case "R'":
      //CO
      COstaat[1] = (COoud[6] + 1) % 3
      COstaat[2] = (COoud[1] + 2) % 3
      COstaat[5] = (COoud[2] + 1) % 3
      COstaat[6] = (COoud[5] + 2) % 3
      //EO
      EOstaat[1] = EOoud[5]
      EOstaat[4] = EOoud[1]
      EOstaat[5] = EOoud[9]
      EOstaat[9] = EOoud[4]
      //UD1
      UD1staat[1] = UD1oud[5]
      UD1staat[4] = UD1oud[1]
      UD1staat[5] = UD1oud[9]
      UD1staat[9] = UD1oud[4]
      break;
    case "R2":
      //CO
      COstaat[1] = COoud[5]
      COstaat[2] = COoud[6]
      COstaat[5] = COoud[1]
      COstaat[6] = COoud[2]
      //EO
      EOstaat[1] = EOoud[9]
      EOstaat[4] = EOoud[5]
      EOstaat[5] = EOoud[4]
      EOstaat[9] = EOoud[1]
      //UD1
      UD1staat[1] = UD1oud[9]
      UD1staat[4] = UD1oud[5]
      UD1staat[5] = UD1oud[4]
      UD1staat[9] = UD1oud[1]
      break;
    case "L":
      //CO
      COstaat[0] = (COoud[7] + 2) % 3
      COstaat[3] = (COoud[0] + 1) % 3
      COstaat[4] = (COoud[3] + 2) % 3
      COstaat[7] = (COoud[4] + 1) % 3
      //EO
      EOstaat[3] = EOoud[6]
      EOstaat[6] = EOoud[11]
      EOstaat[7] = EOoud[3]
      EOstaat[11] = EOoud[7]
      //UD1
      UD1staat[3] = UD1oud[6]
      UD1staat[6] = UD1oud[11]
      UD1staat[7] = UD1oud[3]
      UD1staat[11] = UD1oud[7]
      break;
    case "L'":
      //CO
      COstaat[0] = (COoud[3] + 2) % 3
      COstaat[3] = (COoud[4] + 1) % 3
      COstaat[4] = (COoud[7] + 2) % 3
      COstaat[7] = (COoud[0] + 1) % 3
      //EO
      EOstaat[3] = EOoud[7]
      EOstaat[6] = EOoud[3]
      EOstaat[7] = EOoud[11]
      EOstaat[11] = EOoud[6]
      //UD1
      UD1staat[3] = UD1oud[7]
      UD1staat[6] = UD1oud[3]
      UD1staat[7] = UD1oud[11]
      UD1staat[11] = UD1oud[6]
      break;
    case "L2":
      //CO
      COstaat[0] = COoud[4]
      COstaat[3] = COoud[7]
      COstaat[4] = COoud[0]
      COstaat[7] = COoud[3]
      //EO
      EOstaat[3] = EOoud[11]
      EOstaat[6] = EOoud[7]
      EOstaat[7] = EOoud[6]
      EOstaat[11] = EOoud[3]
      //UD1
      UD1staat[3] = UD1oud[11]
      UD1staat[6] = UD1oud[7]
      UD1staat[7] = UD1oud[6]
      UD1staat[11] = UD1oud[3]
      break;
    case "F":
      //CO
      COstaat[2] = (COoud[3] + 1) % 3
      COstaat[3] = (COoud[4] + 2) % 3
      COstaat[4] = (COoud[5] + 1) % 3
      COstaat[5] = (COoud[2] + 2) % 3
      //EO
      EOstaat[2] = (EOoud[7] + 1) % 2
      EOstaat[4] = (EOoud[2] + 1) % 2
      EOstaat[7] = (EOoud[8] + 1) % 2
      EOstaat[8] = (EOoud[4] + 1) % 2
      //UD1
      UD1staat[2] = UD1oud[7]
      UD1staat[4] = UD1oud[2]
      UD1staat[7] = UD1oud[8]
      UD1staat[8] = UD1oud[4]
      break;
    case "F'":
      //CO
      COstaat[2] = (COoud[5] + 1) % 3
      COstaat[3] = (COoud[2] + 2) % 3
      COstaat[4] = (COoud[3] + 1) % 3
      COstaat[5] = (COoud[4] + 2) % 3
      //EO
      EOstaat[2] = (EOoud[4] + 1) % 2
      EOstaat[4] = (EOoud[8] + 1) % 2
      EOstaat[7] = (EOoud[2] + 1) % 2
      EOstaat[8] = (EOoud[7] + 1) % 2
      //UD1
      UD1staat[2] = UD1oud[4]
      UD1staat[4] = UD1oud[8]
      UD1staat[7] = UD1oud[2]
      UD1staat[8] = UD1oud[7]
      break;
    case "F2":
      //CO
      COstaat[2] = COoud[4]
      COstaat[3] = COoud[5]
      COstaat[4] = COoud[2]
      COstaat[5] = COoud[3]
      //EO
      EOstaat[2] = EOoud[8]
      EOstaat[4] = EOoud[7]
      EOstaat[7] = EOoud[4]
      EOstaat[8] = EOoud[2]
      //UD1
      UD1staat[2] = UD1oud[8]
      UD1staat[4] = UD1oud[7]
      UD1staat[7] = UD1oud[4]
      UD1staat[8] = UD1oud[2]
      break;
    case "B":
      //CO
      COstaat[0] = (COoud[1] + 1) % 3
      COstaat[1] = (COoud[6] + 2) % 3
      COstaat[6] = (COoud[7] + 1) % 3
      COstaat[7] = (COoud[0] + 2) % 3
      //EO
      EOstaat[0] = (EOoud[5] + 1) % 2
      EOstaat[5] = (EOoud[10] + 1) % 2
      EOstaat[6] = (EOoud[0] + 1) % 2
      EOstaat[10] = (EOoud[6] + 1) % 2
      //UD1
      UD1staat[0] = UD1oud[5]
      UD1staat[5] = UD1oud[10]
      UD1staat[6] = UD1oud[0]
      UD1staat[10] = UD1oud[6]
      break;
    case "B'":
      //CO
      COstaat[0] = (COoud[7] + 1) % 3
      COstaat[1] = (COoud[0] + 2) % 3
      COstaat[6] = (COoud[1] + 1) % 3
      COstaat[7] = (COoud[6] + 2) % 3
      //EO
      EOstaat[0] = (EOoud[6] + 1) % 2
      EOstaat[5] = (EOoud[0] + 1) % 2
      EOstaat[6] = (EOoud[10] + 1) % 2
      EOstaat[10] = (EOoud[5] + 1) % 2
      //UD1
      UD1staat[0] = UD1oud[6]
      UD1staat[5] = UD1oud[0]
      UD1staat[6] = UD1oud[10]
      UD1staat[10] = UD1oud[5]
      break;
    case "B2":
      //CO
      COstaat[0] = COoud[6]
      COstaat[1] = COoud[7]
      COstaat[6] = COoud[0]
      COstaat[7] = COoud[1]
      //EO
      EOstaat[0] = EOoud[10]
      EOstaat[5] = EOoud[6]
      EOstaat[6] = EOoud[5]
      EOstaat[10] = EOoud[0]
      //UD1
      UD1staat[0] = UD1oud[10]
      UD1staat[5] = UD1oud[6]
      UD1staat[6] = UD1oud[5]
      UD1staat[10] = UD1oud[0]
      break;
  }
}

//movetables
var COmovetable = []
var EOmovetable = []
var UD1movetable = []

function movetables() {
  COstaat = COopgelost.slice(0)
  EOstaat = EOopgelost.slice(0)
  UD1staat = UD1opgelost.slice(0)

  for (var j = 0; j < 2187; j++) {
    berekenCOstaat(j)
    COmovetable[j] = []
    for (var i = 0; i < draaien.length; i++) {
      draai2(draaien[i])
      berekenCoordUitStaat()
      COmovetable[j].push(COcoord)
      draai2(draaien[i])
      draai2(draaien[i])
      draai2(draaien[i])
    }
  }

  for (var j = 0; j < 2048; j++) {
    berekenEOstaat(j)
    EOmovetable[j] = []
    for (var i = 0; i < draaien.length; i++) {
      draai2(draaien[i])
      berekenCoordUitStaat()
      EOmovetable[j].push(EOcoord)
      draai2(draaien[i])
      draai2(draaien[i])
      draai2(draaien[i])
    }
  }

  for (var j = 0; j < 495; j++) {
    berekenUD1staat(j)
    UD1movetable[j] = []
    for (var i = 0; i < draaien.length; i++) {
      draai2(draaien[i])
      berekenCoordUitStaat()
      UD1movetable[j].push(UD1coord)
      draai2(draaien[i])
      draai2(draaien[i])
      draai2(draaien[i])
    }
  }
}

movetables()
