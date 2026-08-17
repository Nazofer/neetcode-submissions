class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const groupsMap = new Map<string, string[]>();

        for (const str of strs) {
            const canonicalKey = str.split("").sort().join("");
            groupsMap.set(canonicalKey, [...(groupsMap.get(canonicalKey) ?? []), str]);
        }

        return Array.from(groupsMap.values());
    }
}
