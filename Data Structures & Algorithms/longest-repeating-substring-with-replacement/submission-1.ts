class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        // variable-size sliding window
        // create freqMap
        let freqMap: Map<string, number> = new Map()
        // init left pointer
        let left: number = 0
        // init max freq
        let maxFreq: number = 0
        // init result -- length of longest substring
        let result: number = 0

        // loop over string
        for(let right = 0; right < s.length; right++){
            // update the freqMap
            freqMap.set(s[right], (freqMap.get(s[right]) || 0) + 1)
            // update the max freq
            maxFreq = Math.max(maxFreq, freqMap.get(s[right]))

            // while window size (r - left + 1) - maxFreq is > than k
            while(right - left + 1 - maxFreq > k){
                // shrink window from the left and adjust freqMap
                freqMap.set(s[left], freqMap.get(s[left]) - 1)
                left++
            }
            // update the result with max of result and window size
            result = Math.max(result, right - left + 1)
        }

        return result
    }
}
