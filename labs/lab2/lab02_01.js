const readline = require('readline-sync');

let height = readline.question('Your height: ');
let weight = readline.question('Your weight: ');
let bmi = weight / (height * height);
console.log(`BMI: ${bmi}`);

if (bmi < 18.5) {
    console.log('Underweight');
} else if (bmi <= 24.9) {
    console.log('Normal weight');
} else if (bmi <= 29.9) {
    console.log('Overweight');
} else {
    console.log('Obesity');
}
