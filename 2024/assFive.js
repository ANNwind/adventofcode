/**
 * Identify which updates are already in the right order.
 * X needs to be before Y at some point
 * 
 * Build object that holds X as primary and an array with all Y values
 * 
 * Middle page number of each correctly ordered update (row.length / 2) with modulus or something. you figure it out.
 * 
 * Add all middle page numbers
 * 
 * Get i of update, retrieve values of object, loop through values and check if they are after 75
 */

var rawInput = document.querySelector("body > main > article > pre:nth-child(8) > code").innerText.split("\n"); // test input
var rules = rawInput.filter((row) => row.includes("|")).map((rule) => rule.split("|").map(Number));
var updates = rawInput.filter((row) => row.includes(",")).map((rule) => rule.split(",").map(Number));


var checkPrecedence = {};

// debugger;
for (i=0; i < rules.length; i++) {
    if(!Object.keys(checkPrecedence).map(Number).includes(rules[i][0])) { // Object.keys converts our keys back to strings...
        checkPrecedence[rules[i][0]] = [rules[i][1]];
    } else {
        checkPrecedence[rules[i][0]].push(rules[i][1]);
    }
}

function generateAnser(num) {
    // check the validity of the update number by comparing each next sibling (just count) if it is in the object
    // if it is valid extract the middle number
    // push it to global array
    // no return statement?
}

var ansArr = [];
// Loop through updates array
for (i=0; i < updates.length; i++) {
    for (num=0; num < updates[i].length; num++) {
        if (typeof checkPrecedence[num] !== 'undefined') { // our update is in the object
            // call Function that checks the validity of the updates
        }
    }
}

ansArr.reduce((acc, curr) => acc + curr)
