/**
 * check row left to right
 * check row right to left
 * check columns up and down
 * check colums down and up
 * check diagonal up and down
 * check diagonal down and up
 */

var input = document.querySelector("body > pre").innerText.split("\n");
var input = document.querySelector("body > main > article > pre:nth-child(8) > code").innerText.split("\n");
var numCols = input[0].length;
var numRows = input.length;
// debugger;
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
    var rowRes = [];
    var usedRows = [];
    var colRes = [];
    var allColls = [];
    var col = [];

    for(colNum = 0; colNum < numCols + 1; colNum++){
        if(col.length === numRows) {
            var cleanedColArray = col.filter(function( element ) {return element !== undefined;});
            var resCol = cleanedColArray.join("")
            allColls.push(resCol)
            col = []; // empty col
        } 
        for (rowNum = 0; rowNum < numRows; rowNum++) {
            if (usedRows.length !== numRows -1) {
                usedRows.push(input[rowNum])
                // rowRes.push(func(input[rowNum])) // findBoth maybe doe this when finished?    
            }
            col.push(input[rowNum][colNum]);
        }
    }
        
    res = [];
    return {row:usedRows, col:allColls}
}

iterRow(input, findBoth)



