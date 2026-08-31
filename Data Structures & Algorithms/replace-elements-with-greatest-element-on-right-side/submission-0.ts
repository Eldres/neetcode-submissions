class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        // traverse array in reverse
        // initial max = -1
        // new max => max(oldMax, arr[i])
        let rightMax = -1
        for(let i = arr.length - 1; i >= 0; i--){
            let newMax = Math.max(rightMax, arr[i])
            // for each index, store the current rightMax into the position
            arr[i] = rightMax
            // update rightMax to be the new maximum
            rightMax = newMax
        }
        return arr
    }
}
