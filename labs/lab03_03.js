let intArr = [1, 2, 5, 4, 3];
let temp;
for(let i = 0; i < intArr.length; i++){
    for (let j = i +1; j < intArr.length; j++){
        if(intArr[i] > intArr[j] ){
            temp = intArr[j];
            intArr[j] = intArr[i];
            intArr[i] = temp;
        }
    }
}

console.log(`Array is ${intArr}`);

