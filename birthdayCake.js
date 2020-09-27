function comp(a,b) {
    return b-a;
 }
function cake(arr) {
    function comp(a,b) {
        return b-a;
     }
 arr.sort(comp);
 let count = 0;
 for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[0]) {
        count++;
    }
 }
 return count;
}

console.log(cake([3,2,1,3]));
// result == 2