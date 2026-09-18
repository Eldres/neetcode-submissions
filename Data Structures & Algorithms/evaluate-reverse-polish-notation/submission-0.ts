class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack: string[] = [];

        for (const token of tokens) {
            if (token === "+") {
                const a = stack.pop();
                const b = stack.pop();
                const math = Number.parseInt(a) + Number.parseInt(b);
                stack.push(math.toString());
            } else if (token === "-") {
                const a = stack.pop();
                const b = stack.pop();
                const math = Number.parseInt(b) - Number.parseInt(a);
                stack.push(math.toString());
            } else if (token === "*") {
                const a = stack.pop();
                const b = stack.pop();
                const math = Number.parseInt(a) * Number.parseInt(b);
                stack.push(math.toString());
            } else if (token === "/") {
                const a = stack.pop()
                const b = stack.pop()
                const math = Math.trunc(Number.parseInt(b) / Number.parseInt(a))
                stack.push(math.toString())
            } else {
                stack.push(token)
            }
        }

        return Number.parseInt(stack.pop());
    }
}
