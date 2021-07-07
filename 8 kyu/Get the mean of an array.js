// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//
//     Return the average of the given array rounded down to its nearest integer.
//
//     The array will never be empty.
//


// function getAverage(marks) {
//     return Math.floor(marks.reduce(function (res, elem, ind, arr) {
//             return res + elem / arr.length;
//         }, 0)
//     );
// }
//
// console.log(getAverage([3, 3, 4, 5, 4, 5, 3]))

function getAverage(marks) {
    let sum = 0;
    for(let i = 0;i < marks.length; i++){
        sum = sum + marks[i]
    }
    let aver =  Math.floor(sum/marks.length)
    return aver
}

console.log(getAverage([1,2,3,4,5]))