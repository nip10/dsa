function detectCapitalUse(word: string): boolean {
    return word === word.toLowerCase() || word === word.toUpperCase() || (word[0].toUpperCase() === word[0] && word.slice(1, word.length).toLowerCase() === word.slice(1, word.length))
};