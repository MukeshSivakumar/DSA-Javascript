"use strict";

const powerOfTwo = (n) => {

    if(n == 0){
        return false;
    }

    return (n & (n-1)) === 0;
}

console.log(powerOfTwo(1021))

// Big O notation - O(1) : Constant Time Complexity