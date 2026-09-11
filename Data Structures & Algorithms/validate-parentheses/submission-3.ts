class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // init empty stack
        let stack = []
        // init map of close to open paren pairs
        let closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
        // loop over parens of string
        for (let paren of s){
            // if the paren exists in the hash
            if(closeToOpen[paren]){
                // if the stack is not empty AND the end of the stack matches the paren pairing -- pop from the stack
                if(stack.length > 0 && stack[stack.length - 1] === closeToOpen[paren]){
                    stack.pop()
                }else{
                    return false
                }
            } else {
                // otherwise push the paren onto the stack
                stack.push(paren)
            }
        }
        return stack.length === 0
    }
}
