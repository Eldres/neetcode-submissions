class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        // Kadane Algo
        // init best sum so far, set to -Inf
        let bestSum: number = -Infinity;
        // init sum
        let sum: number = 0;
        for (const num of nums) {
            // update the max of current sum with current num
            sum = Math.max(num, sum + num);
            // update best sum of current sum and best sum
            bestSum = Math.max(bestSum, sum);
        }

        return bestSum;
    }
}
