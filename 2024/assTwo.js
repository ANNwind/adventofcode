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
debugger;
var inputRows = document.querySelector("body > pre").innerText.split("\n");
var inputRowNums = [];

inputRows.forEach(
    (rowStr) => {
        var rowStrArr = rowStr.split(" ");
        var validStr = rowStrArr.filter((str) => {if (/^\d+$/.test(str.trim())) {return str}})
        var rowNumArr = validStr.map(Number)
        inputRowNums.push(rowNumArr);
    })
inputRowNums.pop()
console.log(inputRowNums)
console.log("Total number of rows: ", inputRowNums.length);

function checkIncrease(arr) {
    let increase = true;
    
    for (i=0; i < arr.length; i++) {
        if (arr[i] >= arr[i+1]) {
            increase = false;
        }
    }
    return increase
}

function checkDecrease(arr){
    let decrease = true;

    for (i=0; i < arr.length; i++) {
        if (arr[i] <= arr[i+1]) {
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

potentRows = [];

decreasing.forEach((row) => {
    potentRows.push(row)
})
increasing.forEach((row) => {
    potentRows.push(row)
})

console.log("Length potentRowsArray :", potentRows.length)

function checkDiff(arr) {
    let validRow = true
    for (i=0; i < arr.length; i++) {
        // debugger;
        diff = Math.abs(arr[i] - arr[i+1])
        if (diff < 1 || diff > 3) {
            validRow = false
        
        } 
        
    }
    return validRow
}

// test1 = [1,2,3]
// console.log("valid row :", checkDiff(test1))

validRows = [];

potentRows.forEach(
    (row) => {
        if (checkDiff(row)) {
            validRows.push(row)
        }
    })

console.log("Number of validRows", validRows.length)