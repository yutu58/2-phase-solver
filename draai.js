function draai(d){
if(draaien.includes(d)){
COcoord = COmovetable[COcoord][draaien.indexOf(d)]
EOcoord = EOmovetable[EOcoord][draaien.indexOf(d)]
UD1coord = UD1movetable[UD1coord][draaien.indexOf(d)]
Coord = [COcoord, EOcoord, UD1coord]
}
}

function inverse(d){
if(draaien.includes(d)){
  if ((draaien.indexOf(d) % 3) == 0){
    return draaien[draaien.indexOf(d) + 1]
  } else if ((draaien.indexOf(d) % 3) == 1){
    return draaien[draaien.indexOf(d) - 1]
  } else if ((draaien.indexOf(d) % 3) == 2) {
    return d
  }
}
}
