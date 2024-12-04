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

// part 2
'https://stackoverflow.com/questions/37365512/count-the-number-of-times-a-same-value-appears-in-a-javascript-array'