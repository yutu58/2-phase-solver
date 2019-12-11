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

function sortTable(tbody, index, ascending) {
    Array.prototype.slice.call(tbody.children).sort(
        (tr1, tr2) => tr1.children[index].textContent.localeCompare(tr2.children[index].textContent, undefined, {'numeric': true}) * (ascending ? 1 : -1)
        ).forEach(tr => tbody.appendChild(tr));
}
