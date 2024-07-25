const readline = require('readline-sync');

 let height = readline.question('Your height: ');
 let weight = readline.question('Your weight: ');
 let bmi = weight / (height * height); 
 let desiredWeight = (height * height) * 18.5;
 let diffWeight = (desiredWeight - weight).toFixed(2);
 console.log (`BMI: ${bmi}`);
if (bmi < 18.5){
    console.log('Underweight');
    console.log('You should be gain your weight by', diffWeight);
} else if(bmi <= 24.9){
    console.log('Normal weight');
} else if(bmi <= 29.9){
    console.log('Overweight');
    console.log('You should be decrease your weight by', -diffWeight);
} else {
    console.log('Obesity');
    console.log('You should be decrease your weight by', -diffWeight);
}