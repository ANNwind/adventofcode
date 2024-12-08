var input = document.querySelector("body > pre").innerText;
var validMuls = input.match(/mul\(\d{1,3},\d{1,3}\)/g)

function exeCuteMul(str) {
    return str.match(/\d{1,3},\d{1,3}/g).join().split(",").map(Number).reduce((acc, curr) => {return acc * curr})    
   }
debugger;
exeCutedMuls = [];
validMuls.forEach((mul) => {
    exeCutedMuls.push(exeCuteMul(mul))
})

exeCutedMuls.reduce((acc, curr) => {return acc + curr},0)

// part 2
var input = document.querySelector("body > pre").innerText;
var newInput = input.split(/(do\(.*?\)|don't\(.*?\))/g);
var usedMuls = [];
var ansArr = [];

function exeCuteMul(str, resArr) {
        var muls = str.match(/mul\(\d{1,3},\d{1,3}\)/g);
        var executedMuls = muls.map((str) => str.match(/\d{1,3},\d{1,3}/g).join().split(",").map(Number).reduce((acc, curr) => {return acc * curr}))
        resArr.push(executedMuls);   
   }

debugger;
skipIteration = false
for (i=0; i < newInput.length; i++) {
    if(newInput[i] === "do()" && skipIteration === true) {
        skipIteration = false
    } else if ((newInput[i] !== "don't()" && newInput[i] !== "do()") && skipIteration === false) {
        exeCuteMul(newInput[i], ansArr); 
    } else if (newInput[i] === "don't()") {
        skipIteration = true
    }

}

ansArrFlattened = ansArr.flat()
console.log("The answer is: ",ansArrFlattened.reduce((acc, curr) => {return acc + curr},0));