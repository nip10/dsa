function firstUniqChar(s: string): number {
    const hashmap = new Map();
    const chars = s.split("");
    for (let i = 0; i < chars.length; i++) {
        hashmap.set(chars[i], hashmap.get(chars[i]) + 1 || 1);
    }
    for (let j = 0; j < chars.length; j++) {
        if (hashmap.get(chars[j]) === 1) {
            return j;
        }
    }
    return -1;
};