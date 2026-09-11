class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // init Map to track if numbers appear more than once
        let seen: Map<number, number> = new Map()

        // iterate over nums array
        for(let num of nums){
            if(seen.has(num)){
                return true
            } else {
                seen.set(num, (seen.get(num) ?? 0) + 1)
            }
        }

        return false
    }
}
