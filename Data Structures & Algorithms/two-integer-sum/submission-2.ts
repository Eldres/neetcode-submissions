class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // create seen map
        let seen: Map<number, number> = new Map()

        // loop over nums array
        for(let i = 0; i < nums.length; i++){
            // init complement: target - nums[i]
            let complement: number = target - nums[i]
            // check the seen map for the complement
            if(seen.has(complement)){
                // if it does return array of complement and index
                return [seen.get(complement), i]
            } else {
                // otherwise add current number and index to map
                seen.set(nums[i], i)
            }
        }
    }
}
