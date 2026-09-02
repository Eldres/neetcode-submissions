class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // one Set per row/col/3x3-box, keyed by row index, col index, and box key respectively
        const rows = new Map();
        const cols = new Map();
        const squares = new Map();

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === ".") continue;
                // Math.floor(row/3) and Math.floor(col/3) each range 0-2, so this
                // uniquely identifies which of the 9 boxes (row,col) falls into
                const squareKey = `${Math.floor(row / 3)},${Math.floor(col / 3)}`;
                // guard: has this digit already been placed in this row/col/box?
                // short-circuit (&&) so .has() is only called on a Set that exists
                const rowsCheck = rows.get(row) && rows.get(row).has(board[row][col]);
                const colsCheck = cols.get(col) && cols.get(col).has(board[row][col]);
                const squareCheck =
                    squares.get(squareKey) && squares.get(squareKey).has(board[row][col]);

                // duplicate found in any of the three groups -> invalid board
                if (rowsCheck || colsCheck || squareCheck) {
                    return false;
                }
                // lazily create the Set for this row/col/box the first time we see it
                if (!rows.has(row)) {
                    rows.set(row, new Set());
                }
                if (!cols.has(col)) {
                    cols.set(col, new Set());
                }
                if (!squares.has(squareKey)) {
                    squares.set(squareKey, new Set());
                }
                // record this digit as seen in its row, column, and box
                rows.get(row).add(board[row][col]);
                cols.get(col).add(board[row][col]);
                squares.get(squareKey).add(board[row][col]);
            }
        }
        // no duplicates found in any row, column, or box
        return true;
    }
}
