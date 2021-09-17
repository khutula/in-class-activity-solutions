// An unsorted array
let numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order and assign the results to a variable
let descSort = numArray.sort(function compareFunction(first, second) {
    return second - first;
});

console.log("Descending Array");
console.log(descSort);

// Reverse the array order
let ascSort = numArray.reverse();

console.log("Ascending Array");
console.log(ascSort);

// Slice the first five elements of the sortedAscending array, assign to a letiable
let sliced = ascSort.slice(0, 5);

console.log("Sliced Array");
console.log(sliced);