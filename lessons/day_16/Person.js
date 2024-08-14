// Template - Data model - user defined data 
class Person {
    
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    // Setters
    set name(name){
        this._name = name;
    }
    // getter
    get name(){
        return this._name;
    }
}
let teo = new Person("Teo",18);
console.log(teo);//{}

// Invoke setter
teo.name = "Ti";
console.log(teo.name);//{}


//1. Init property values when creating object - > constructor
//2. Setter(s) - methods: Set value for properties  
