import assert from "assert";

const rotate = (arr, k) => {
  let newK = k;
  if (arr.length > k) {
    newK = k % arr.length;
  }
  for (let i = 0; i < newK; i++) {
    let temp = arr[i];
    arr.shift();
    arr.push(temp);
  }
  return arr;
};

assert.deepEqual(rotate([1, 2, 3, 4, 5], 1), [2, 3, 4, 5, 1]);
