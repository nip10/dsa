function singleNumber(nums: number[]): number {
    const m = new Map();
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], m.get(nums[i]) + 1 || 1);
    }
    for (let i = 0; i < nums.length; i++) {
        if (m.get(nums[i]) === 1) {
            return nums[i];
        }
    }
};