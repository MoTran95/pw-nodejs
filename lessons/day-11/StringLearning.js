let myString = " Day la chu trong \"nhay kep\" ";
console.log(myString);

// Length
const strLength = myString.length;
console.log(myString.length);


// Get a character at a position
for(let index = 0; index < strLength; index ++){
   // console.log(myString.charAt(index));
}
// Get rid of spaces at start and end position
// "    something       "
// No change original string
let trimStr = myString.trim();
console.log(trimStr.length);

// Replace
// 
let targetString = "tmomi mnmay gmap mnmhamu 7h ";
let decodedStr =  targetString.replaceAll("m", "");
console.log(decodedStr);

// Regex - > Regular Expression (String Regular Exprission)
// g - global
// i - insensitive (bat ke hoa thuong)
let decodesStrWithReplace = targetString.replace(/m/gi, "");
console.log(decodesStrWithReplace);

// Total cooking time: 200 mins
// DB -> docIdCooking Recipe -> {total: 200, factor: minute} (BE)
// [] 1 tap hop cua cum nao do 

let UiString = "200mins";
let UiStringWithNumber = UiString.replace(/[^0-9]/gi, "");
console.log(UiStringWithNumber);

// backstick -> ' | String template
console.log(`${myString} something else ${UiString}`)

// concat : concatenation noi chuoi
// + 
// .concat()
console.log('Hello, '.concat('how are you?').concat(', how old are you'));

// SubStr
let strTobeCut= 'https://sdetpro.com/';
// inclusive
let startIndex = 0;
// exclusive
let endIndex = 5;
let subStr = strTobeCut.substring(startIndex,endIndex);
console.log(subStr);

// split
console.log(strTobeCut.split('://'));