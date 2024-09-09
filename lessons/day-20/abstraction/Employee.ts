export default abstract class Employee {

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
    abstract getSalary(): number;
    abstract getSupportSalary():number;
}