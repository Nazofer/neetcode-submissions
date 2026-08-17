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

        for (const char of t) {
            const count = charsMap.get(char) ?? 0;
            const updatedCount = count - 1;
            if (updatedCount < 0) return false 
            charsMap.set(char, updatedCount)
        }

        return true
    }
}
