import assert from "assert";

const main = (arr) => {
  const m = new Map();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    m.set(element, m.get(element) + 1 || 1);
  }
  for (let [key, value] of m) {
    if (value % 2 !== 0) {
      return key;
    }
  }
};

assert.deepEqual(main([9, 3, 9, 3, 9, 7, 9]), 7);
