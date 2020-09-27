function plusMinus(arr) {
    let positive = 0;
    let negative =0;
    let zero = 0;
    let n = arr.length;

    for(let i = 0; i < n; i++ ) {
        if(arr[i] < 0) {
            negative++;
        } else if (arr[i] > 0) {
            positive++;
        } else if (arr[i] === 0) {
            zero++;
        }
    }
    console.log(positive/n);
    console.log(negative/n);
    console.log(zero/n);
}

console.log(plusMinus([-4, 3 ,-9, 0, 4, 1]));