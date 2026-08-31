class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack = []
        let closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
        for (let paren of s){
            if(closeToOpen[paren]){
                if(stack.length > 0 && stack[stack.length - 1] === closeToOpen[paren]){
                    stack.pop()
                }else{
                    return false
                }
            } else {
                stack.push(paren)
            }
        }
        return stack.length === 0
    }
}
