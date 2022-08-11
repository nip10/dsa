function buildArray(nums: number[]): number[] {    
    return nums.map((_, i) => nums[nums[i]]);
};