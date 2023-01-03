function minDeletionSize(strs: string[]): number {
    const numCols = strs[0].length;
    const numRows = strs.length;
    let count = 0;

    for (let i = 0; i< numCols; i++) {
        for(let j = 1; j < numRows; j++) {
            if (strs[j-1].charCodeAt(i) > strs[j].charCodeAt(i)) {
                count++
                break;
            }
        }
    }
    return count;
};