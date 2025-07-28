"use strict";

let recursiveBinarySearch = (arr, target, startIndex, endIndex) => {
    let midIndex = Math.floor((startIndex+endIndex) / 2);

    if(startIndex <= endIndex){

        if(target === arr[midIndex]){
            return midIndex;
        }else if(target < arr[midIndex]){
            endIndex = midIndex - 1;
            return recursiveBinarySearch(arr,target,startIndex,endIndex);
        }else {
            startIndex = midIndex + 1;
            return recursiveBinarySearch(arr,target,startIndex,endIndex);
        }
    }



    return -1;
    
}


// console.log(recursiveBinarySearch([-10,0,2,5,19,43], -19, 0, 5));
console.log(recursiveBinarySearch(0, -19, 0, 0));