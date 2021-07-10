function toJadenCase(str) {
    return str.split(' ').map(function (elem, ind){
        return elem[0].toUpperCase()+elem.substring(1)
    }).join(' ')
}

console.log(toJadenCase('How can mirrors be real if our eyes real'))