// CRUD
// Object literal: doi tuong tuong minh

let teo = {
    name: "Teo",
    'my age': 18 
}
// let ti = function(){

// };
// console.log(ti.name);
// // Read: dot notation(dau cham), [] syntax
// console.log(teo.name);
// console.log(teo["my age"]);

// // Update
// teo.name = "Ti";
// teo["my age"] = 20;
// console.log(teo);

// // Destruture
// const{name, [" my name"]: age} = teo;
// console.log(name);
// console.log(age);

// // Delete
// delete teo.name;
console.log(teo);
printUserInfo(teo);
function printUserInfo({name,["my age"]: age}){
    console.log(name);
    console.log(age);
}