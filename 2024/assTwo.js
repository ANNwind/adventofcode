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
        var validStr = rowStrArr.filter((str) => {if (/^\d+$/.test(str.trim())) {return str}})
        var rowNumArr = validStr.map(Number)
        inputRowNums.push(rowNumArr);
    })
inputRowNums.pop()

console.log("Total number of rows: ", inputRowNums.length);

function checkIfValid(arr) {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 0; i < arr.length - 1; i++) {
        let diff = Math.abs(arr[i] - arr[i + 1]);
        if (diff < 1 || diff > 3) {
            isIncreasing = false;
            isDecreasing = false;
            break;
        } else if (arr[i] < arr[i + 1]) {
            isDecreasing = false;
        } else if (arr[i] > arr[i + 1]) {
            isIncreasing = false;
        }
    }

    return isIncreasing || isDecreasing;
    
}

validArrs = []

inputRowNums.forEach((arr) => {if (checkIfValid(arr)) {
    validArrs.push(arr)
}} )

console.log(validArrs.length)

// Part 2

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

console.log("Total number of rows: ", inputRowNums.length);

function checkIfValid(arr) {
    function isValidSequence(sequence) {
        let isIncreasing = true;
        let isDecreasing = true;

        for (let i = 0; i < sequence.length - 1; i++) {
            let diff = Math.abs(sequence[i] - sequence[i + 1]);
            if (diff < 1 || diff > 3) {
                isIncreasing = false;
                isDecreasing = false;
                break;
            } else if (sequence[i] < sequence[i + 1]) {
                isDecreasing = false;
            } else if (sequence[i] > sequence[i + 1]) {
                isIncreasing = false;
            }
        }
        return isIncreasing || isDecreasing;
    }

    if (isValidSequence(arr)) {
        return true; 
    } else if (arr.length <= 1) {
        return false; 
    } else {
        for (let j = 0; j < arr.length; j++) {
            let newArr = arr.slice(0, j).concat(arr.slice(j + 1));
            if (isValidSequence(newArr)) {
                return true;
            }
        }
        return false;
    }
}

validArrs = [];
// secondChange = [];

inputRowNums.forEach((row) => {
    if(checkIfValid(row)) {
        validArrs.push(row)
    }
})

console.log(validArrs.length)
// console.log(secondChange.length)