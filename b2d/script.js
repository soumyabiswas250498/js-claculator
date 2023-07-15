'use strict';
let convertion = true;
const arrow = document.querySelector('#arrow');
arrow.addEventListener('click', () => {
  if (arrow.textContent === '↑') {
    arrow.innerHTML = `<h1>&#8595;</h1>`;
    convertion = false;
  } else {
    arrow.innerHTML = `<h1>&#8593;</h1>`;
    convertion = true;
  }
});

const binary = document.getElementById('binary');
const decimal = document.getElementById('decimal');

const calculate = document.getElementById('cal');
calculate.addEventListener('click', () => {
  if (convertion && decimal.value != '') {
    let i = parseFloat(decimal.value);
    binary.value = i.toString(2);
  } else if (convertion === false && binary.value != '') {
    console.log(b2d(binary.value));
    decimal.value = b2d(binary.value);
  } else {
    decimal.value = '0';
    binary.value = '0';
  }
});

function b2d(str) {
  const arrFraction = str.split('.');
  const length = arrFraction.length;
  if (length === 1) {
    const arr = [...arrFraction[0]];
    const n = arr.length;
    let decInt = 0;
    let i = n - 1;
    arr.forEach(el => {
      decInt += el * Math.pow(2, i);
      i--;
    });
    return decInt;
  } else if (length === 2) {
    const arr1 = [...arrFraction[0]];
    const arr2 = [...arrFraction[1]];
    const n1 = arr1.length;
    let decInt = 0;
    let i1 = n1 - 1;
    arr1.forEach(el => {
      decInt += el * Math.pow(2, i1);
      i1--;
    });
    let decFrac = 0;
    let i2 = 1;
    arr2.forEach(el => {
      decFrac += el * Math.pow(2, -i2);
      i2++;
    });
    const res = decInt + decFrac;
    return res;
  }
}
