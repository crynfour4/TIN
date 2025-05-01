function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes noise.`);
}

function Mammal(name, furColor) {
    Animal.call(this, name);
    this.furColor = furColor;
}

function Dog(name, furColor) {
    Mammal.call(this, name, furColor);
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.fetch = function () {
    console.log(`${this.name} fetches.`)
}

let animal = new Animal('Animal');
animal.speak();
console.log("-----");

let mammal = new Mammal('Mammal', 'black');
mammal.speak();
console.log("-----")

let szarik = new Dog('Szarik', 'black-white');
szarik.speak();
szarik.fetch();
