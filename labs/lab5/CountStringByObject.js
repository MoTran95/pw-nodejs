let mystring = "Hello ban, tui ten Teo, ban cung cung ten Teo luon ah";

let words = mystring.replace(/[,.]/g, '').split(' ');

let result = countWords(words);
console.log(`The result ${JSON.stringify(result)}`);


function countWords(yourWords) {
    let dict = {};
    for (const currentWord of yourWords) {

        if (!dict[currentWord]) {
            dict[currentWord] = 0;
        }

        dict[currentWord]++;
    }
    return dict;
}