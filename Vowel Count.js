// Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, and u as vowels for this Kata.
//
//     The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    let vowels = 'aeiou';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                vowelsCount++;
            }
        }
    }

    return vowelsCount;
}

console.log(getCount('aeiuo'))