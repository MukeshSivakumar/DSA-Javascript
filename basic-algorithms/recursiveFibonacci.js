// Fibonacci series using Recursion

// Fibonacci Series - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...

// input n = 3  ------> output : 2
// input n = 8  ------> output : 21

const fibonacci = (n) => {

    if(n <= 1)
    {
        return n;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(11));