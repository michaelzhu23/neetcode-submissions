class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for(const word of strs){
            const sortedWord = word.split("").sort().join("");

            if(map[sortedWord] === undefined){
                map[sortedWord] = [word]
            }else {
                map[sortedWord].push(word)
            }
        }

        return Object.values(map);
    }
}
