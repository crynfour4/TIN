let products = [
    {name: 'Coca Cola', cena: 10},
    {name: 'Haribo', cena: 15}
];

const calculateTotalPrice = (array) => {
    return array.reduce((sum, item) => sum + item.cena, 0);
}

console.log(calculateTotalPrice(products));