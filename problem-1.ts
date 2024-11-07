const sumArray = (arr: number[]): number => {
  let sum: number = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    sum += arr[idx];
  }
  return sum;
};

console.log(sumArray([1, 2, 3, 4, 5]));
