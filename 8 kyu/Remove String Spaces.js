// Simple, remove the spaces from the string, then return the resultant string.

// #1
// function noSpace(x){
//     return x.replace(/ /g, '');
//
// }

// #2

function noSpace(x){
    return x.split(' ').join('')
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))