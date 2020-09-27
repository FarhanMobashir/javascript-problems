function diff(arr) {
let newarr = arr;
let primary = 0;
let secondary = 0
let sum = 0;

for(let i = 0; i < newarr.length; i++) {
    primary += newarr[i][i];
}
let n = 2;
for(let j = 0; j < newarr.length; j++) {
    secondary += newarr[j][n];
    n--;
   
}


return Math.abs(primary - secondary);
}

console.log(diff([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]));

// result 
// primary 11 5 -12
// secondary 4 5 10
// diff 15