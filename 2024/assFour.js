/**
 * check row left to right
 * check row right to left
 * check columns up and down
 * check colums down and up
 * check diagonal up and down
 * check diagonal down and up
 */

var input = document.querySelector("body > pre").innerText.split("\n");
var numCols = input[0].length;
var numRows = input.length;

function reverse(s){
    return s.split("").reverse().join("");
}

function findXmas(s){
    return s.match(/(XMAS)/g) // Do I need brackets?
}

function findBoth(row) {
    var ltr = findXmas(row);
    var rtl = findXmas(reverse(row));
    var occurs = [ltr, rtl];
    return occurs
}

function iterRow(input, func){
    rowRes = [];
    colRes = [];
    allColls = [];

    for(colNum = 0; colNum < numCols; colNum++){
        if(typeof col !== 'undefined' && col.length === numCols) {
            allColls.push(col)
            col = []; // empty col
        } 
        for (rowNum = 0; rowNum < numRows; rowNum++) {
            rowRes.push(func(input[rowNum])) // findBoth
            col.push(input[rowNum][colNum]);
        }
    }
        
    res = [];
    return {row:rowRes, col:allColls}
}

iterRow(input, findBoth)



