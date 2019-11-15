function berekenCoordUitStaat() {
  COcoord = COstaat[0] * Math.pow(3, 6) + COstaat[1] * Math.pow(3, 5) + COstaat[2] * Math.pow(3, 4) + COstaat[3] * Math.pow(3, 3) + COstaat[4] * Math.pow(3, 2) + COstaat[5] * Math.pow(3, 1) + COstaat[6] * Math.pow(3, 0)
  EOcoord = EOstaat[0] * Math.pow(2, 10) + EOstaat[1] * Math.pow(2, 9) + EOstaat[2] * Math.pow(2, 8) + EOstaat[3] * Math.pow(2, 7) + EOstaat[4] * Math.pow(2, 6) + EOstaat[5] * Math.pow(2, 5) + EOstaat[6] * Math.pow(2, 4) + EOstaat[7] * Math.pow(2, 3) + EOstaat[8] * Math.pow(2, 2) + EOstaat[9] * Math.pow(2, 1) + EOstaat[10] * Math.pow(2, 0)
  //UD1coord
  UD1coord = 0
  var edgesfound = -1
  for (var h = 0; h < UD1staat.length; h++) {
    if (UD1staat[h] == 0 && edgesfound > -1) {
      UD1coord += binomial(h, edgesfound)
    }
    else if (UD1staat[h] == 1) {
      edgesfound += 1
    }
  }
  Coord = [COcoord, EOcoord, UD1coord]
}

function berekenMax() {
  max = Math.max(COpruning[COcoord], EOpruning[EOcoord], UD1pruning[UD1coord])
  lcoord = "(" + Coord + ")"
}

function berekenCOstaat(a) {
  var totalorientation = 0
  var ternary = parseInt(a).toString(3)
  ternary = parseInt(ternary).pad(7)
  for (var b = 0; b < 7; b++) {
    COstaat[b] = parseInt(ternary.charAt(b))
    totalorientation += COstaat[b]
  }
  COstaat[7] = parseInt(3 - (totalorientation % 3))
}

function berekenEOstaat(a) {
  var totalorientation = 0
  var binary = parseInt(a).toString(2)
  binary = parseInt(binary).pad(11)
  for (var b = 0; b < 11; b++) {
    EOstaat[b] = parseInt(binary.charAt(b))
    totalorientation += EOstaat[b]
  }
  EOstaat[11] = parseInt(totalorientation % 2)
}

function berekenUD1staat(a) {
  var edgesnotfound = 3
  for (var b = 11; b >= 0; b--) {
    if (a >= (binomial(b, edgesnotfound)) && edgesnotfound != -1) {
      a += -(binomial(b, edgesnotfound))
      UD1staat[b] = 0
    }
    else if (edgesnotfound != -1) {
      UD1staat[b] = 1
      edgesnotfound -= 1
    }
    else {
      UD1staat[b] = 0
    }
  }
}
