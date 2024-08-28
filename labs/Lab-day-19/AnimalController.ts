import AnimalManagement from "./AnimalManagement";
import Dog from "./Dog";
import Horse from "./Horse";
import Tiger from "./Tiger";

let animalController = new AnimalManagement();

let dog = new Dog();
let horse = new Horse();
let tiger = new Tiger();

let winner = animalController.getWinner([dog, tiger, horse]);

console.log(`Winer is ${winner.getName()}`);
console.log(`Speed of winner is ${winner.getSpeed()}`);
