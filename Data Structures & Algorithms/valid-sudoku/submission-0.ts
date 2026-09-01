class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: 9 }).map(() => new Set<number>());
        const cols = Array.from({ length: 9 }).map(() => new Set<number>());
        const boxes = Array.from({ length: 9 }).map(() => new Set<number>());

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                const currentElement = board[i][j];
                const formattedCurrentElement = Number.parseInt(currentElement);

                if (Number.isNaN(formattedCurrentElement)) continue;

                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (
                    rows[i].has(formattedCurrentElement) ||
                    cols[j].has(formattedCurrentElement) ||
                    boxes[boxIndex].has(formattedCurrentElement)
                ) {
                    return false;
                }

                rows[i].add(formattedCurrentElement);
                cols[j].add(formattedCurrentElement);
                boxes[boxIndex].add(formattedCurrentElement);
            }
        }

        return true;
    }
}
