function findShort(str) {
    return str.split(' ').map(function (elem){
        return elem.length
    })
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))