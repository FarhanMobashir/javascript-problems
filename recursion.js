function recursion(n) {
    if (n < 0) {
        return;
    } else {
        console.log(n);
        recursion(n - 2);
    }
}

recursion(12);

// factorial

// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5));

function Fibo(n) {
    if (n <= 1) {
        return n;
    } else {
        return Fibo(n - 1) + Fibo(n - 2);
    }
}

console.log("Hello", Fibo(40));