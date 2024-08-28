// Function declaration
function add(a, b) {
    return a + b;
}
// Function expression
const add2Numbers = function (a, b) {
    return a + b;
}
// Function expression => arrow function
const arrowAdd2numbers = (a, b) => a + b;

const intArray = [1, 2, 3, 4, 5];
// hoisting ??
const filterEvenNumber = num => num % 2 === 0;
const evenNums = intArray.filter(filterEvenNumber);
console.log(evenNums);
// Lexical this binding
const person = {
    name: 'teo',
    sayHello: function(){
        setTimeout(() => {
            console.log('THIS', this);
            console.log(`Hello, tui ten ${this.name}`);
        },2000);
    }  
}
person.sayHello();