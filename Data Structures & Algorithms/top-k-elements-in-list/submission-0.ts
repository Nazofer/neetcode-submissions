class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencyMap = new Map<number, number>();

        for (const num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1);
        }

        // index represents frequency and value is stored at that index
        const frequencyBuckets = Array.from({ length: nums.length + 1 }, () => []);

        for (const frequencyMapEntry of frequencyMap.entries()) {
            const [num, frequency] = frequencyMapEntry;
            frequencyBuckets[frequency].push(num);
        }

        return frequencyBuckets.reverse().flatMap((el) => el).slice(0, k)
    }
}
