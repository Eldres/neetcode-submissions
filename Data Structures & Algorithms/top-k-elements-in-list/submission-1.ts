class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // return the k most frequent elements in nums, in any order.
        // count each numbers frequent
        const counts = new Map<number, number>()
        for (const num of nums){
            counts.set(num, (counts.get(num) ?? 0) + 1)
        }

        // bucket sort: index buckets by frequent (0 to nums.length), 
        // since frequent can never exceed nums.length
        const buckets: number[][] = Array.from({length: nums.length + 1}, () => [])
        const result: number[] = []

        // TODO: implement the two steps below (two separate loops)
        // step 1: loop over counts's [value, frequent] entries, push value onto buckets[frequency]
        // step 2: loop i from buckets.length - 1 down to 0, while i >= 0 and result.length < k,
        //   decrementing i by 1 each time (this outer loop stops early once result has k values)
        //   inside step 2's loop: for each value in buckets[i], push value onto result,
        //   then if result.length === k, break out of that inner values loop
        for (const [value, frequency] of counts){
            buckets[frequency].push(value)
        }
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--){
            for (const value of buckets[i]){
                result.push(value)
                // multiple values can share a bucket (same frequency); 
                // stop mid-bucket the moment k is reach rather than draining the whole bucket
                if (result.length === k){
                    break
                }
            }
        }

        return result
    }
}
