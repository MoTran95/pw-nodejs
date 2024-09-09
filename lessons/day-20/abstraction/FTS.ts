import Employee from "./Employee";

export class FTE extends Employee {
    constructor() {
        super(4000);
    }
    printSalary() {
        console.log(this.salary);

    }
    // getter
    getSalary(): number {
        return 10000;
    }
    getSupportSalary(): number {
        return 1000;
    }

}