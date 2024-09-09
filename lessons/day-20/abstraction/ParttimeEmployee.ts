import Employee from "./Employee";

export class ParttimeEmployee extends Employee {

    constructor (){
        super(1000);
    }
    // getter
    getSalary(): number {
        return 10000;
    }
    getSupportSalary(): number {
        return 1000;
    }


}