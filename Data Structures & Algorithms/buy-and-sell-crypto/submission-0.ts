class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let bestProfit = 0;
        let minPrice = Number.POSITIVE_INFINITY;

        for (const price of prices) {            
            if (price < minPrice) {
                minPrice = price;
            }

            const currentProfit = price - minPrice;

            if (currentProfit > bestProfit) {
                bestProfit = currentProfit;
            }
        }

        return bestProfit;
    }
}
