// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

const change = function (amount, coins) {
    if (amount <= 0) return 0;
    let sum = 0;
    coins.forEach((coin, i) => {
        if (coin === amount) {
            sum++;
        }
        sum += change(amount - coin, coins.slice(0, i + 1))
    })
    return sum;
};