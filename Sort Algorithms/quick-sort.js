"use strict";

let quickSort = (arr) => {

    if(arr.length < 2){
        return arr;
    }

    let pivot = arr[arr.length - 1];

    let leftArr = new Array();
    let rightArr = new Array();

    for(let i=0 ; i < arr.length - 1 ; i++){
        if(arr[i] <= pivot){
            leftArr.push(arr[i]);
        }
        else {
             rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr),pivot,...quickSort(rightArr)];
}

console.log(quickSort([16,-5,8,2,17,10]));

// Worst Case Time Complexity: O(n^2)

// Average and Best Case Time Complexity: O(n log n)