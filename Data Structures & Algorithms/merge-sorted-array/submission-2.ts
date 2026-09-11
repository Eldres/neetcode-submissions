class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        // copy each element of nums2 into the empty slots at the end of nums1 (indices m..m+n-1)
        for (let i = 0; i < n; i++) {
            nums1[i + m] = nums2[i];
        }
        // re-sort the combined array in place — O((m+n)log(m+n)), ignores that both halves were already sorted
        nums1.sort((a, b) => a - b);
    }
}
