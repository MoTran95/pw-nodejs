import AnimalManagement from "./AnimalManagement";
import Dog from "./Dog";
import Horse from "./Horse";
import Tiger from "./Tiger";

let animalController = new AnimalManagement();
let dog = new Dog();
let horse = new Horse();
let tiger = new Tiger();
// let randomNumberDog = Math.floor(Math.random() * dog.getSpeed()) + 1;
// let randomNumberTiger = Math.floor(Math.random() * tiger.getSpeed()) + 1;
// let randomNumberHorse = Math.floor(Math.random() * horse.getSpeed()) + 1;

//let randomSpeed = [randomNumberDog, randomNumberHorse, randomNumberTiger];

function getSpeedRamdomAnimal(speeds:number[]){
    let randomSpeed: number[] = [];  
    speeds.forEach(speed => {
        randomSpeed.push(Math.floor(Math.random() * speed) + 1);
    });
    return randomSpeed;
}

let randomSpeed = getSpeedRamdomAnimal([dog.getSpeed(),tiger.getSpeed(),horse.getSpeed()]);
let animals = ['dog', 'tiger', 'horse'];
let winnerIndex = animalController.getWinner(randomSpeed);

// if (winner === randomSpeed[0]){
//     console.log("win is dog");
    
// }
// else if (winner === randomSpeed[1]){
//     console.log("Win is tiger");
    
// }
// else{
//     console.log("win is horse");
// }
console.log('Animal winner: ', animals[winnerIndex]);
console.log(`speed is ${randomSpeed[winnerIndex]}`);


