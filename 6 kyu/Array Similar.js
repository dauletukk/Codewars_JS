// Write a function that determines whether the passed in arrays are similar.
// Similar means they contain the same elements, and the same number of occurrences of elements.
//
//     var arr1 = [1, 2, 2, 3, 4],
//     arr2 = [2, 1, 2, 4, 3],
//     arr3 = [1, 2, 3, 4],
//     arr4 = [1, 2, 3, "4"]
//
// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false

const arraysSimilar = (x, y) => {
    if (x.length !== y.length) return false;
    y = y.sort();
    return x.sort().every((e, i) => e === y[i]);
}