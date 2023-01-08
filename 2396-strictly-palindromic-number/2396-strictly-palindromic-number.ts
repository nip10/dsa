// Sol 1
function isStrictlyPalindromic(n: number): boolean {
    for (let i = 2; i <= n - 2; i++) {
        const numInBase = n.toString(i);
        const reverseNumInBase = numInBase.split("").reverse().join("");
        if (numInBase !== reverseNumInBase) {
            return false;
        }
     }
    return true;
};

// Sol 2
/*
function isStrictlyPalindromic(n: number): boolean {
    let res = true;
    for (let i = 2; i <= n - 2; i++) {
        const numInBase = n.toString(i);
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
*/