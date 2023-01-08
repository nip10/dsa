function maximumWealth(accounts: number[][]): number {
    return accounts.reduce((totalWealth, account) => {
        const userBalance = account.reduce((totalBalance, balance) => totalBalance + balance, 0);
        if (userBalance > totalWealth) {
             totalWealth = userBalance
        }
        return totalWealth;
    }, 0);
};