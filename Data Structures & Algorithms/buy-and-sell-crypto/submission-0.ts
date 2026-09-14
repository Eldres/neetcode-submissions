class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // init a minPrice set to first ele in prices
        let minPrice: number = prices[0]
        // init maxProfit set to 0
        let maxProfit: number = 0

        // loop over prices, starting at next day (1st index)
        for(let i = 1; i < prices.length; i++){
            // check if current price is less than minPrice
            if(prices[i] < minPrice){
                minPrice = prices[i]
            } else {
                // otherwise calc current profit 
                // (take current price - minPrice)
                let profit = prices[i] - minPrice

                // check if profit is larger than maxProfit
                if(profit > maxProfit){
                    maxProfit = profit
                }
            }
        }

        return maxProfit
    }
}
