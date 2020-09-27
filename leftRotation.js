function leftRotation(d,arr) {
    let result = [];
    let n = arr.length;
    for(let i = d; i < n; i++ ) {
        result.push(arr[i]);
    }
    for(let j = 0; j < d; j++) {
        result.push(arr[j]);
    }
    return result;
}

console.log(leftRotation(2,[1,2,3,4,5]));