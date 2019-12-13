//library
function MoveElementsInArray(arr, old_index, new_index) {
  while (old_index < 0) {
    old_index += arr.length;
  }
  while (new_index < 0) {
    new_index += arr.length;
  }
  if (new_index >= arr.length) {
    var k = new_index - arr.length;
    while ((k--) + 1) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
}

function binomial(a, b) {
  if (b == 0) {
    return 1;
  }
  else {
    var c = factorial(a) / (factorial(a - b) * factorial(b))
    return c;
  }
}

function factorial(a) {
  for (var b = (a - 1); b > 0; b--) {
    a = a * b
  }
  return a;
}

Number.prototype.pad = function (size) { //add 0's before number
  var s = String(this);
  while (s.length < (size || 2)) { s = "0" + s; }
  return s;
}

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

function countnumberof2cyles(arr, arrsolved) {
  let done = []
  var numberofcycles = 0
  var i = 0

  while (done.length != arr.length) {
    //kleinste i die nog niet gedaan is
    function checkifdone(a) {
      return !done.includes(a)
    }
    let temp = arr.filter(checkifdone)
    i = Math.min(...temp)
    numberofcycles += 1
    while (!done.includes(i)) {
      done.push(i)
      i = arr[i]
    }
  }
  return ((arr.length - numberofcycles) % 2)
}

const arrSum = arr => arr.reduce((a, b) => a + b, 0)

function removelastcharacter(a) {
  let x = a.slice(0, -1)
  return x
}
