// You are given an array of values.
//
//     Sum every number value in the array, and any nested arrays (to any depth).
//
// Ignore all other types of values.

// Test.assertEquals(arraySum([1, 2]), 3);
// Test.assertEquals(arraySum([1, 2, 3]), 6);
// Test.assertEquals(arraySum([1, 2, [1, 2]]), 6);

function arraySum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (typeof el === 'number') {
            sum = sum + el;
        } else if (Array.isArray(el)) {
            let returnValue = arraySum(el);
            sum = sum + returnValue;
        }
    }

    return sum;
}