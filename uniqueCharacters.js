function uniqChars(word) {
    let wordSet = new Set;
    for (let i = 0; i < word.length; i++) {
        wordSet.add(word[i]);
    }
    if (wordSet.size === word.length) {
        return true;
    } else {
        return false;
    }
}

console.log(uniqChars("Monday"))
// -> True
console.log(uniqChars("Moonday"))
// -> False

// The runtime of this function is big o(n) because it is
// only a single for loop and will scale with n items