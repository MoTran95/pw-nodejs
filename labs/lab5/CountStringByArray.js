let mystring = "Hello ban, tui ten Teo, ban cung cung ten Teo luon ah";

let words = mystring.replace(/[,.]/g, '').split(' ')

let result = countAllWords(words);
function countAllWords(myArray){
    let tempArray = [];
    for (const iterator of myArray) {
        if(tempArray.indexOf(iterator)===-1){
            console.log(`${iterator}`,countWordInArray(iterator,myArray));
            tempArray.push(iterator); 
        }
    }
}
function countWordInArray(word, myArray ){
    let count = 0;
    for (const currentWord of myArray) {
        if(word === currentWord){
            count++;
        }
    }
    return count;
}