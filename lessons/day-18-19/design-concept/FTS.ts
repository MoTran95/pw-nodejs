import Employee from "./Employee";

export class FTE extends Employee {
    constructor() {
        super(4000);
    }
    printSalary(){
        console.log(this.salary);
        
    }
   
    // getSupportSalary(){
    //     return 1000;
    // }

    // Strongly force IS-A relationship -> Abstraction

}