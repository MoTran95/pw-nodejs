import Employee from "./Employee";

export class Contractor extends Employee {

    constructor() {
        super(5000);
    }
    printSalary(){
        console.log(this.salary);
        
    }
    getSupportSalary(){
        return this.salary;
    }

}