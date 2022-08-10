/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
*/

var twoSum = function(nums, target) {
    const hashtable = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
       
        if (hashtable.hasOwnProperty(complement)){
          return [hashtable[complement], i]
        }
 
        hashtable[nums[i]] = i;   
     };
};

     