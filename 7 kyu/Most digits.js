// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.
// Test.assertEquals(findLongest([1, 10, 100]), 100)
// Test.assertEquals(findLongest([9000, 8, 800]), 9000)
// Test.assertEquals(findLongest([8, 900, 500]), 900)

function findLongest(array) {
    let newArr = array.slice().sort(function (a, b) {
        return b.toString().length - a.toString().length
    });

    return newArr[0];
}

console.log(findLongest([1000, 100, 1]));