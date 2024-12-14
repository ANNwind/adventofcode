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


var preceding = {}; // This are actually numbers that should come after the current

// debugger;
for (i=0; i < rules.length; i++) {
    if(!Object.keys(preceding).map(Number).includes(rules[i][0])) { // Object.keys converts our keys back to strings...
        preceding[rules[i][0]] = [rules[i][1]];
    } else {
        preceding[rules[i][0]].push(rules[i][1]);
    }
}

function getElementsBeforeAndAfter(originalArr, specifiedNumber) {
    const index = originalArr.indexOf(specifiedNumber); // Find the index of the specified element

    if (index === -1) {
        // If the element isn't found, return two empty arrays
        return [[], []];
    }

    var afterMe = originalArr.slice(index + 1); 
    var beforeMe = originalArr.slice(0, index);

    return [beforeMe, afterMe]; // Get everything after the specified index
}


function isSubset(arr1, arr2) {
    return arr1.every(element => arr2.includes(element));
}

function getMidPosish(arr) {
    if (!arr.length) return null; // Handle empty array

    const midIndex = Math.floor(arr.length / 2); // Calculate middle index
    return arr[midIndex];
}


var ansArr = [];
var valid = [];
var notValid = [];
// Loop through updates array
for (i=0; i < updates.length; i++) {
    
    for (num=0; num < updates[i].length; num++) {
        if (typeof preceding[updates[i][num]] !== 'undefined') { // our update is in the object
            // debugger;
            var updateRow = updates[i];
            var currentNum = updates[i][num];
            var numRules = preceding[updates[i][num]];

            var updatesBeforeNum = getElementsBeforeAndAfter(updateRow, currentNum)[0]; // should check if length is 0
            var updatesAfterNum = getElementsBeforeAndAfter(updateRow, currentNum)[1]; // should check if length is 0

            if (updatesBeforeNum.length < 1) {
                // We are at the start of the udates array
                if(isSubset(updatesAfterNum, numRules)) { //  && !isSubset(updatesBeforeNum, numRules), 
                    // Current number in current row is valid
                    valid.push(i) // Should push row AND item
                } else {
                    // the current number is not specified to be placed before the rest
                    notValid.push(i)
                }
            } else if (updatesAfterNum.length < 1) {
                // We are at the end of the updates array
                if(isSubset(updatesBeforeNum, numRules)) { //  && !isSubset(updatesBeforeNum, numRules), 
                    // Current number in current row is valid
                    valid.push(i) // Should push row AND item
                } else {
                    // the current number is not specified to be placed before the rest
                    notValid.push(i)
                }
            } else {
                if(isSubset(updatesAfterNum, numRules) && isSubset(updatesBeforeNum, numRules)) { //  && !isSubset(updatesBeforeNum, numRules), 
                    // Current number in current row is valid
                    valid.push(i) // Should push row AND item
                } else {
                    // the current number is not specified to be placed before the rest
                    notValid.push(i)
                }
            }

        }
    }
}

var uniqueValid = [...new Set(valid)];
    
for (i=0; i < uniqueValid.length; i++) {
    if (!notValid.includes(i)) {
    var midPosish = getMidPosish(updates[i])
    ansArr.push(midPosish)
    }
}

console.log(ansArr)

ansArr.reduce((acc, curr) => acc + curr)



