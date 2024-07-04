/**
 * < 18: khong ban
 * 18 -> 55 Unlimited!
 * 56 -> : 2 chai!
 * 
 * 
 */
const readline = require('readline-sync');
let clientAge = Number(readline.question('Your age:'));

if(clientAge < 18){
    console.log("khong ban!");
    if(clientAge < 12){
        console.log("calling 911...");
    }
//} else if (clientAge >= 18 && clientAge <= 55){
} else if ( clientAge <= 55){ // tuong duong o tren, nguoi ta uu tien viet de ngan gon
    console.log('Unlimited');
} else {
    console.log('2 chai!');
}
/**
 *  true && true => true
 * true && false ->  false
 * false && false -> false
 *  false && true -> true
 */
/**
 *  true || true => true
 * true || false ->  true
 * false || false -> false
 *  false || true -> true
 */