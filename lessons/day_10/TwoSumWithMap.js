/**
 * Two sum
 * [3, 7, 22, 1] target number: 8 -> [index1, index2] -> [1,3]
 * Assumptions: Only one indice existing
 * 
 * outer loop -> 0 -> index -1
 * fisrtNum
 * inner loop -> index+1 ->index -1
 *  secondNum
 *  if(fisrt + secon ==== target)
 *      return [firstIndex, secondIndex]
 * 
 * return []
 * 
 */

const givenArray = [3, 7, 22, 1];
const targetNumber = 8;
let indices = findIndicesUsingMap(givenArray, targetNumber);
console.log(indices);

function findIndicesUsingNestedLoop(givenArray, targetNumber) {
    for (let fisrtNumberIndex = 0; fisrtNumberIndex < givenArray.length; fisrtNumberIndex++) {
        const firstNum = givenArray[fisrtNumberIndex];
        for (let secondNumberIndex = fisrtNumberIndex + 1; secondNumberIndex < givenArray.length; secondNumberIndex++) {
            const secondNum = givenArray[secondNumberIndex];
            if (secondNum === targetNumber - firstNum)
            { return [fisrtNumberIndex, secondNumberIndex] };
        }
    }
    return [];
}

// On
// function findIndicesUsingMap(givenArray, targetNumber){
//      const map = {};
//     const givenArray = [1, 7, 22, 3];
//     const targetNumber = 8;
//      map[1] = 0;
//      map[7] = 1;

//     // has
//     /**
//      *  loop index 0 -> length -1
//      * firstNum
//      * lookingNumber = targetNum - firstNum
//      * if(map.has(lookingNumber))
//      * return [map.get(lookingNumber), firstNumberIndex]
//      * map.set(firstNum, firstNumIndex)
//      */
// }
function findIndicesUsingMap(givenArray, targetNumber){
    let numMap = new Map();
    for (let fisrtNumberIndex = 0; fisrtNumberIndex < givenArray.length; fisrtNumberIndex++) {
        const firstNum = givenArray[fisrtNumberIndex];
        const lookingNum = targetNumber - firstNum;
        if(numMap.has(lookingNum)){
            return [numMap.get(lookingNum), fisrtNumberIndex];
        }
        numMap.set(firstNum, fisrtNumberIndex);
    }
    return [];
}

function findIndicesUsingMap2(givenArray, targetNumber){
    let numMap = new Map();
    for (let i = 0; i < givenArray.length; i++) {
        numMap.set(givenArray[i], i);
    }

    for (let fisrtNumberIndex = 0; fisrtNumberIndex < givenArray.length; fisrtNumberIndex++) {
        const firstNum = givenArray[fisrtNumberIndex];
        const lookingNum = targetNumber - firstNum;
        if(numMap.has(lookingNum)){
            return [numMap.get(lookingNum), fisrtNumberIndex];
        }
    }
    return [];
}