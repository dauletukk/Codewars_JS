// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.
// Test.assertSimilar(distinct([1]), [1]);
// Test.assertSimilar(distinct([1,2]), [1,2]);
// Test.assertSimilar(distinct([1,1,2]), [1,2]);

function distinct(a) {
    return a.filter(function (el, i, arr) {
        return arr.indexOf(el) === i
    })
}

console.log(distinct([2, 3, 4, 5, 6, 3, 3]));

