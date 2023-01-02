function shuffle(nums: number[], n: number): number[] {
    const result = Array(n * 2);
    for (let i = 0; i < n; i++) {
        result[2 * i] = nums[i];
        result[2 * i + 1] = nums[n + i];
    }
    return result;
};