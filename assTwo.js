/**
 * Row is safe when all increase or decrease by max three at least one.
 * 
 * Check row by all ascending or all descending
 * If this is true check if Math.abs(first - second) is within 3
 * 
 * Lets do different:
 * Add all decreasing rows to an array
 * Add all increasing rows to an arry
 * Add all rows from the increase and decrease array that diff min 1 and max 3 to final array
 */

var inputRows = document.querySelector("body > pre").innerText.split("\n");
var inputRowNums = [];

inputRows.forEach(
    (rowStr) => {
        var rowStrArr = rowStr.split(" ");
        var rowNumArr = rowStrArr.map(Number)
        inputRowNums.push(rowNumArr);
    })

console.log("Total number of rows: ", inputRowNums.length);

function checkIncrease(arr) {
    let increase = true;
    
    for (i=0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            increase = false;
        }
    }
    return increase
}

function checkDecrease(arr){
    let decrease = true;

    for (i=0; i < arr.length; i++) {
        if (arr[i] < arr[i+1]) {
            decrease = false;
        }
    }
    return decrease
}

decreasing = [];
increasing = [];

inputRowNums.forEach(
    (row) => {
        if (checkIncrease(row)) {
            increasing.push(row);
        } else if (checkDecrease(row)) {
            decreasing.push(row)
        }
            
    } 
)

console.log("Num potentrows: ", decreasing.length + increasing.length)