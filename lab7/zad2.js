let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

function countWordFrequency(words) {
    return words.reduce((sum, currentValue) => {
        let normalizedWord = currentValue.toLowerCase();

        sum[normalizedWord] = (sum[normalizedWord] || 0) + 1;
        return sum;
    }, {});
}

console.log(countWordFrequency(words));