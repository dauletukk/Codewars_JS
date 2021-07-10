// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
//     Example:
//
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
    let minNum = Math.min(...numbers.split(' '))
    let maxNum = Math.max(...numbers.split(' '))
    return minNum.toString() +' ' + maxNum.toString()
}
console.log(highAndLow("1 2 3 4 5"))