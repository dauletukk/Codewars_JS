// You only need one - Beginner
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//
//     Array can contain numbers or strings. X can be either.
//
//     Return true if the array contains the value, false if not.

// (check([66, 101], 66), true);
// (check([101, 45, 75, 105, 99, 107], 107), true);
// (check(['t', 'e', 's', 't'], 'e'), true);
// (check(['what', 'a', 'great', 'kata'], 'kat'), false);

// function check(a, x) {
//     // your code here
//     return a.includes(x);
// }

function check(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return true
        } else {
            return false
        }
    }
}

console.log(check(['what', 'a', 'great', 'kata'], 'kat'))

