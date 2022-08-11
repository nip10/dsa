function balancedStringSplit(s: string): number {
    const str = s.split("");
    let ans = 0;
    let hm = new Map();
    for (let i = 0; i < str.length; i++) {
        hm.set(str[i], hm.get(str[i]) + 1 || 1);
        if (hm.get('L') === hm.get('R')) {
            ans++;
            hm.set('L', 0);
            hm.set('R', 0);
        }
    }
    return ans;
};