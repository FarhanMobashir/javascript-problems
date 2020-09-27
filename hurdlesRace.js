function hurdles(k,arr) {
function comp(a,b) {
    return b-a;
}
arr.sort(comp);
if(arr[0] <= k) {
    return 0;
} else if (arr[0] > k) {
    return arr[0] - k;
}
}

console.log(hurdles(4,[1,6,3,5,2]))