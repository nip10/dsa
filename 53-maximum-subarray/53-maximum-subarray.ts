function maximumSubarray(nums: number[]): number {
  let res = -10000;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const sum = nums.slice(i, j + 1).reduce((acc, cv) => acc + cv, 0);
      if (sum > res) res = sum;
    }
  }
  return res;

  // option 2 using dynamic programming
  // let res = -10000;
  // let sum = 0;
  // for (let i = 0; i < nums.length; i++) {
  //     sum = Math.max(nums[i], sum + nums[i]);
  //     res = Math.max(res, sum);
  // }
  // return res;
}
