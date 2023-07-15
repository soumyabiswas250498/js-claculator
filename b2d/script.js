'use strict';
function d2b(str) {
  let fractionArr = str.split('.');
  let int = fractionArr[0];
  let frac = fractionArr[1] / Math.pow(10, fractionArr[1].length);
  let binaryInt = [];
  let binaryFrac = [];
  let set = new Set();
  while (int >= 1) {
    if (int % 2) {
      binaryInt.push(1);
      int = int - 1;
    } else {
      binaryInt.push(0);
    }
    int = int / 2;
  }

  while (frac != 1) {
    frac = 2 * frac;
    if (frac > 1) {
      frac = frac - 1;
      binaryFrac.push(1);
    } else if (frac == 1) {
      binaryFrac.push(1);
    } else {
      binaryFrac.push(0);
    }
    // console.log(frac);
    if (set.has(Math.round(frac * 100000))) {
      break;
    } else {
      set.add(Math.round(frac * 100000));
    }
  }
  //   console.log(frac);
  //   console.log(set);
  binaryInt.reverse();
  let intText = binaryInt.join('');
  let fracText = binaryFrac.join('');
  return intText + '.' + fracText;
}

let str = '23.73';
console.log(d2b(str));
