/**
 * Row is safe when all increase or decrease by max three at least one.
 * 
 * Check row by all ascending or all descending
 * If this is true check if Math.abs(first - second) is within 3
 */

var inputRows = document.querySelector("body > pre").innerText.split("\n");
var inputRowNums = [];

inputRows.forEach(
    (rowStr) => {
        var rowStrArr = rowStr.split(" ");
        var rowNumArr = rowStrArr.map(Number)
        inputRowNums.push(rowNumArr);
    })

// debugger;

var potentRows = [];

function checkArrayOrder(arr) {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            isDecreasing = false;
        } else if (arr[i] > arr[i + 1]) {
            isIncreasing = false;
        } else {
            isIncreasing = false;
            isDecreasing = false;
            break;
        }
    }

    return isIncreasing || isDecreasing;
}
// debugger;
inputRowNums.forEach(
    (row) => 
        {
    if(checkArrayOrder(row)) {
        potentRows.push(row)
    }  
})
console.log(potentRows.length)
ansArr = []
potentRows.forEach((row) => {
    if (row.some(num => num < 1 || num > 3)) {
        ansArr.push(row)
    }
})

console.log(ansArr.length)