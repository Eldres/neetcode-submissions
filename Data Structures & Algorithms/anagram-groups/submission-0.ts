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
        strs.forEach(str => {
            let signature = str.split("").sort().join("")
            if (groups.has(signature)){
                groups.get(signature).push(str)
            } else {
                groups.set(signature, [str])
            }
        })

        return [...groups.values()]
    }
}
