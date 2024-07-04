let intArr = [1, 2, 3, 4, 5];
let countEventNumber = 0;
let countOddNumber
for(let i = 0; i < intArr.length; i++){
    if(intArr[i] % 2 == 0){
        countEventNumber ++;
    }
}
countOddNumber = intArr.length - countEventNumber;
console.log(`Total event number ${countEventNumber}`);
console.log(`Total odd number ${countOddNumber}`);