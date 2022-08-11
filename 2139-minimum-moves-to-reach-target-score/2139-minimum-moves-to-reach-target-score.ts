function minMoves(target: number, maxDoubles: number): number {
    if (target === 1) return 0;
    let ans = 0;
    while (maxDoubles !== 0) {
        const a = target / 2;
        // Can't be negative or we wouldn't be able to use a double
        if (a > 0) {
            // if is decimal, we need one extra increment (and remember the double)
            if (a % 1 !== 0) {
                ans += 2;
                target = Math.floor(a);
            } else {
                ans++;
                target = a;
            }
            if (target === 1) break;
        }
        maxDoubles--;
    }
    if (target !== 1) {
        ans += target - 1;
    }
    return ans;
};



