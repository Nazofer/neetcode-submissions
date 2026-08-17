class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        return nums.some((num, i, arr) => i !== arr.lastIndexOf(num))
    }
}
