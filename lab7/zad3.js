const double = x => x * 2;
const add5 = x => x + 5;
const toString = x => String(x);

function compose(...functions) {
    return function (value) {
        return functions.reduceRight((result, fn) => fn(result), value);
    }
}

let result = compose(toString, add5, double)(2);

console.log(result);