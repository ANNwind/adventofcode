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


var preceding = {};

// debugger;
for (i=0; i < rules.length; i++) {
    if(!Object.keys(preceding).map(Number).includes(rules[i][0])) { // Object.keys converts our keys back to strings...
        preceding[rules[i][0]] = [rules[i][1]];
    } else {
        preceding[rules[i][0]].push(rules[i][1]);
    }
}

function isSubset(arr1, arr2) {
    return arr1.every(element => arr2.includes(element));
}

function getMidPosish(arr) {
    if (!arr.length) return null; // Handle empty array

    const midIndex = Math.floor(arr.length / 2); // Calculate middle index
    return arr[midIndex];
}


function addValidMidPosish(arr, obj, num) {
    // check the validity of the update number by comparing each next sibling (just count) if it is in the object
    // if it is valid extract the middle number
    // push it to global array
    // no return statement?
    debugger;
    var preceders = obj[num]; // precedingObj, maybe only need array?

    // Should check position of num! Below is only valid when num === arr[0]
    var currentUpdates = arr.filter((arrNum) => arrNum !== num); // Get all updates chuck out the current num.

    if (isSubset(currentUpdates, preceders)) { // Check if currentUpdates are in preceders
        var midPosish = getMidPosish(arr)
        ansArr.push(midPosish)
    }
    // are all currentUpdates minus current Num inside preceders

    
}

var ansArr = [];
// Loop through updates array
for (i=0; i < updates.length; i++) {
    for (num=0; num < updates[i].length; num++) {
        if (typeof preceding[updates[i][num]] !== 'undefined') { // our update is in the object
            // call Function that checks the validity of the updates
            addValidMidPosish(updates[i], preceding, updates[i][num])
        }
    }
}

console.log(ansArr)

ansArr.reduce((acc, curr) => acc + curr)
