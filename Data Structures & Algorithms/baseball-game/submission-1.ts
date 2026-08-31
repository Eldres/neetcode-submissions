class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let score = 0;
        let stack = [];
        for (const op of operations) {
            if (op === "+") {
                // pop the most recent score off the stack
                const top = stack.pop();
                // sum it with the new top (the score before that)
                const newTop = top + stack[stack.length - 1];
                // push both back so the stack still reflects full history
                stack.push(top);
                stack.push(newTop);
                // add the new score to the running tot
                score += newTop;
            } else if (op === "D") {
                // double the most recent score and pus
                stack.push(2 * stack[stack.length - 1]);
                // add the doubled score to the running
                score += stack[stack.length - 1];
            } else if (op === "C") {
                // pop the most recent score and remove it from the total
                score -= stack.pop();
            } else {
                // parse and push a plain integer score
                stack.push(parseInt(op));
                // add it to the running total
                score += stack[stack.length - 1];
            }
        }

        return score;
    }
}
