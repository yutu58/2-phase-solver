var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var selectedcolor = "grey"

//define stickers
class sticker {
  constructor(x) {
    this.id = x
    this.color = "grey"
    this.xcoord = ""
    this.ycoord = ""
  }
}

function plaatstoid(x, y) {
  for (var i = 0; i < stickers.length; i++) {
    if (stickers[i].xcoord == x && stickers[i].ycoord == y) {
      return i;
    }
  }
}

function idtoplaats(id) {
  let x = stickers[id].xcoord
  let y = stickers[id].ycoord
  return [x, y];
}

//picking a color
var colornumber = 0
function changecolor(p) {
  var colors = ["white", "yellow", "green", "red", "blue", "orange"]
  selectedcolor = colors[p]
}

function getSquare(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: 1 + (evt.clientX - rect.left) - (evt.clientX - rect.left) % 30,
    y: 1 + (evt.clientY - rect.top) - (evt.clientY - rect.top) % 30
  };
}

function drawGrid(context) {
  for (var x = 0.5; x < 451; x += 30) {
    context.moveTo(x, 0);
    context.lineTo(x, 451);
  }

  for (var y = 0.5; y < 451; y += 30) {
    context.moveTo(0, y);
    context.lineTo(451, y);
  }

  context.strokeStyle = "#ddd";
  context.stroke();
}

  //fill up with grey
for (var i = 0; i < 15; i++){
  for (var j = 0; j < 11; j++) {
    let x = 30*i
    let y = 30*j
    fillSquare(context, x+1, y+1, "#DCDCDC")
  }
}

function fillSquare(context, x, y, color) {
  context.fillStyle = color
  context.fillRect(x, y, 29, 29);
}

canvas.addEventListener('click', function (evt) {
  var mousePos = getSquare(canvas, evt);
  var stickerid = plaatstoid(mousePos.x, mousePos.y)
  if (stickerid || stickerid == 0) {
    stickers[stickerid].color = selectedcolor
    repaint()
  }
}, false);



//put 54 stickers in an array
var stickers = []
for (var i = 0; i < 54; i++) {
  stickers.push(new sticker(i))
}

//create grid and set coords
drawGrid(context);
var stickersdone = 0


//white face
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    stickers[stickersdone].xcoord = (4 + j) * 30 + 1
    stickers[stickersdone].ycoord = i * 30 + 1
    stickersdone += 1
  }
}

//orange face
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    stickers[stickersdone].xcoord = (j) * 30 + 1
    stickers[stickersdone].ycoord = (4 + i) * 30 + 1
    stickersdone += 1
  }
}

//green face
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    stickers[stickersdone].xcoord = (4 + j) * 30 + 1
    stickers[stickersdone].ycoord = (4 + i) * 30 + 1
    stickersdone += 1
  }
}

//red face
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    stickers[stickersdone].xcoord = (8 + j) * 30 + 1
    stickers[stickersdone].ycoord = (4 + i) * 30 + 1
    stickersdone += 1
  }
}

//blue face
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    stickers[stickersdone].xcoord = (12 + j) * 30 + 1
    stickers[stickersdone].ycoord = (4 + i) * 30 + 1
    stickersdone += 1
  }
}

//yellow face
//red face
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    stickers[stickersdone].xcoord = (4 + j) * 30 + 1
    stickers[stickersdone].ycoord = (8 + i) * 30 + 1
    stickersdone += 1
  }
}


//set to fresh cube
fresh()
function fresh() {
  for (var i = 0; i < stickers.length; i++) {
    stickers[i].color = "grey"
  }
  repaint()
}

function fixcenters() {
  stickers[4].color = "white"
  stickers[13].color = "orange"
  stickers[22].color = "green"
  stickers[31].color = "red"
  stickers[40].color = "blue"
  stickers[49].color = "yellow"
}

function repaint() {
  fixcenters()
  for (var i = 0; i < stickers.length; i++) {
    let sticker = stickers[i]
    fillSquare(context, sticker.xcoord, sticker.ycoord, sticker.color)
  }
}

