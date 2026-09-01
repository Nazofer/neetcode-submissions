class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: 9 }).map(() => new Set<string>());
        const cols = Array.from({ length: 9 }).map(() => new Set<string>());
        const boxes = Array.from({ length: 9 }).map(() => new Set<string>());

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const currentElement = board[i][j];
                if (currentElement === ".") continue;

                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (
                    rows[i].has(currentElement) ||
                    cols[j].has(currentElement) ||
                    boxes[boxIndex].has(currentElement)
                ) {
                    return false;
                }

                rows[i].add(currentElement);
                cols[j].add(currentElement);
                boxes[boxIndex].add(currentElement);
            }
        }

        return true;
    }
}
