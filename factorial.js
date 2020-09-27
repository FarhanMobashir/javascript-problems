function factorial(n) {
    if (n === 0 || n > 10) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}
console.log(factorial(6));