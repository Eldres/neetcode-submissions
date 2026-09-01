class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // encode a list of strings into a single string, prefixing each with its length and a '#'
        // marker so decode can parse it back without ambiguity, even if a string contains '#' itself

        // TODO: return a map of each string s in strs to the template `${s.length}#${s}`
        // join all the mapped entries together with '' (empty string) as the separator
        return strs.map((s) => `${s.length}#${s}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        // decode a string produced by encode back into the original list of strings
        let result: string[] = [];
        let i = 0;

        while (i < str.length) {
            // Searching for '#' starting at i (not from 0) is safe: i always points at the start of a
            // length prefix, so the first '#' found from there is guaranteed to be this entry's marker,
            // never one buried inside a previous entry's content.
            const hashIndex = str.indexOf("#", i);
            const length = Number(str.slice(i, hashIndex));
            const start = hashIndex + 1;

            // Consuming a fixed character count, not searching for a closing delimiter, is what makes
            // this safe even if the string content itself contains digits or '#'.
            result.push(str.slice(start, start + length));
            i = start + length;
        }

        return result;
    }
}
