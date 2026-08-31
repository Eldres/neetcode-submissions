class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let ans = []
        nums.forEach((num) => {
            ans.push(num)
        })

        return nums.concat(ans)
    }
}
