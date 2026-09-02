class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // init output array with all 1s
        let output = new Array(nums.length).fill(1);

        // first pass (L->R): output[i] becomes the product of everything to its LEFT
        // output[i-1] already holds the product of nums[0..i-2], so multiply it by
        // nums[i-1] (the element just added to the left side) to extend it to nums[0..i-1]
        for (let i = 1; i < nums.length; i++) {
            output[i] = output[i - 1] * nums[i - 1];
        }

        // second pass (R->L): fold in the product of everything to the RIGHT
        // postfix tracks the running product of nums[i+1..end] as we walk backward
        let postfix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            // combine the left-product already stored with the right-product so far
            output[i] *= postfix;
            // extend postfix to include nums[i] before moving to i-1
            postfix *= nums[i];
        }

        return output;
    }
}
