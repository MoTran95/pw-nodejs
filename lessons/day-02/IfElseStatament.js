const readline = require('readline-sync');

// let myName = readline.question('Your name: ');
// let myAge = readline.question('Your age');
// console.log(`${myName}, ${myAge}`);

// let nextYearAge = Number(myAge) + 1;
// console.log(nextYearAge);

let arrivalTime = readline.question('arriavalTime: ');
let isHeOnTime = (arrivalTime == 7);

// "2" == 2 => true check value khong check kieu du lieu
// "2" === 2 => false check value va kieu du lieu
//Comparision operator: >, < ,>=,<=,==, ===, !=, !== ???
// ! 
if(isHeOnTime){
    console.log('Let\'s talk! ');
    if(somethingElse){
        //Do something else here
    } else {
        if(anotherThing){
            // And then so on..
        }
    }
} else{
    console.log('Write a letter')
}
// ! true => false
if (!isHeOnTime){
    console.log('Let\'s talk! ');
} else{
    console.log('Write a letter')
}

// Ternary operator: toan tu 3 ngoi
let msg = isHeOnTime ? 'Let\'s talk! ': 'Write a letter';
console.log(msg);
