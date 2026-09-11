class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // init map of original strings
        const groups: Map<string, string[]> = new Map();

        // loop over each string of strings[]
        for (let str of strs) {
            // build a 26-length count array for each lowercase letter
            let count = new Array(26).fill(0);

            // loop over each char of str
            for (let char of str) {
                count[char.charCodeAt(0) - 97]++; // 'a' = 97, so index 0..25
            }
            let key = count.join(","); // e.g. "1,0,1,0,...,0" — same for all anagrams
            // check if we have anagram family in groups
            if (!groups.has(key)) {
                groups.set(key, []); // first time seeing this anagram family
            }
            groups.get(key)!.push(str); // non-null assertion: key was just set above
        }
        return Array.from(groups.values()); // order of groups doesn't matter per problem
    }
}
