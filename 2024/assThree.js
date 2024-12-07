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