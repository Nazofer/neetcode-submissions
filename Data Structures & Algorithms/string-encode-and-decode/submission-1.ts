class Solution {
    private delimiter = "#";
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map((str) => `${str.length}${this.delimiter}${str}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (!str.length) {
            return [];
        }

        const stringsArr = [];

        let index = 0;

        while (index < str.length) {
            let currentStringLength = "";

            while (!Number.isNaN(Number.parseInt(str[index]))) {
                currentStringLength += str[index];
                index++;
            }

            const parsedCurrentStringLength = Number.parseInt(currentStringLength);
            const currentStringStartIndex = index + this.delimiter.length; //skip delimiter
            const currentStringEndIndex = currentStringStartIndex + parsedCurrentStringLength - 1;
            stringsArr.push(str.slice(currentStringStartIndex, currentStringEndIndex + 1));
            index = currentStringEndIndex + 1;
        }

        return stringsArr;
    }
}
