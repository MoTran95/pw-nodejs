// const returnedValue = asyncFunc01('param01');
// console.log(returnedValue);

// Thenable
asyncFunc01('praram1')
    .then(function (returnedValue1) {
        return asyncFunc02(returnedValue1);
    })
    .then(function (returnedValue2) {
        console.log(returnedValue3);

    })

function asyncFunc01(param1) {
    console.log(`Processing param: ${param1}`);
    // Wrap asynchomouns function into promise
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnedValue = 'asynFunc01 ' + param1;
            resolve(returnedValue);
        }, 1000);
    });


}
function asyncFunc02(param2) {
    console.log(`Processing param: ${param2}`);
    // Wrap asynchomouns function into promise
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnedValue = 'asynFunc01 ' + param2;
            resolve(returnedValue);
        }, 2000);
    });


}
function asyncFunc03(param3) {
    console.log(`Processing param: ${param3}`);
    // Wrap asynchomouns function into promise
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnedValue = 'asynFunc01 ' + param3;
            resolve(returnedValue);
        }, 3000);
    });


}