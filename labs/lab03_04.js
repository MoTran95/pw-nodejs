let arr01 = [1, 12, 16, 28, 34];
let arr02 = [1, 13, 16, 27, 99];
let i = 0;
let j = 0;
let mergedArr = [];
for (let k = 0; k < arr01.length + arr02.length; k++) {
    if (arr01[i] < arr02[j]) {
        mergedArr[k] = arr01[i];
        i++;
    } else {
        mergedArr[k] = arr02[j];
        j++;
    }
}

console.log(`Merged array is ${mergedArr}`);
