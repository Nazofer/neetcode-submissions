class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const charsMap = new Map<string, number>();

        s.split("").forEach((char) => charsMap.set(char, 1 + (charsMap.get(char) ?? 0)));

        t.split("").forEach((char) => charsMap.set(char, (charsMap.get(char) ?? 0) - 1));

        return Array.from(charsMap.values()).every((count) => count === 0)
    }
}
