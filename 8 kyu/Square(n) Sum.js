// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
//     For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    return numbers.map(function (elem){
        return Math.pow(elem, 2)
    }).reduce(function (sum, elem){
        return sum + elem
    }, 0)

}

console.log(squareSum([1, 2, 2]))

// function squareSum(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i = i +1) {
//         numbers[i] = Math.pow(numbers[i], 2);
//         sum = sum + numbers[i]
//     }
//     return sum;
// }