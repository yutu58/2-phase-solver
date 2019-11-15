var COopgelost = [0, 0, 0, 0, 0, 0, 0, 0]
var EOopgelost = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var UD1opgelost = [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
var COstaat;
var EOstaat;
var UD1staat;
var scramble;
var solved;
var max;
var Coord, COcoord, EOcoord, UD1coord, scramblecoord;
var pruningtable = []

function test(){
scramble = document.getElementById("inputtedscramble").value.split(" ")
scramble.forEach(draai)
document.getElementById("solution1").innerHTML = Coord
}

function ga(){
//zet de kubus naar opgelost voordat hij begint
oplosstaat()

//pas de scramble toe
solved = false
scramble = document.getElementById("inputtedscramble").value.split(" ")
scramble.forEach(draai)
scramblecoord = Coord

//los op
losop()

//zoek de oplossing voor fase 1
function losop(){
scramblestaat()

diepte = 0
if (pruningtable[Coord[0]][Coord[1]][Coord[2]]){
document.getElementById("solution1").innerHTML = (pruningtable[Coord[0]][Coord[1]][Coord[2]] + diepte + " ")
return;
}

diepte = 1
for (var i = 0; i<draaien.length; i++){
draai(draaien[i])
if (pruningtable[Coord[0]][Coord[1]][Coord[2]]){
document.getElementById("solution1").innerHTML = draaien[i] + " " + pruningtable[Coord[0]][Coord[1]][Coord[2]]
return;}
scramblestaat()
}

diepte = 2
for (var i = 0; i<draaien.length; i++){
for (var j = 0; j<draaien.length; j++){
draai(draaien[i])
draai(draaien[j])
if (pruningtable[Coord[0]][Coord[1]][Coord[2]]){
document.getElementById("solution1").innerHTML = draaien[i] + " " + draaien[j] + " " + pruningtable[Coord[0]][Coord[1]][Coord[2]]
return;}
scramblestaat()
}
}

diepte = 3
for (var i = 0; i<draaien.length; i++){
for (var j = 0; j<draaien.length; j++){
for (var k = 0; k<draaien.length; k++){
draai(draaien[i])
draai(draaien[j])
draai(draaien[k])
if (pruningtable[Coord[0]][Coord[1]][Coord[2]]){
document.getElementById("solution1").innerHTML = draaien[i] + " " + draaien[j] + " " + draaien[k] + " " + pruningtable[Coord[0]][Coord[1]][Coord[2]]
return;}
scramblestaat()
}
}
}

diepte = 4
for (var i = 0; i<draaien.length; i++){
for (var j = 0; j<draaien.length; j++){
for (var k = 0; k<draaien.length; k++){
for (var l = 0; l<draaien.length; l++){
scramblestaat()
draai(draaien[i])
draai(draaien[j])
draai(draaien[k])
draai(draaien[l])
if (pruningtable[Coord[0]][Coord[1]][Coord[2]]){
document.getElementById("solution1").innerHTML = draaien[i] + " " + draaien[j] + " " + draaien[k]  + " " + draaien[l]  + " " + pruningtable[Coord[0]][Coord[1]][Coord[2]]
return;}
}
}
}
}

diepte = 5
for (var i = 0; i<draaien.length; i++){
for (var j = 0; j<draaien.length; j++){
for (var k = 0; k<draaien.length; k++){
for (var l = 0; l<draaien.length; l++){
for (var m = 0; m<draaien.length; m++){
scramblestaat()
draai(draaien[i])
draai(draaien[j])
draai(draaien[k])
draai(draaien[l])
draai(draaien[m])
if (pruningtable[Coord[0]][Coord[1]][Coord[2]]){
document.getElementById("solution1").innerHTML = draaien[i] + " " + draaien[j] + " " + draaien[k]  + " " + draaien[l] + " " + draaien[m]  + " " + pruningtable[Coord[0]][Coord[1]][Coord[2]]
return;}
}
}
}
}
}
}
}

function oplosstaat() {
COstaat = COopgelost.slice(0)
EOstaat = EOopgelost.slice(0)
UD1staat = UD1opgelost.slice(0)
berekenCoordUitStaat();
}

function scramblestaat() {
coord = scramblecoord
COcoord = scramblecoord[0]
EOcoord = scramblecoord[1]
UD1coord = scramblecoord[2]
}
