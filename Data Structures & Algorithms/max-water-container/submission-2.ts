class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxHeight = Number.NEGATIVE_INFINITY;

        let start = 0;
        let end = heights.length;

        while (start < end) {
            const startHeight = heights[start];
            const endHeight = heights[end];

            const localHeight = (end - start) * Math.min(startHeight, endHeight);

            if (localHeight > maxHeight) {
                maxHeight = localHeight;
            }

            if (startHeight < endHeight) {
                start++;
            } else {
                end--;
            }
        }

        return maxHeight;
    }
}
