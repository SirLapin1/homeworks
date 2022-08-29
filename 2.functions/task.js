// Задание 1
getArrayParams([-99, 99, 10])
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
  min = Infinity;
  max = -Infinity;
for (let i = 0; i <= (arr.length - 1); i++) {
  sum += arr[i];
if(min > arr[i]){
  min = arr[i];
}
if (max < arr[i]) {
  max = arr[i];
}

}
  avg = sum / arr.length;
  avg = avg.toFixed(2);
  avg = Number(avg);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  for (let j = 0; j <= (arr.length - 1); j++) {
  sum += arr[j];
}
  return sum;
}

function makeWork(arrOfArr, func) {
  let max, secondElement;
  max = func(arrOfArr[i]);
  for (let i = 0; i <= (arrOfArr.length - 1); i++) {    
    secondElement = func(arrOfArr[i+1]);
    if (max < secondElement) {
      max = secondElement;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, dif;
  dif = 0;
  min = Infinity;
  max = -Infinity;
for (let i = 0; i <= (arr.length - 1); i++) {
if(min > arr[i]){
  min = arr[i];
}
if (max < arr[i]) {
  max = arr[i];
}
}
dif = Math.abs(max - min);
return dif;
}
