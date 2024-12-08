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

var newInput = input.split(/(do\(.*?\)|don't\(.*?\))/g);
// var keepOnRocking = true

for (i=0; i < newInput; i++) {
    if (i !== "don't()") {
        console.log(i)
    } else if (i === "don't()"){
        continue
    }

}

while (keepOnRocking) { // niet nodig?
    // loop door array
    // check of i !don't() is
    // function die exeCuteMul aanroep en ook wegschrijft naar array
    // else als i don't() is, continue totdat i do() is
    // // function die exeCuteMul aanroep en ook wegschrijft naar array

}
