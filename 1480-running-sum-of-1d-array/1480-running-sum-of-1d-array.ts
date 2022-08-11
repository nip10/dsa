function runningSum(nums: number[]): number[] {
    let sum = 0;
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        ans.push(sum);
    }
    return ans;
};