const removeDuplicates: Function = (arr: number[]) => {
  const res: number[] = [];
  for (let idx = 0; idx < arr.length; idx++) {
    let flag: boolean = false;
    for (let idx2 = idx + 1; idx2 < arr.length; idx2++) {
      if (arr[idx] == arr[idx2]) {
        flag = true;
        break;
      }
    }
    if (!flag) res.push(arr[idx]);
  }
  return res;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
