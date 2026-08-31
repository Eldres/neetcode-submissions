class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // create seen map to store already seen indices
        let seen: Map<number, number> = new Map()

        // loop over nums array
        for(let i = 0; i < nums.length; i++){
            // store the complement (target - nums[i])
            let complement = target - nums[i]
            // now check the seen map
            if (seen.has(complement)){
                // return array of the complement and its index
                return [seen.get(complement), i]
            } else {
                // otherwise add to seen map
                seen.set(nums[i], i)
            }
        }
    }
}