function scramblecoordUitPlaatje() {
  //find COstaat & CPtracker
  COstaat = [0, 0, 0, 0, 0, 0, 0, 0]
  let cornerstickers = [0, 2, 6, 8, 9, 11, 15, 17, 18, 20, 24, 26, 27, 29, 33, 35, 36, 38, 42, 44, 45, 47, 51, 53]
  let oncornerpiece = [[0, 9, 38], [2, 36, 29], [8, 27, 20], [6, 18, 11], [45, 17, 24], [47, 26, 33], [53, 35, 42], [51, 44, 15]]//UBL URB UFR ULF DFL DRF DBR DLB
  for (var i = 0; i < oncornerpiece.length; i++) {
    //COstaat
    for (var j = 0; j < 3; j++) {
      if (stickers[oncornerpiece[i][j]].color == "white" || stickers[oncornerpiece[i][j]].color == "yellow") {
        COstaat[i] = j
      }
    }

    //CPtracker
    let ocpcolors = [stickers[oncornerpiece[i][0]].color, stickers[oncornerpiece[i][1]].color, stickers[oncornerpiece[i][2]].color]
    if (ocpcolors.includes("white") && ocpcolors.includes("blue") && ocpcolors.includes("orange")) {
      CPtracker[i] = 0
    } else if (ocpcolors.includes("white") && ocpcolors.includes("blue") && ocpcolors.includes("red")) {
      CPtracker[i] = 1
    } else if (ocpcolors.includes("white") && ocpcolors.includes("green") && ocpcolors.includes("red")) {
      CPtracker[i] = 2
    } else if (ocpcolors.includes("white") && ocpcolors.includes("green") && ocpcolors.includes("orange")) {
      CPtracker[i] = 3
    } else if (ocpcolors.includes("yellow") && ocpcolors.includes("green") && ocpcolors.includes("orange")) {
      CPtracker[i] = 4
    } else if (ocpcolors.includes("yellow") && ocpcolors.includes("green") && ocpcolors.includes("red")) {
      CPtracker[i] = 5
    } else if (ocpcolors.includes("yellow") && ocpcolors.includes("blue") && ocpcolors.includes("red")) {
      CPtracker[i] = 6
    } else if (ocpcolors.includes("yellow") && ocpcolors.includes("blue") && ocpcolors.includes("orange")) {
      CPtracker[i] = 7
    }

  }

  //find EOstaat & UD1staat & EPtracker
  EOstaat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  UD1staat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let edgestickers = [1, 3, 5, 7, 10, 12, 14, 16, 19, 21, 23, 25, 28, 30, 32, 34, 37, 39, 41, 43, 46, 48, 50, 52]
  let onedgepiece = [[1, 37], [5, 28], [7, 19], [3, 10], [23, 30], [39, 32], [41, 12], [21, 14], [46, 25], [50, 34], [52, 43], [48, 16]] //UB UR UF UD FL FR BR BL DF DR DB DL
  for (var i = 0; i < onedgepiece.length; i++) {
    var done = false
    for (var j = 0; j < 2; j++) {
      if (stickers[onedgepiece[i][j]].color == "white" || stickers[onedgepiece[i][j]].color == "yellow") {
        EOstaat[i] = j
        done = true
      }
    }
    //GEEN else
    if (!done) { //Als de sticker geen wit of geel heeft en dus nog niet is opgenomen; dit is gelijk een UD1-edge
      for (var k = 0; k < 2; k++) {
        if (stickers[onedgepiece[i][k]].color == "blue" || stickers[onedgepiece[i][k]].color == "green") {
          EOstaat[i] = k
          UD1staat[i] = 1
          done = true
        }
      }
    }
    //EPtracker
    let oepcolors = [stickers[onedgepiece[i][0]].color, stickers[onedgepiece[i][1]].color]
    if (oepcolors.includes("white") && oepcolors.includes("blue")) {
      EPtracker[i] = 0
    } else if (oepcolors.includes("white") && oepcolors.includes("red")) {
      EPtracker[i] = 1
    } else if (oepcolors.includes("white") && oepcolors.includes("green")) {
      EPtracker[i] = 2
    } else if (oepcolors.includes("white") && oepcolors.includes("orange")) {
      EPtracker[i] = 3
    } else if (oepcolors.includes("green") && oepcolors.includes("red")) {
      EPtracker[i] = 4
    } else if (oepcolors.includes("blue") && oepcolors.includes("red")) {
      EPtracker[i] = 5
    } else if (oepcolors.includes("orange") && oepcolors.includes("blue")) {
      EPtracker[i] = 6
    } else if (oepcolors.includes("orange") && oepcolors.includes("green")) {
      EPtracker[i] = 7
    } else if (oepcolors.includes("yellow") && oepcolors.includes("green")) {
      EPtracker[i] = 8
    } else if (oepcolors.includes("yellow") && oepcolors.includes("red")) {
      EPtracker[i] = 9
    } else if (oepcolors.includes("yellow") && oepcolors.includes("blue")) {
      EPtracker[i] = 10
    } else if (oepcolors.includes("yellow") && oepcolors.includes("orange")) {
      EPtracker[i] = 11
    }
  }

  berekenCoordUitStaatF1()
  return Coord;
}
