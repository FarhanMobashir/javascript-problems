let arr1 = ['a', 'a', 'a', 'a'];
let arr2 = ['b', 'b', 'b', 'b', 'b'];
let arr3 = ['c']
let output = [];



function carousel(arr1, arr2, arr3) {
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            output.push(arguments[i].splice(0, 2));
        }
    }
    return output;
}

console.log(carousel(arr1, arr2, arr3));