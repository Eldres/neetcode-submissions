class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // different lengths can never be anagrams, 
        // so we bail out before doing any map work
        if (s.length !== t.length){
            return false
        }

        // create char counter map
        let charCount = new Map<string, number>()

        // TODO: populate charCount by incrementing for each character in S,
        // then decrement for each character in T.
        // Use `charCount.set(char, (charCount.get(char) ?? 0) + 1) to increment
        // and the mirrored form with `- 1` to decrement
        // Loop condition: i < s.length
        
        // Loop through string S
        for (let i = 0; i < s.length; i++){
            let char = s[i]
            charCount.set(char, (charCount.get(char) ?? 0) + 1)
        }
        // Loop through string T
        for (let i = 0; i < t.length; i++){
            let char = t[i]
            charCount.set(char, (charCount.get(char) ?? 0) - 1)
        }

        // After both passes, S and T are anagrams only if;
        // - every count in charCount is exactly 0, any nonzero count means 
        // some character appeared a different number of times in S vs T
        for (const count of charCount.values()){
            if (count !== 0){
                return false
            }
        }

        return true // base case
    }
}
