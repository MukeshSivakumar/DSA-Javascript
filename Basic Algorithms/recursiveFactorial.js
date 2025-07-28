"use strict";

let recurFactorial = (n) => {

    if(n < 0) {
        return 0;
    }
    
    if(n == 1) {
        return 1;
    }

    return n * recurFactorial(n-1);

}

console.log(recurFactorial(5));


// Big O notation - O(n)