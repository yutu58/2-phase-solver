function draai(d) {
	if (fase == 1){
	if (draaien.includes(d)) {
    COcoord = COmovetable[COcoord][draaien.indexOf(d)]
    EOcoord = EOmovetable[EOcoord][draaien.indexOf(d)]
    UD1coord = UD1movetable[UD1coord][draaien.indexOf(d)]
    Coord = [COcoord, EOcoord, UD1coord]
  	}
	}
	else if (fase == 2){
  if (draaienf2.includes(d)) {
    CPcoord = CPmovetable[CPcoord][draaienf2.indexOf(d)]
    EPcoord = EPmovetable[EPcoord][draaienf2.indexOf(d)]
    UD2coord = UD2movetable[UD2coord][draaienf2.indexOf(d)]
    Coord = [CPcoord, EPcoord, UD2coord]
  }
	}
  
}

function inverse(d) {
  if (draaien.includes(d)) {
    if ((draaien.indexOf(d) % 3) == 0) {
      return draaien[draaien.indexOf(d) + 1]
    } else if ((draaien.indexOf(d) % 3) == 1) {
      return draaien[draaien.indexOf(d) - 1]
    } else if ((draaien.indexOf(d) % 3) == 2) {
      return d
    }
  }
}


function convertdraai(d) {
var CPtrackeroud = CPtracker.slice(0)
var EPtrackeroud = EPtracker.slice(0)
		switch (d) {
    case "U":
      MoveElementsInArray(CPtracker, 3, 0)
      MoveElementsInArray(EPtracker, 3, 0)
      break;
    case "U'":
      MoveElementsInArray(CPtracker, 0, 3)
      MoveElementsInArray(EPtracker, 0, 3)
      break;
    case "U2":
      MoveElementsInArray(CPtracker, 3, 0)
      MoveElementsInArray(CPtracker, 3, 0)
      MoveElementsInArray(EPtracker, 3, 0)
      MoveElementsInArray(EPtracker, 3, 0)
      break;
    case "D":
      MoveElementsInArray(CPtracker, 7, 4)
      MoveElementsInArray(EPtracker, 11, 8)
      break;
    case "D'":
      MoveElementsInArray(CPtracker, 4, 7)
      MoveElementsInArray(EPtracker, 8, 11)
      break;
    case "D2":
      MoveElementsInArray(CPtracker, 7, 4)
      MoveElementsInArray(CPtracker, 7, 4)
      MoveElementsInArray(EPtracker, 11, 8)
      MoveElementsInArray(EPtracker, 11, 8)
      break;
    case "R":
      //CO
      CPtracker[1] = CPtrackeroud[2]
      CPtracker[2] = CPtrackeroud[5]
      CPtracker[5] = CPtrackeroud[6]
      CPtracker[6] = CPtrackeroud[1]
      //EO
      EPtracker[1] = EPtrackeroud[4]
      EPtracker[4] = EPtrackeroud[9]
      EPtracker[5] = EPtrackeroud[1]
      EPtracker[9] = EPtrackeroud[5]
      break;
    case "R'":
      //CO
      CPtracker[1] = CPtrackeroud[6]
      CPtracker[2] = CPtrackeroud[1]
      CPtracker[5] = CPtrackeroud[2]
      CPtracker[6] = CPtrackeroud[5]
      //EO
      EPtracker[1] = EPtrackeroud[5]
      EPtracker[4] = EPtrackeroud[1]
      EPtracker[5] = EPtrackeroud[9]
      EPtracker[9] = EPtrackeroud[4]
      break;
    case "R2":
      //CO
      CPtracker[1] = CPtrackeroud[5]
      CPtracker[2] = CPtrackeroud[6]
      CPtracker[5] = CPtrackeroud[1]
      CPtracker[6] = CPtrackeroud[2]
      //EO
      EPtracker[1] = EPtrackeroud[9]
      EPtracker[4] = EPtrackeroud[5]
      EPtracker[5] = EPtrackeroud[4]
      EPtracker[9] = EPtrackeroud[1]
      //UD1
      break;
    case "L":
      //CO
      CPtracker[0] = CPtrackeroud[7]
      CPtracker[3] = CPtrackeroud[0]
      CPtracker[4] = CPtrackeroud[3]
      CPtracker[7] = CPtrackeroud[4]
      //EO
      EPtracker[3] = EPtrackeroud[6]
      EPtracker[6] = EPtrackeroud[11]
      EPtracker[7] = EPtrackeroud[3]
      EPtracker[11] = EPtrackeroud[7]
      break;
    case "L'":
      //CO
      CPtracker[0] = CPtrackeroud[3]
      CPtracker[3] = CPtrackeroud[4]
      CPtracker[4] = CPtrackeroud[7]
      CPtracker[7] = CPtrackeroud[0]
      //EO
      EPtracker[3] = EPtrackeroud[7]
      EPtracker[6] = EPtrackeroud[3]
      EPtracker[7] = EPtrackeroud[11]
      EPtracker[11] = EPtrackeroud[6]
      //UD1
      break;
    case "L2":
      //CO
      CPtracker[0] = CPtrackeroud[4]
      CPtracker[3] = CPtrackeroud[7]
      CPtracker[4] = CPtrackeroud[0]
      CPtracker[7] = CPtrackeroud[3]
      //EO
      EPtracker[3] = EPtrackeroud[11]
      EPtracker[6] = EPtrackeroud[7]
      EPtracker[7] = EPtrackeroud[6]
      EPtracker[11] = EPtrackeroud[3]
      //UD1
      break;
    case "F":
      //CO
      CPtracker[2] = CPtrackeroud[3]
      CPtracker[3] = CPtrackeroud[4]
      CPtracker[4] = CPtrackeroud[5]
      CPtracker[5] = CPtrackeroud[2]
      //EO
      EPtracker[2] = EPtrackeroud[7]
      EPtracker[4] = EPtrackeroud[2]
      EPtracker[7] = EPtrackeroud[8]
      EPtracker[8] = EPtrackeroud[4]
      //UD1
      break;
    case "F'":
      //CO
      CPtracker[2] = CPtrackeroud[5]
      CPtracker[3] = CPtrackeroud[2]
      CPtracker[4] = CPtrackeroud[3]
      CPtracker[5] = CPtrackeroud[4]
      //EO
      EPtracker[2] = EPtrackeroud[4]
      EPtracker[4] = EPtrackeroud[8]
      EPtracker[7] = EPtrackeroud[2]
      EPtracker[8] = EPtrackeroud[7]
      //UD1
      break;
    case "F2":
      //CO
      CPtracker[2] = CPtrackeroud[4]
      CPtracker[3] = CPtrackeroud[5]
      CPtracker[4] = CPtrackeroud[2]
      CPtracker[5] = CPtrackeroud[3]
      //EO
      EPtracker[2] = EPtrackeroud[8]
      EPtracker[4] = EPtrackeroud[7]
      EPtracker[7] = EPtrackeroud[4]
      EPtracker[8] = EPtrackeroud[2]
      //UD1
      break;
    case "B":
      //CO
      CPtracker[0] = CPtrackeroud[1]
      CPtracker[1] = CPtrackeroud[6]
      CPtracker[6] = CPtrackeroud[7]
      CPtracker[7] = CPtrackeroud[0]
      //EO
      EPtracker[0] = EPtrackeroud[5]
      EPtracker[5] = EPtrackeroud[10]
      EPtracker[6] = EPtrackeroud[0]
      EPtracker[10] = EPtrackeroud[6]
      //UD1
      break;
    case "B'":
      //CO
      CPtracker[0] = CPtrackeroud[7]
      CPtracker[1] = CPtrackeroud[0]
      CPtracker[6] = CPtrackeroud[1]
      CPtracker[7] = CPtrackeroud[6]
      //EO
      EPtracker[0] = EPtrackeroud[6]
      EPtracker[5] = EPtrackeroud[0]
      EPtracker[6] = EPtrackeroud[10]
      EPtracker[10] = EPtrackeroud[5]
      //UD1
      break;
    case "B2":
      //CO
      CPtracker[0] = CPtrackeroud[6]
      CPtracker[1] = CPtrackeroud[7]
      CPtracker[6] = CPtrackeroud[0]
      CPtracker[7] = CPtrackeroud[1]
      //EO
      EPtracker[0] = EPtrackeroud[10]
      EPtracker[5] = EPtrackeroud[6]
      EPtracker[6] = EPtrackeroud[5]
      EPtracker[10] = EPtrackeroud[0]
      break;
  }
}
