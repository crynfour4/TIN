const products = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics", discount: 10 },
    { id: 2, name: "Phone", price: 800, category: "Electronics", discount: 5 },
    { id: 3, name: "Chair", price: 200, category: "Furniture", discount: 0 },
    { id: 4, name: "Table", price: 350, category: "Furniture", discount: 15 },
    { id: 5, name: "Headphones", price: 150, category: "Electronics", discount: 20 }
];

// Funkcje podstawowe
function groupBy(key, collection) {
    return collection.reduce((result, item) => {
        const keyValue = item[key];

        if (!result[keyValue]) {
            result[keyValue] = [];
        }

        result[keyValue].push(item);

        return result;
    }, {});
}

function sumBy(key, collection) {
    return collection.reduce((sum, item) => sum + item[key], 0)
}

function maxBy(key, collection) {
    return collection.reduce((max, item) => item[key] > max[key] ? item : max, collection[0])
}

function minBy(key, collection) {
    return collection.reduce((max, item) => item[key] < max[key] ? item : max, collection[0])
}

function sortBy(key, collection) {
    return collection.sort((a, b) => b[key] - a[key]);
}

function countBy(predicate, collection) {
    // Twoja implementacja
}

// Funkcje złożone
function getPopularCategories(products, limit) {
    // Twoja implementacja
}

function getDiscountedProducts(products, threshold) {
    // Twoja implementacja
}

function getProductStats(products) {
    // Twoja implementacja
}

//console.log(sumBy("price", products));
//console.log(maxBy("discount", products));
//console.log(minBy("discount", products));
//console.log(groupBy("category", products));
//console.log(sortBy("price", products));