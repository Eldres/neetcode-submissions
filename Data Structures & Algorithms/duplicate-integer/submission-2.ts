class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let hasSeen: Set<number> = new Set()

        for(let i = 0; i < nums.length; i++){
            if(hasSeen.has(nums[i])){
                return true
            } else {
                hasSeen.add(nums[i])
            }
        }
        return false
    }
}
