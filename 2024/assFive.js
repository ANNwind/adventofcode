/**
 * Identify which updates are already in the right order.
 * X needs to be before Y at some point
 * 
 * Build object that holds X as primary and an array with all Y values
 * 
 * Middle page number of each correctly ordered update (row.length / 2) with modulus or something. you figure it out.
 * 
 * Add all middle page numbers
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

