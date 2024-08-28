export default class Animal {
    private name: string;
    private speed: number;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.speed = Math.floor(Math.random() * maxSpeed) + 1;
    }
    getName() {
        return this.name;
    }
    getSpeed() {
        return this.speed;
    }
}