"use strict";

const mergeSort = (arr) => {

    if(arr.length < 2){
        return arr;
    }

    let mid = Math.floor(arr.length / 2 );

    let leftArr = arr.slice(0,mid);

    let rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr),mergeSort(rightArr));

}




const merge = (leftArray, rightArray) => {
    let tempArray = new Array();

    while(leftArray.length && rightArray.length){
        if(leftArray[0] <= rightArray[0]){
            tempArray.push(leftArray.shift());
        }
        else {
            tempArray.push(rightArray.shift());
        }
    }

    return [...tempArray,...leftArray,...rightArray];
}


console.log(mergeSort([31, 10, 28, 19, 1 , 30]));




// Big O notation - O(n logn)

// mergesort function - (logn) times
// merge function - (n) times