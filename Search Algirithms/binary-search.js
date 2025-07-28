"use strict";

// Binary Search algorithm
let binarySearch = (arr, target) => {

    let leftIndex = 0;
    let rightIndex = arr.length-1;

    if(arr.length === 0){
        return -1;
    }


    while(leftIndex <= rightIndex){
        let midIndex = Math.floor((leftIndex+rightIndex) / 2);

        console.log(leftIndex,rightIndex,midIndex);

        if(target === arr[midIndex]){
            return midIndex;
        }
        else if(target < arr[midIndex]){
            rightIndex = midIndex - 1;
        }
        else {
            leftIndex = midIndex + 1;
        }
    }

    return -1;
   
}


console.log(binarySearch([-91,2,4,9,10,89],91));