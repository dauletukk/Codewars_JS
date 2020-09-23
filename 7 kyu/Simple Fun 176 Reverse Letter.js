// Task
// Given a string str, reverse it omitting all non-alphabetic characters.
//
//     Example
// For str = "krishan", the output should be "nahsirk".
//
//     For str = "ultr53o?n", the output should be "nortlu".
//
//     Input/Output
//     [input] string str
//
// A string consists of lowercase latin letters, digits and symbols.
//
//     [output] a string
// Test.assertEquals(reverseLetter("krishan"),"nahsirk")
//
// Test.assertEquals(reverseLetter("ultr53o?n"),"nortlu")
//
// Test.assertEquals(reverseLetter("ab23c"),"cba")
//
// Test.assertEquals(reverseLetter("krish21an"),"nahsirk")

function reverseLetter(str) {
    //coding and coding..
    return str.split('').reverse().join('').replace(/[^a-z]/gi, '');

}
