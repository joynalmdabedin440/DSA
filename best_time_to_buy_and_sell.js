const bestTimeBuyandSell = function (prices) {
    let cheap = prices[0];
    let maxProfit = 0;
    

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < cheap) {
            cheap = prices[i];
        }

        else {
            currentProfit = prices[i] - cheap;
            maxProfit= Math.max(maxProfit,currentProfit)
        }
    }

    return maxProfit; // index of best sell day
}

console.log(bestTimeBuyandSell([1,2])); // Output: 4
