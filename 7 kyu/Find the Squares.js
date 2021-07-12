// Problem
// Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"
//
// Examples
// 9  -->  "25-16"
// 5  -->  "9-4"
// 7  -->  "16-9"

const findSquares = num => {

    let minNum = Math.floor(num/2)
    let maxNum = Math.ceil(num/2)
    let maxNum2 = Math.pow(maxNum, 2)
    let minNum2 = Math.pow(minNum, 2)

    return `${maxNum2}-${minNum2}`;

};