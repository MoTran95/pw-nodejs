const readline = require('readline-sync');

let yourNumber = readline.question('Input a number: ');
let result = yourNumber % 2;

if (result === 0) {
    console.log('This is a even number');
} else {
    console.log('This is an odd number');
}
