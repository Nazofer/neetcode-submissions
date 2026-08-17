class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const clearedStr = s.toLowerCase().replace(/\W/g, "");
        console.log(clearedStr)
        return clearedStr.split("").reverse().join("") === clearedStr;
    }
}
