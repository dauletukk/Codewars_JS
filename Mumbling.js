// This time no story, no theory. The examples below show you how to write function accum:
//
//     Examples:
//
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function mumbl(str) {
    let str1 = str.split('');
    for (let i = 0; i < str.length; i++) {
        str1[i] = str[i] + str1[i].repeat(i)
    }
    return str1.join('-')
}

console.log(mumbl('ajdhlakd'))