export default class Employee {

    // property definition
    protected salary: number;

    constructor(salary: number){
        this.salary = salary;
    }

    // SETTER
    setSalary(salary:number){
        this.salary = salary;
    }

    // getter
    getSalary(){
        return this.salary
    }
}