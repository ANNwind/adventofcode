input = document.querySelector("body > pre").innerHTML;
list = input.split("\n");
left = [];
right = [];
// debugger;
list.forEach(
    (pair) => {
        pairList = pair.split(" ").filter(function (el) {return el != ''})
        numberPairList = pairList.map(Number)
        
        left.push(numberPairList[0])
        right.push(numberPairList[1])
    }
)

leftSorted = left.sort()
rightSorted = right.sort()

// console.log(leftSorted)
// console.log(rightSorted)

pairedSorted = []
leftSorted.forEach(
    (leftNum, index) => {
        let rightNum = rightSorted[index]
    pairedSorted.push([leftNum, rightNum])
    
    }

)

// console.log(pairedSorted)

finalNums = [];

pairedSorted.forEach(
    (finalPair) => {
        finalNums.push(Math.abs(finalPair[0] - finalPair[1]))
    }
)
finalNums.pop()
ans = finalNums.reduce(
    (accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0
        );
console.log(ans)

/**
 * Part 2
 * How often appears each value in left in right
 * Count how many times the left value appears in right. 
 * Mulitply left value with the numAppearanceInRight
 * Push to array
 * Sum each value in that array
 */
// 'https://stackoverflow.com/questions/37365512/count-the-number-of-times-a-same-value-appears-in-a-javascript-array'

function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}


preRes = [];
debugger;
left.forEach(
    (num) => {
        let numAppearanceInRight = getOccurence(right, num);
        let res = num * numAppearanceInRight
        preRes.push(res);
    }
)

preRes.pop()

var ans2 = preRes.reduce(
    (accumulator, currentValue) => {
        return accumulator + currentValue
    },0
);

console.log(ans2)