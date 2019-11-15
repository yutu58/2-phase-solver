function pruneCreateTable(){
for(var i = 0; i<2187; i++){
pruningtable[i] = []
for (var j = 0; j<2048; j++){
pruningtable[i][j] = []
}
}
}

function pruneFromSolved(){
oplosstaat()
pruneCreateTable()

diepte = 0
pruningtable[Coord[0]][Coord[1]][Coord[2]] = "hello world"

diepte = 1
for (var i = 0; i<draaien.length; i++){
draai(draaien[i])
if (!pruningtable[Coord[0]][Coord[1]][Coord[2]]){
pruningtable[Coord[0]][Coord[1]][Coord[2]] = inverse(draaien[m])
}
oplosstaat()
}

diepte = 2
for (var i = 0; i<draaien.length; i++){
for (var j = 0; j<draaien.length; j++){
draai(draaien[i])
draai(draaien[j])
if (!pruningtable[Coord[0]][Coord[1]][Coord[2]]){
pruningtable[Coord[0]][Coord[1]][Coord[2]] = inverse(draaien[m]) + " " + inverse(draaien[l])
}
oplosstaat()
}
}

diepte = 3
for (var i = 0; i<draaien.length; i++){
for (var j = 0; j<draaien.length; j++){
for (var k = 0; k<draaien.length; k++){
draai(draaien[i])
draai(draaien[j])
draai(draaien[k])
if (!pruningtable[Coord[0]][Coord[1]][Coord[2]]){
pruningtable[Coord[0]][Coord[1]][Coord[2]] = inverse(draaien[m]) + " " + inverse(draaien[l]) + " " + inverse(draaien[k])
}
oplosstaat()
}
}
}

diepte = 4
for (var i = 0; i<draaien.length; i++){
for (var j = 0; j<draaien.length; j++){
for (var k = 0; k<draaien.length; k++){
for (var l = 0; l<draaien.length; l++){
draai(draaien[i])
draai(draaien[j])
draai(draaien[k])
draai(draaien[l])
if (!pruningtable[Coord[0]][Coord[1]][Coord[2]]){
pruningtable[Coord[0]][Coord[1]][Coord[2]] = inverse(draaien[m]) + " " + inverse(draaien[l]) + " " + inverse(draaien[k]) + " " + inverse(draaien[j])
}
oplosstaat()
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
draai(draaien[i])
draai(draaien[j])
draai(draaien[k])
draai(draaien[l])
draai(draaien[m])
if (!pruningtable[Coord[0]][Coord[1]][Coord[2]]){
pruningtable[Coord[0]][Coord[1]][Coord[2]] = inverse(draaien[m]) + " " + inverse(draaien[l]) + " " + inverse(draaien[k]) + " " + inverse(draaien[j]) + " " + inverse(draaien[i])
}
oplosstaat()
}
}
}
}
}
}

pruneFromSolved();
