function longest(wordList) {
    let max = 0;
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].length > max) {
            max = wordList[i].length;
        }
    }
    return max;
}

console.log(longest(["hi", "hello"]));
// - > 5

//The time complexity of this function is big o(n);
