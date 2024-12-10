/**
 * check row left to right
 * check row right to left
 * check columns up and down
 * check colums down and up
 * check diagonal up and down
 * check diagonal down and up
 */

// We dun't anders:

var input = document.querySelector("body > pre").innerText.split("\n");
// debugger;
// input = document.querySelector("body > main > article > pre:nth-child(8) > code").innerText.split("\n");
input.pop()

input = input.map((rowStr) => rowStr.split(""))
reversedInput = input.reverse()

function iterateColumns(twoDArray) {
    const rows = twoDArray.length;
    const columns = twoDArray[0].length;
    let output = [];

    for (let col = 0; col < columns; col++) {
        let items = [];
        for (let row = 0; row < rows; row++) {
            items.push(twoDArray[row][col]);
        }
        output.push(items);
    }

    return output;
}

function loopDiagonally(twoDArray) {
    const length = twoDArray.length;
    const diagonalLines = (length + length) - 1;
    let itemsInDiagonal = 0;
    const midPoint = Math.floor(diagonalLines / 2) + 1;
    let output = [];

    for (let i = 1; i <= diagonalLines; i++) {
        let items = [];
        let rowIndex, columnIndex;

        if (i <= midPoint) {
            itemsInDiagonal++;
            for (let j = 0; j < itemsInDiagonal; j++) {
                rowIndex = (i - j) - 1;
                columnIndex = j;
                items.push(twoDArray[rowIndex][columnIndex]);
            }
        } else {
            itemsInDiagonal--;
            for (let j = 0; j < itemsInDiagonal; j++) {
                rowIndex = (length - 1) - j;
                columnIndex = (i - length) + j;
                items.push(twoDArray[rowIndex][columnIndex]);
            }
        }

        output.push(items);
    }

    return output;
}

function reverse(row) {
    return row.split("").reverse().join("");
}

function countXmasOccurrences(row) {
    const matchesLTR = (row.match(/XMAS/g) || []).length;
    const matchesRTL = (reverse(row).match(/XMAS/g) || []).length;
    return matchesLTR + matchesRTL;
}

function process2DArray(twoDArray) {
    let count = 0;

    // Rows
    count += twoDArray.reduce((acc, row) => acc + countXmasOccurrences(row.join("")), 0);

    // Columns
    const columns = iterateColumns(twoDArray);
    count += columns.reduce((acc, col) => acc + countXmasOccurrences(col.join("")), 0);

    // Diagonals (Top-Left to Bottom-Right)
    const diagonals = loopDiagonally(twoDArray);
    count += diagonals.reduce((acc, diag) => acc + countXmasOccurrences(diag.join("")), 0);

    // Diagonals (Bottom-Left to Top-Right)
    const reversedDiagonals = loopDiagonally(twoDArray.reverse());
    count += reversedDiagonals.reduce((acc, diag) => acc + countXmasOccurrences(diag.join("")), 0);

    return count;
}

process2DArray(input)

// part 2

// var input = document.querySelector("body > pre").innerText.split("\n");
// debugger;
input = document.querySelector("body > main > article:nth-child(1) > pre:nth-child(8) > code").innerText.split("\n");
input.pop()

input = input.map((rowStr) => rowStr.split(""))

function checkAroundMe(i,j){
    // debugger;
    // var yesSir = false
    // test1 = input[i-1][j-1] + 'A' + input[i+1][j+1] // this is good
    // test2 = input[i+1][j-1] + 'A' + input[i-1][j+1]
    try{var ltr = (input[i-1][j-1] + 'A' + input[i+1][j+1]).match(/MAS|SAM/g)?.length > 0;  
        var rtl = (input[i+1][j-1] + 'A' + input[i-1][j+1]).match(/MAS|SAM/g)?.length > 0;
    }catch(error){
        debugger;
        console.log(error)}
    
    return ltr && rtl
}

count = 0
for (i=0; i < input.length-1; i++) {
    for (j=0; j < i-1; j++) {
        if (input[i][j] !== 'A') {
            continue
        } else {
            if(checkAroundMe(i,j)){
                count += 1
            } 
        }

    }
}

console.log(count)
