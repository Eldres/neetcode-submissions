class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // Sort the array to enable two-pointer approach and skip duplicates
        nums.sort((a, b) => a - b);
        const result = [];
        const n = nums.length;

        // Iterate through each element as the first element of the triplet
        for (let i = 0; i < n - 2; i++) {
            // Skip duplicate values for the first element
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            // Early termination: if smallest possible sum is positive, no valid triplet
            if (nums[i] > 0) break;
            // Initialize two pointers
            let left = i + 1;
            let right = n - 1;
            // Use two pointers to find pairs that sum to -nums[i]
            while (left < right) {
                const currentSum = nums[i] + nums[left] + nums[right];
                if (currentSum < 0) {
                    // Sum too small, move left pointer right to increase sum
                    left++;
                } else if (currentSum > 0) {
                    // Sum too large, move right pointer left to decrease sum
                    right--;
                } else {
                    // Found a valid triplet
                    result.push([nums[i], nums[left], nums[right]]);
                    // Skip duplicate values for the second element
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Skip duplicate values for the third element
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    // Move both pointers inward
                    left++;
                    right--;
                }
            }
        }

        return result;
    }
}
