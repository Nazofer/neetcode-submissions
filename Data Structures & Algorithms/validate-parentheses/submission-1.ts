class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const validPairs = new Map([
            ["{", "}"],
            ["[", "]"],
            ["(", ")"],
        ]);
        const openingQuotes = Array.from(validPairs.keys());
        const quotes = s.split("");
        const stack: string[] = [];

        for (const quote of quotes) {
            if (openingQuotes.includes(quote)) {
                stack.push(quote);
                continue;
            }

            const lastElemInStack = stack.pop();

            if (!lastElemInStack) return false;

            if (quote !== validPairs.get(lastElemInStack)) {
                return false;
            }
        }

        return !stack.length;
    }
}
