class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // edge case -- string lengths dont match
        if (s.length !== t.length) {
            return false;
        }

        // create freqMap for letters
        let anagram: Map<string, number> = new Map();

        // loop over letters in string S
        for (let letter of s) {
            // incr letter count for each letter of S
            anagram.set(letter, (anagram.get(letter) ?? 0) + 1);
        }
        // loop over letters in string T
        for (let letter of t) {
            // decr letter count for each letter of T
            anagram.set(letter, (anagram.get(letter) ?? 0) - 1);
        }
        
        // loop through values of freqMap to compare matches
        for(let count of anagram.values()){
            // if counts dont cancel out, break, not anagram
            if(count !== 0){
                return false
            }
        }

        return true // base case
    }
}
