// Implement Quicksort (Optional)
// Objectives:
// Technical interview practice
// Implement quicksort
// Sort an unsorted array with no duplicate values

// unsorted array with no duplicate values

let unsortArray = [0,2,5,8,1,3,4,7,6,90,43,21,30,99];

function quicksort(arr){
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort(unsortArray));