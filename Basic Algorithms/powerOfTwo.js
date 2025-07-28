"use strict";


// test cases

// isPowerOf2(1) - true - 2^0
// isPowerOf2(2) - true - 2^1
// isPowerOf2(10) - false
// isPowerOf2(32) - true - 2^5

const isPowerOf2 = (n) => {

    while(n != 1) {
        if(n%2 == 0){
            n = n/2;
        }else{
            return false;
        }
    }

    return true;

};

console.log(isPowerOf2(66));

// Big O notation - O(logn)