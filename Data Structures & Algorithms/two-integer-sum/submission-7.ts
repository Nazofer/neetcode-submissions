class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const sortedIndexes = nums.map((_, i) => i).sort((a, b) => nums[a] - nums[b]);

        let startPointer = 0;
        let endPointer = sortedIndexes.length - 1;

        while (startPointer < endPointer) {
            const startIndex = sortedIndexes[startPointer]
            const endIndex = sortedIndexes[endPointer];

            const startNumber = nums[startIndex];
            const endNumber = nums[endIndex];

            console.log({
                startIndex,
                endIndex,
                startNumber,
                endNumber
            })

            if (startNumber + endNumber < target) {
                startPointer++;
                continue;
            } else if (startNumber + endNumber > target) {
                endPointer--;
                continue;
            }

            return [startIndex, endIndex];
        }

        return [];
    }
}
