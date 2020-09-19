// Calculate average
//
// Write function avg which calculates average of numbers in given list.

function find_average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum / array.length;
}

console.log(find_average([15,33,2]));