// Given an array, find the integer that appears an odd number of times.
//
//     There will always be only one integer that appears an odd number of times.
//
// Test.describe('Example tests', function() {
//     doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//     doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//     doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//     doTest([10], 10);
//     doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
//     doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
// });

function findOdd(A) {
    //happy coding!
    let count = 0;
    for (let i = 0; i < A.length; i++){
        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                count++
            }
        }
        if (count % 2 !== 0) {
            return A[i]
        }
    }
}

console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]))