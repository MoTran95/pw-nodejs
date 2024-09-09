import Employee from "./Employee";

export class Contractor extends Employee {

    constructor() {
        super(5000);
    }
    printSalary(){
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