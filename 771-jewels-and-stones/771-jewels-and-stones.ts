function numJewelsInStones(jewels: string, stones: string): number {
    const j = jewels.split("");
    const s = stones.split("");
    return s.reduce((acc, cv) => {
        if (j.includes(cv)) acc++;
        return acc;
    }, 0);
};