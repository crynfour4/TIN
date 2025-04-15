// Główne funkcje kalkulatora
function operation(fn) {
    return function (value) {
        return fn(value);
    }
}

function compose(...operations) {
    return function (value) {
        return operations.reduce((result, operation) => operation(result), value);
    }
}

function calculate(operation, value) {
    return operation(value);
}

function sequence(...operations) {
    return function (value) {
        return operations.reduce((result, operation) => operation(result), value);
    }
}

// Podstawowe operacje matematyczne
function add(x) {
    return function (value) {
        return value + x;
    }
}

function subtract(x) {
    return function (value) {
        return value - x;
    }
}

function multiply(x) {
    return function (value) {
        return value * x;
    }
}

function divide(x) {
    return function (value) {
        return value / x;
    }
}

function power(x) {
    return function (value) {
        return Math.pow(value, x);
    }
}

function negate() {
    return function(value) {
        return -value;
    }
}

function sum() {
    return function (numbers) {
        return numbers.reduce((sum, curr) => sum + curr, 0);
    }
}


// Tworzenie podstawowych operacji
const addFive = add(5);
const multiplyByTwo = multiply(2);
const square = power(2);

// Komponowanie operacji
const addFiveAndDouble = compose(addFive, multiplyByTwo);
const complexOperation = sequence(addFive, multiplyByTwo, square);

// Wykonywanie operacji
console.log(calculate(addFiveAndDouble, 10)); // (10 + 5) * 2 = 30
console.log(calculate(complexOperation, 10)); // ((10 + 5) * 2)^2 = 900

// Operacje na tablicach
const numbers = [1, 2, 3, 4, 5];
const doubleAll = operation(arr => arr.map(x => x * 2));
const sumAll = sum();

console.log(calculate(doubleAll, numbers)); // [2, 4, 6, 8, 10]
console.log(calculate(sequence(doubleAll, sumAll), numbers)); // 30