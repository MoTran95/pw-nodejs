export default class Animal {
    private name: string;
    private maxspeed: number;

    constructor(name: string, maxspeed: number) {
        this.name = name;
        this.maxspeed = maxspeed;
    }
    getName() {
        return this.name;
    }
    getSpeed() {
        return this.maxspeed;
    }
}