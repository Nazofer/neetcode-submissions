class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const num2 = target - num;
            const j = seen.get(num2);

            if (j !== undefined) return [i, j];
            seen.set(num, i);
        }
    }
}
