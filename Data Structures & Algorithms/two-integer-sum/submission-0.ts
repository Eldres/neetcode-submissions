class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    /**
     * Inputs: an array of integers (nums) and one target integer (target)
     * What you're returning: not the "values" that add up to target, but
     * the indices of those two values.
     * The condition: nums[i] + nums[j] == target, pick two positions whose values sum to the target
     * The constraint: i != j
     */
    twoSum(nums: number[], target: number): number[] {
        // Create a map to store the value of already seen indices
        const seen = new Map<number, number>()

        // TODO: for each index, i, in this exact order:
        // 1. check first: is (target - nums[i]) already a key in `seen`?
        // if so, return [seen.get(target - nums[i]), i], breaking early
        // 2. store second: only if not found, seen.set(nums[i], i)
        // Order matters - checking before storing guarantees `seen` only ever
        // holds strictly earlier indices at the moment of the lookup, so a match
        // can never be an element matching against itself.
        // Loop condition: i < nums.length
        for (let i = 0; i < nums.length; i ++){
            let complement = target - nums[i]
            // check first
            if (seen.has(complement)){
                return [seen.get(complement), i]
            } else {
                // store second
                seen.set(nums[i], i)
            }
        }

        return [] // base case        
    }
}
