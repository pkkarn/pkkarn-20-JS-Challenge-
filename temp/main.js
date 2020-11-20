const arr = [1,2,3];
const arr2 = [...arr, 4, 5]; // Copying arr value into arr2


// For Each function in Array

arr2.forEach(function(item) {
    console.log(item);
})

// Map will return in array

arr3 = arr2.map(function(item) {
    return item;
})

console.log(arr3);