let products = [
    {produkt: 'Laptop', cena: 5000},
    {produkt: 'Telefon', cena: 3000},
    {produkt: 'Słuchawki', cena: 250}
];

const findMostExpensiveProduct = (array) => {
    return array.reduce((max, item) => item.cena > max.cena ? item : max, array[0])
}

console.log(findMostExpensiveProduct(products))