class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        // create seen map
        let seen: Map<number, number> = new Map();

        // iterate over nums[]
        for (let i = 0; i < numbers.length; i++) {
            // store complement (target - current num)
            let complement: number = target - numbers[i];

            // if seen map has complement, return array of complement index + 1 and index + 1
            if (seen.has(complement)) {
                return [seen.get(complement) + 1, i + 1];
            } else {
                // otherwise set the value in the map
                seen.set(numbers[i], i);
            }
        }
    }
}
