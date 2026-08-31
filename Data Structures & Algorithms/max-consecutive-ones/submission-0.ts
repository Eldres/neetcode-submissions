class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let result = 0
        let counter = 0
        // loop through nums array
        for(const num of nums){
            // if current element is 0, update result to be max of (result, counter)
            // then reset counter to 0
            if(num === 0){
                result = Math.max(result, counter)
                counter = 0
            } else {
                // otherwise incr counter
                counter++
            }
        }
        // return max of result, and counter
        return Math.max(result, counter)
    }
}
