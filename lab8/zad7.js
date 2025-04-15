class Animal {
    constructor(name) {
        this.name = name;
    }

    speak () {
        console.log("Jestem zwierzęciem.");
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    fetch (item) {
        console.log(`${this.name} aportuje ${item}.`);
    }
}

let Pies = new Dog('Alex');
Pies.speak();
Pies.fetch('coś');