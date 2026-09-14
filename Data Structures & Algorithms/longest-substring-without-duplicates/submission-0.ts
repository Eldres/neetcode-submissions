class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let seen: Map<string, number> = new Map(); // char -> last seen index
        let left: number = 0; // start of current window
        let result: number = 0; // max window length so far

        for (let right = 0; right < s.length; right++) {
            if (seen.has(s[right])) {
                // duplicate found — jump left past its prior occurrence (never backward)
                left = Math.max(seen.get(s[right]) + 1, left);
            }
            seen.set(s[right], right); // record/update this char's latest index
            result = Math.max(result, right - left + 1); // track widest valid window
        }
        return result;
    }
}
