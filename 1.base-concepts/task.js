"use strict";
function solveEquation(a, b, c) {
  let arr;
  let d;
  let x1;
  let x2;

  d = Math.pow(b,2) - 4 * a * c;
  if (d === 0) {
    x1 = -b / (2*a);
    arr = [x1];
  } else if (d > 0) {
    x2 = (-b - Math.sqrt(d)) / (2*a);
    x1 = (-b + Math.sqrt(d)) / (2*a);
    arr = [x1,x2];
  }else
    arr = [];
   
   return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
