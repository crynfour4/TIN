class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I live in ${this.city}.`);
    }

    canVote () {
        if (this.age >= 18) {
            console.log("This person can vote.");
            return true;
        } else {
            console.log("This person cannot vote.");
            return false;
        }
    }

    changeCity (newCity) {
        console.log(`Old city: ${this.city}`);
        this.city = newCity;
        console.log(`New city: ${this.city}`);
    }
}