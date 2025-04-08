let input = "Ala ma kota, kot ma Alę.";

function countWords(input) {
    input = input.toLowerCase();
    input = input.replace(',', '');
    input = input.replace('.', '');
    input = input.replace('?', '');
    input = input.replace('!', '');
    input = input.replace(':', '');

    let words = input.split(" ");
    const countedWords = new Map();

    for (let word of words) {
        if (countedWords.has(word)) {
            countedWords.set(word, countedWords.get(word) + 1);
        } else {
            countedWords.set(word, 1);
        }
    }

    return countedWords;
}

console.log(countWords(input));