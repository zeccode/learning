// 3. Herança
// Herança é um conceito que permite criar novas classes baseadas em classes existentes, facilitando o reuso de código. 
// A palavra-chave extends é usada para criar uma subclasse que herda de uma superclasse.

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Chama o constructor da superclasse
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // Rex barks.

// Nesse exemplo, Dog herda de Animal. 
// A função super é usada para chamar o constructor da classe pai (Animal),
// garantindo que a propriedade name seja inicializada.