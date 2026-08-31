class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // first check if both strings are equal length, if not they cant be anagrams
        if(s.length !== t.length){
            return false
        }

        // create charCount map
        let charCount: Map<string, number> = new Map()

        // loop through first string and count the letters
        for(let i = 0; i < s.length; i++){
            let char = s[i]
            charCount.set(char, (charCount.get(char) ?? 0) + 1)
        }
        // now loop through second string and count the letters, but decrement them from the map
        for(let i = 0; i < t.length; i++){
            let char = t[i]
            charCount.set(char, (charCount.get(char) ?? 0) - 1)
        }

        // now loop through the values of map and check if counts match
        for(const counts of charCount.values()){
            // if counts dont equal 0, break, not anagrams
            if(counts !== 0){
                return false
            }
        }
        return true
    }
}
