function sumZero(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] + arr[i] === 0) {
                return true;
            }
        }
    }
    return false;
}

console.log(sumZero([]))
// -> False
console.log(sumZero([1]))
// -> False
console.log(sumZero([1, 2, 3]))
// -> False
console.log(sumZero([1, 2, 3, -2]))
// -> True

//The run time for this particular function I wrote is
//big o(n)^2 because of the double nested for loop