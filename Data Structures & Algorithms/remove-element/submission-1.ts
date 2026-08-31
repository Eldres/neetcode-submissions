class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        // using two pointer algo
        let writePointer = 0
        // iterate through nums
        for(let i = 0; i < nums.length; i++){
            // if nums[i] !== val
            // copy it to nums[writePointer]
            // incr writePointer
            if(nums[i] !== val){
                nums[writePointer++] = nums[i]
            }
        }
        return writePointer // return count of valid elements
    }
}
