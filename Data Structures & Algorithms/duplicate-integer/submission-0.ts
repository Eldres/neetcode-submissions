class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // new set to store already seen numbers
        let hasSeen = new Set<number>()

        for (let i = 0; i < nums.length; i++){
            // if the set has a duplicate, return true
            if (hasSeen.has(nums[i])){
                return true
            } else {
                // otherwise, add number to set
                hasSeen.add(nums[i])
            }
        }

        return false // base case
    }
}
