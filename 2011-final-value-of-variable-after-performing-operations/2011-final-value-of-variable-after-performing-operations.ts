function finalValueAfterOperations(operations: string[]): number {
    return operations.reduce((acc, val) => {
        if (val === "++X" || val === "X++") return acc += 1;
        return acc -= 1;
    }, 0);
};