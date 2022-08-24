function majorityElement(nums: number[]): number {
    const m = new Map();
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], m.get(nums[i]) + 1 || 1);
        if (m.get(nums[i]) > Math.floor(nums.length / 2)) {
            return nums[i];
        }
    }
};