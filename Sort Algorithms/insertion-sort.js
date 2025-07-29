"use strict";


// my solution 
let insertionSort = (arr) => {

    let numberToInsert ;


    for(let i = 1 ; i < arr.length ; i++){

       numberToInsert = arr[i];

        for(let j = i-1 ; j >= 0 ; j--){
            
          if(numberToInsert < arr[j]){
            arr[j+1] = arr[j];

            if(j == 0 ){
                arr[j] = numberToInsert;
            }
          }
          else {
            arr[j+1] = numberToInsert;
            break;
          }


        }
    }

    return arr;

}

console.log(insertionSort([0,9,-2,-1,7]));

// Big O notation - O(n^2)