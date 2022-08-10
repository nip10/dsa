function firstUniqChar(s: string): number {
    const hashmap = new Map();
    const chars = s.split("");
    for (let i = 0; i < chars.length; i++) {
        if (hashmap.has(chars[i])) {
            hashmap.set(chars[i], hashmap.get(chars[i]) + 1);
        } else {
            hashmap.set(chars[i], 1);
        }
    }
    for (let j = 0; j < chars.length; j++) {
        if (hashmap.get(chars[j]) === 1) {
            return j;
        }
    }
    return -1;
};