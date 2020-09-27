function minmax(arr) {
    let result = [];
    let sum = 0;
    for(let i = 0; i< arr.length-1; i++){
        sum += arr[i];
        for(let j = 0; j< 4;j++){
            result.push(sum)
        }
    }
   return result;
}

console.log(minmax([ 1, 2, 3, 4, 5 ]));
