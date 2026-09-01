class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        // circle sandwich === 0, square sandwich === 1
        // -- using frequency count --
        // count number of students preferring each sandwich type
        // process sandwiches in order
        // 1. if at least one student wants the current sandwich, 
        //    decr counter and total remaining
        // 2. if no student wants, stop immediately since those behind cant be served
        // return the remaining count
        let queue = students.length
        const count = new Int32Array(2) // create array of size 2

        // loop over students
        for(let student of students){
            count[student]++
        }

        // loop over sandwiches
        for(let sandwich of sandwiches){
            if(count[sandwich] > 0){
                count[sandwich]--
                queue--
            } else {
                break
            }
        }

        return queue
    }
}
