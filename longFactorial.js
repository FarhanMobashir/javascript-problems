function extraLongFactorials(n) {
    var result = 1;
    for(let i = 2; i <= n; i++) {
        result = result*i;
        
    }
    console.log(result.toLocaleString('fullwide', { useGrouping: false }) );
    
           
}

console.log(extraLongFactorials(26));