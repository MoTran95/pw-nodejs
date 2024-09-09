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
    getSupportSalary(){
        return 1000;
    }
     //Overriding // Run time where different class 
    // Complile time// overloading where the same class 
    /** 
     * Is a relationship parent- child between two class has relationship inherirant
     * Method signature Same: name of method, parameter(quanlity, types)
     * Overloading in the same class
     * Class member has class method and class static
     * Class static method is not overiding
     * static variable can overide
     */
}