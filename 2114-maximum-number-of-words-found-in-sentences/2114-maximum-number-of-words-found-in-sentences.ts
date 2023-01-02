function mostWordsFound(sentences: string[]): number {
    return sentences.reduce((acc, cur) => Math.max(acc, cur.split(" ").length), 0);
};