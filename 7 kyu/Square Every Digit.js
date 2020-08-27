// Welcome. In this kata, you are asked to square every digit of a number.
//
//     For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//
// Note: The function accepts an integer and returns an integer
// Test.assertEquals(squareDigits(9119), 811181);

function squareDigits(num){
    //may the code be with you
    num = num.toString().split('').map(function (elem) {
        return elem*elem;
    }).join('');
    return parseInt(num)


}

console.log(squareDigits(15));

// function squareDigits(num){
//     //may the code be with you
//     output = []
//     let str = num.toString()
//
//     for (let i=0; i<str.length; i++){
//         output.push(parseInt(str[i]*str[i]))
//     }
//
//     return parseInt(output.join(''))
//
// }