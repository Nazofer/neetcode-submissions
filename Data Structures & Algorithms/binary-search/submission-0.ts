class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const midElemIndex = Math.floor((left+right) / 2);
            const midElem = nums[midElemIndex];

            if (midElem === target) return midElemIndex;

            if (midElem < target) {
                left = midElemIndex + 1;
                continue;
            }

            right = midElemIndex - 1;
        }

        return -1;
    }
}
