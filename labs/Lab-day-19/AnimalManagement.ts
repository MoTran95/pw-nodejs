import Animal from "./Animal";

export default class AnimalManagement {

    getWinner(animals: Animal[]) {
        let temp: Animal = animals[0];
        animals.forEach(animal => {
            if (animal.getSpeed() > temp.getSpeed()) {
                temp = animal;
            }
        });
        return temp;
    }
}