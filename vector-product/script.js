'use strict';
let option = 0;

const display = document.getElementById('display');

const optFunc = () => {
  option = document.getElementById('operation').selectedIndex;

  if (option === 0) {
    document.querySelector('#container>h2').innerText = 'Vector Cross Product';
  } else {
    document.querySelector('#container>h2').innerText = 'Vector Dot Product';
  }
};

const calBtn = document.getElementById('calculate');
calBtn.addEventListener('click', () => {
  calFunc();
});
const calFunc = () => {
  const inputA = document.querySelectorAll('#vector1');
  const inputB = document.querySelectorAll('#vector2');
  let vectorA = [];
  let vectorB = [];
  inputA.forEach(elem => {
    vectorA.push(elem.value);
  });
  inputB.forEach(elem => {
    vectorB.push(elem.value);
  });
  if (option === 0) {
    crossProduct(vectorA, vectorB);
  } else {
    dotProduct(vectorA, vectorB);
  }
};

function crossProduct(vectorA, vectorB) {
  if (
    Array.isArray(checkVector(vectorA)) &&
    Array.isArray(checkVector(vectorB))
  ) {
    let vector1 = [...checkVector(vectorA)];
    let vector2 = [...checkVector(vectorB)];
    let result = [];
    result[0] = vector1[1] * vector2[2] - vector1[2] * vector2[1];
    result[1] = vector1[2] * vector2[0] - vector1[0] * vector2[2];
    result[2] = vector1[0] * vector2[1] - vector1[1] * vector2[0];
    display.innerText = `(${vector1[0]}i + ${vector1[1]}j + ${vector1[2]}k) X (${vector2[0]}i + ${vector2[1]}j + ${vector2[2]}k) \n = ${result[0]}i + ${result[1]}j + ${result[2]}k`;
  } else {
    display.innerText = 'Every component of a vector must be a number.';
  }
}

function dotProduct(vectorA, vectorB) {
  if (
    Array.isArray(checkVector(vectorA)) &&
    Array.isArray(checkVector(vectorB))
  ) {
    let vector1 = [...checkVector(vectorA)];
    let vector2 = [...checkVector(vectorB)];
    let result =
      vector1[0] * vector2[0] +
      vector1[1] * vector2[1] +
      vector1[2] * vector2[2];

    display.innerText = `(${vector1[0]}i + ${vector1[1]}j + ${vector1[2]}k) . (${vector2[0]}i + ${vector2[1]}j + ${vector2[2]}k) \n = ${result}`;
  } else {
    display.innerText = 'Every component of a vector must be a number.';
  }
}

function checkVector(vector) {
  let out = [];
  for (let el of vector) {
    if (isNaN(parseFloat(el))) {
      return 'error';
    } else {
      out.push(parseFloat(el));
    }
  }
  return out;
}

const reset = document.getElementById('reset');

reset.addEventListener('click', resetFun);

function resetFun() {
  display.innerText = '0';
  const inputA = document.querySelectorAll('#vector1');
  const inputB = document.querySelectorAll('#vector2');

  inputA.forEach(elem => {
    elem.value = '0';
  });
  inputB.forEach(elem => {
    elem.value = '0';
  });
  //   console.log(reset);
}
