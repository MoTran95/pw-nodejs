const {
    teo,
    convertToEvenNumbers,
    sortNumberASC,
    sortNumberDESC,
} = require('../../Utils/ArrayHelper');
// Filter
let myArray = [1, 2, 3, 4, 5];
let evenNumber = myArray.filter(teo);

// Map
let toEvenNumbers = myArray.map(convertToEvenNumbers)

// Sort - String
let myStrings = ['B', 'C', 'A'];
myStrings.sort();
myStrings.reverse();

// Sort - Number
let otherNumArray = [100, 22, 19];
otherNumArray.sort(sortNumberASC);
console.log(otherNumArray);
otherNumArray.sort(sortNumberDESC);
console.log(otherNumArray);


// console.log(evenNumber);
// console.log(toEvenNumbers);
// console.log(myStrings);
