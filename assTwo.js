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

console.log(inputRowNums)