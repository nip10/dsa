/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/*
var reverseString = function(s) {
    const sl = s.length;
    for (let i = 0; i < Math.floor(sl / 2); i++) {
        let t = s[sl - 1 - i];
        s[sl - 1 - i] = s[i];
        s[i] = t;
    }
};
*/
var reverseString = function(s) {
    s.reverse();
};
