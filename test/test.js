const gimme = function (inputArray) {
    let order = inputArray.slice().sort(function (a, b) {
        return a - b;
    });
    console.log(order)
    return inputArray.indexOf(order[1]);

};


console.log(gimme([99, 12, 97]))