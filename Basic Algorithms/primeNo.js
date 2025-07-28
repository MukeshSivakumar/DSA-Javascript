"use strict"; 

let isPrime = (n) => {

    let count = 0;
    for(let i=2; i <=n/2 ; i++){


        count++;

         console.log(i);
        if(n % i == 0){
            return false
        }
    }

    console.log(count);

    return true;
}

console.log(isPrime(53));

// Big O notation - O(n)
