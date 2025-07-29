"use strict";

const linearSearch = (arr, target) => {

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === target){
            return i;
        }
    }

    return -1;
}

console.log(linearSearch([8,10,281,1,4,90], 100));

// Big O notation - O(n)