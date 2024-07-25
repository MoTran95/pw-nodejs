let intArr = [1, 2, 5, 4, 3];
let maxNumber = intArr[0];
let minNumber = intArr[0];
for(let i = 0; i < intArr.length; i++){
    if(intArr[i] > maxNumber){
        maxNumber = intArr[i];
    }
}
for(let i = 0; i < intArr.length; i++){
    if(intArr[i] < minNumber){
        minNumber = intArr[i];
    }
}
console.log(`Max number is ${maxNumber}`);
console.log(`Min number is ${minNumber}`);
