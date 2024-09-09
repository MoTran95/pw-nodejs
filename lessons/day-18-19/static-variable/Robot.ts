export default class Robot {

    // Class varible - shared value 
    static id = 0;

   // private robotName: string;

    constructor (){
        Robot.id++;
    }

    getId(){
        console.log();
        return Robot.id;
    }
    // class method 
    static doSomething(){
        //console.log(this.robotName);
        
    }

}

const meo = new Robot();
const lulu = new Robot();
//Robot.doSomething()
console.log(meo.getId());
console.log(lulu.getId());

