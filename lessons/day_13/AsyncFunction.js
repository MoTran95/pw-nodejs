console.log('1. Chay toi nha thang teo');
setTimeout(callbackFunc.bind({sth: "Hello"}, 'Teo'), 1000);
console.log('3. Chay toi quan ca phe');

function callbackFunc(name){
    console.log(this.sth);
    console.log(`2.${name}  oi, uong ca phe khong? `);
}

