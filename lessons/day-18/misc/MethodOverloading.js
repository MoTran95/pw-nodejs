class MethodOverloading {

    // JS: Rest parameter 

    static add(factor, sub, ...nums) {
        return nums.map(value => (value * factor) - sub);
    }

    static divide(a, b) {
        if (arguments.length !== 2) {
            throw new Error("Must provide 2 params!");
        }
        if (b === 0) {
            throw new Error(" Can't divide by zero!");
        }
        return a / b;
    }
}
module.exports = {MethodOverloading};

const result = MethodOverloading.divide(4, 0);
console.log(`Result: ${result}`);

let utilObj = new MethodOverloading();
utilObj.add(1, 2, 3);