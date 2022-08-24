import assert from "assert";

const toBinary = (input) => {
  return input.toString(2);
};

const binaryGap = (input) => {
  const binary = toBinary(input);
  let biggestGap = 0;
  const binaryArr = binary.split("");
  let curCount = 0;
  for (let i = 0; i < binaryArr.length; i++) {
    const element = binaryArr[i];
    if (element === "1") {
      if (curCount > biggestGap) {
        biggestGap = curCount;
      }
      curCount = 0;
    } else {
      curCount++;
    }
  }
  return biggestGap;
};

assert.deepEqual(binaryGap(1041), 5);
assert.deepEqual(binaryGap(9), 2);
assert.deepEqual(binaryGap(529), 4);
assert.deepEqual(binaryGap(20), 1);
assert.deepEqual(binaryGap(32), 0);
