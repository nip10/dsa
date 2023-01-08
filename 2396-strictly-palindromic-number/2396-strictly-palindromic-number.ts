function isStrictlyPalindromic(n: number): boolean {
    let res = true;
    for (let i = 2; i <= n - 2; i++) {
        const numInBase = n.toString(i);
        console.log("numinbase", numInBase);
        // check palindrome
        let isPal = true;
        for (let j = 0; j < Math.floor(numInBase.length / 2); j++) {
            if (numInBase[j] !== numInBase[numInBase.length - j]) {
                isPal = false;
                break;
            }
        }
        if (!isPal) {
            res = false;
            break;
        }
    }
    return res;
};