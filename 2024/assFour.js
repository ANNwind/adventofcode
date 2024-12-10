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
// input = document.querySelector("body > main > article > pre:nth-child(8) > code").innerText.split("\n");
input.pop()

input = input.map((rowStr) => rowStr.split(""))
reversedInput = input.reverse()

function iterateColumns(twoDArray) {
    const rows = twoDArray.length;
    const columns = twoDArray[0].length;
    let output = []; // fix this

    for (let col = 0; col < columns; col++) {
        let items = [];
        for (let row = 0; row < rows; row++) {
            items.push(twoDArray[row][col]);
        }
        output.push(items)
    }

    return output
}


function loopDiagonally(twoDArray) {
    const length = twoDArray.length;
    const diagonalLines = (length + length) - 1;
    let itemsInDiagonal = 0;
    const midPoint = Math.floor(diagonalLines / 2) + 1;
    // let column = [];
    let outputStr = ''; 
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

        output.push(items)

    }

    return output;
}

function reverse(s){
    return s.split("").reverse().join("");
}

function findXmas(s){
    return s.match(/(XMAS)/g) // Do I need brackets?
}

function findAllXmas(rowArr) {
    var row = rowArr.join("");
    var ltr = findXmas(row);
    var rtl = findXmas(reverse(row));
    var occurs = [ltr, rtl];
    var output = occurs.filter((item) => item !== null)
    return output
}

var allVariations = [];

input.forEach((row) => {allVariations.push(row)}); 

allColumnVariations = iterateColumns(input);
allColumnVariations.forEach((row) => {allVariations.push(row)});

diagonalVariations = loopDiagonally(input);
diagonalVariations.forEach((row) => {allVariations.push(row)});

reversedDiagonalVariations = loopDiagonally(reversedInput)
reversedDiagonalVariations.forEach((row) => {allVariations.push(row)});

var answerArr = [];
// debugger;
allVariations.forEach(
    (row) => {
        // debugger;
        var res = findAllXmas(row);
        if (res.length > 0) {
            answerArr.push(res)}
        }
)

console.log(answerArr.flat().length)