class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sortedNums = [...nums].sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < sortedNums.length; i++) {
            if (sortedNums[i] === sortedNums[i - 1] && i > 0) {
                continue;
            }
            const num1 = sortedNums[i];

            let num2Index = i + 1;
            let num3Index = sortedNums.length - 1;

            while (num2Index < num3Index) {
                const num2 = sortedNums[num2Index];
                const num3 = sortedNums[num3Index];

                if (num1 + num2 + num3 === 0) {
                    res.push([num1, num2, num3]);
                    num2Index++;
                    num3Index--;
                    while (
                        num2Index < num3Index &&
                        sortedNums[num2Index] === sortedNums[num2Index - 1]
                    ) {
                        num2Index++;
                    }

                    continue;
                }

                if (num1 + num2 + num3 < 0) {
                    num2Index++;
                } else {
                    num3Index--;
                }
            }
        }

        return res;
    }
}
