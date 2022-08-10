function generate(numRows: number): number[][] {
    const res = [[1]];
    if (numRows == 1) return res;
    for (let i = 1; i < numRows; i++) {
        let newRow = new Array(i + 1).fill(1);
        const prevRow = res[i - 1];
        for (let j = 1; j < newRow.length - 1; j++) {
            const sum = prevRow[j - 1] + prevRow[j];
            newRow[j] = sum;
        }
        res.push(newRow);
    }
    return res;
};