"use strict";


// My solution

// let bubbleSort = (arr) => {
//     for(let i = arr.length -1 ; i > 0 ; i--){
//         for(let j = 0; j < i ; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]; 
//             }
//         }
//     }

//     return arr;
// }



// other solution

// let bubbleSort = (arr) => {
//     let swapped;

//     do{
//     swapped = false;
//     for(let i = 0; i < arr.length ; i++){
//          if(arr[i] > arr[i+1]){
//             let temp = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = temp;
//             swapped = true;
//          }
//     }
//     } while(swapped)

//     return arr;
// }




// let numArr = [92, 45, 88, 1, 14, 2]
// console.log(bubbleSort(numArr));


// testing object set key-value pairs

let userObject = { 
    name : "Raju",
    uid : 12345,
    age : 35
}

console.table(userObject);


// userObject.set("designation", "actor");

userObject["deignation"] = "Actor";


console.table(userObject);