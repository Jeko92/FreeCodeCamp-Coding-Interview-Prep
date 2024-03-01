const updateInventory = (arr1,arr2)=>{
    arr2.forEach(function(newItem, newPos, newArr) {
        arr1.forEach(function(currentItem, currentPos, currentArr) {
            if (currentItem[1] === newItem[1]) {
                currentItem[0] += newItem[0];
                arr2.splice(newPos, 1);
            }
        });
    });

    return arr1.concat(arr2).sort(function(a, b) {
        if (a[1] < b[1]) {
            return -1;
        } else if (a[1] > b[1]) {
            return 1;
        } else {
            return 0;
        }
    });
}

// Example inventory lists
const curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

const newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);