/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// The inner/2nd loop doesn't have to run across the entire array, because we would be repeating combinations. Note that a + b = b + a.
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};