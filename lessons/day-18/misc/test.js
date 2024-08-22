
/*
const intArray = [1, 2, 3, 4, 5];
// hoisting ??
const evenNums = intArray.filter(filterEvenNumber);
const filterEvenNumber = num => num % 2 === 0;

function filter() { ... }
*/

let intArray;
let eventNums;
let filterEvenNumber;
function filter() { }

intArray = [1, 2, 3, 4, 5]
evenNums = intArray.filter(filterEvenNumber)
filterEvenNumber = num => num % 2 === 0