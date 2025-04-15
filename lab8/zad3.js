class Library {
    constructor() {
        this.books = [];
    }

    addBook (title, author) {
        const newBook = {title, author, isAvailable: true};
        this.books.push(newBook);
        console.log(`Added ${title} by ${author} to the library.`)
    }

    borrowBook(title) {
        const book = this.books.find(book => book.title === title);

        if (!book) {
            console.log("There's no such book.");
            return;
        }

        if (book.isAvailable === false) {
            console.log("This book is currently not available.");
        } else {
            book.isAvailable = false;
            console.log("You have borrowed this book.");
        }
    }

    returnBook(title) {
        const book = this.books.find(book => book.title === title);

        if (!book) {
            console.log("There's no such book.");
            return;
        }

        if (book.isAvailable === true) {
            console.log("This book is already in the library.");
        } else {
            book.isAvailable = true;
            console.log("You have returned this book.");
        }
    }
}

// let library = new Library();
// library.addBook("The Witcher", "Andzej Sapkowski");
// library.describe();
// library.borrowBook("Lord of the Rings");
// library.borrowBook("The Witcher");
// library.describe();
// library.borrowBook("The Witcher");
// library.returnBook("Lord of the Rings");
// library.returnBook("The Witcher");
// library.returnBook("The Witcher");