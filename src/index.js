
// exports.min = function min (array) {
//   return 0;
// }

// exports.max = function max (array) {
//   return 0;
// }

// exports.avg = function avg (array) {
//   return 0;
// }

exports.min = function min (array) {
  let result = Math.min(...array);
  return result;
}

exports.max = function max (array) {
  let result = Math.max(...array);
  return result;
}

exports.avg = function avg (array) {
  let total = 0;
  for(let i =0; i < array.length; i++) {
    total += array[i];
  }

  let result = total / array.length;
  return result;
}
