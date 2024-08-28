export default class AnimalManagement {
    getWinner(animals: number[]) {
        let temp = 0;
        animals.forEach((animal, index) => {
            if (animal > animals[temp]) {
                temp = index;
            }
        });
        return temp;
    }
}