class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        // dedupe into a set so each number can be looked up in O(1)
        let numSet = new Set(nums);
        let longest: number = 0;

        for (const num of numSet) {
            // only start counting from the beginning of a run — skip if a smaller consecutive number exists
            if (!numSet.has(num - 1)) {
                let length = 1;
                // extend the run for as long as the next consecutive number is in the set
                while (numSet.has(num + length)) {
                    length++;
                }
                // update the longest run found so far
                longest = Math.max(length, longest);
            }
        }
        return longest;
    }
}
