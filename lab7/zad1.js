let numbers = [1, 2, 3, 4, 5];

function transformArray(numbers) {
    return numbers.map(n => n % 2 === 0 ? n * 2 : n)
        .map(n => n % 2 === 1 ? n * 3 : n)
        .map(n => n % 5 === 0 ? 'Five' : n);
}

console.log(transformArray(numbers));