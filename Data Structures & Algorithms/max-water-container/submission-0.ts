class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        // init max area
        let result: number = 0;
        // init left pointer
        let left = 0;
        // init right pointer -- end of array
        let right = heights.length - 1;

        // loop while left is smaller than right
        while (left < right) {
            // init width
            let width = right - left;
            // update max area result as the max of current result and the min of height
            // at left pointer and height at right pointer * width
            result = Math.max(result, Math.min(heights[left], heights[right]) * width);

            // check if height at left pointer is smaller or equal to height at right
            // if smaller: incr left
            // otherwise decr right
            if (heights[left] <= heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return result;
    }
}
