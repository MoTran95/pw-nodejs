run();

async function run() {
    const return1 = await asyncFunc01('param1');
    const return2 = await asyncFunc01(return1);
    const return3 = await asyncFunc01(return2);
    console.log(return3);

}

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