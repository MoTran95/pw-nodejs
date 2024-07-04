// Function(huong ngoai, khong dinh toi object), Method(Object(huong noi))
// DRY: Don't repeat yourself
// Single Reponsibility: Tinh don nhiem
// Function name: bat dau dong tu
//camelCase
//PascalCase
// Declaration Method 01: Function Declaration | Hoisting

// let myName = "Ti";
// console.log(myName);

// function functionName (params){
//     var myName = "Teo";
// }
// Declaration Method 01: Function  Hoisting
let returnValue = functionName();
console.log(returnValue);
function functionName (){
    return 1;
}
// Declaration Method 02: Function expression | NOT hoisting

let addNumber = function (first, second){
    return first + second;
}
addNumber(1,2);