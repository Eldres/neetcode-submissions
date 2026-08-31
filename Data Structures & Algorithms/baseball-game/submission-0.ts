class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let score = 0
        let stack = []
        for(const op of operations){
            if(op === '+'){
                const top = stack.pop()
                const newTop = top + stack[stack.length - 1]
                stack.push(top)
                stack.push(newTop)
                score += newTop
            } else if (op === 'D'){
                stack.push(2 * stack[stack.length - 1])
                score += stack[stack.length - 1]
            } else if (op === 'C'){
                score -= stack.pop()
            } else {
                stack.push(parseInt(op))
                score += stack[stack.length - 1]
            }
        }

        return score
    }
}
