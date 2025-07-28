"use strict";

let fibonacci = (n) => {

    let count = 2;
    let fibo_Sequence = new Array(0,1);

    // if n = 0, 1, 2

    if(n == 0 ) {
        return "Enter valid input";
    }
    else if(n == 1){
        return fibo_Sequence[0];
     }
     else if(n == 2) {
        return fibo_Sequence;
     }


    
    for(let i = 2 ; i < n ; i++){
        fibo_Sequence.push(fibo_Sequence[i-1] + fibo_Sequence[i-2])
    }

    return fibo_Sequence;

};

console.log(fibonacci(20));


// Big O notation - O(n)
