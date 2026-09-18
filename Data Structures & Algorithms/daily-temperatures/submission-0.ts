class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const n: number = temperatures.length;
        let stack: number[] = new Array(n).fill(0); // swarmer day from k (0 = none)

        // start from the back of the array
        for (let i = n - 2; i >= 0; i--) {
            let j = i + 1;
            while (j < n && temperatures[j] <= temperatures[i]) {
                if (stack[j] === 0) {
                    // j has no warmer day ahead, and temperatures[j] <= temperatures[i], so i has none either
                    j = n;
                    break;
                }
                j += stack[j]; // skip past the run of days <= temperatures[j] (all also <= temperatures[i])
            }

            if (j < n) {
                stack[i] = j - i; // found the first day strictly warmer than i
            }
        }

        return stack;
    }
}
