function maxArea(height: number[]): number {
    let res = 0;
    let i = 0; // left
    let j = height.length - 1; // right
    while (i < j) {
        res = Math.max(res, Math.min(height[i], height[j]) * (j - i))
        if (height[i] <= height[j]) {
            i++; // move left
        } else {
            j--; // move right
        }
    }
    return res
};