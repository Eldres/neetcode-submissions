class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // Maps a sorted-character signature to every original string
        // that produced it
        const groups = new Map<string, string[]>()

        // TODO: for each string in strs:
        // 1. compute its signature: str.split("").sort().join("")
        // 2. if groups.has(signature), call `groups.get(signature).push(str)`
        //    otherwise, groups.set(signature, [str]) to start a new group
        // Loop condition: i < strs.length
        strs.forEach((str) => {
            // Sorting destroys character order (the part allowed to vary between
            // anagrams) while preserving which characters and how many (the part
            // that must match) -- see reasoning.md 5a.
            const signature = str.split("").sort().join("")

            if (groups.has(signature)) {
                // Append to the existing group -- must call .get() on the map, not
                // push onto strs itself (a real bug caught here: strs.push(str)
                // silently mutates the array being iterated).
                groups.get(signature).push(str)
            } else {
                groups.set(signature, [str])
            }
        })

        return [...groups.values()]
    }
}
