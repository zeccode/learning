// 1. Propriedades e Métodos de Instância

// As propriedades e métodos que são definidos diretamente dentro da classe (como vimos no exemplo anterior)
// pertencem a cada instância da classe. Cada instância criada terá sua própria cópia dessas propriedades e métodos.

class Person {
    constructor(name, age) {
        this.name = name; // Propriedade de instância
        this.age = age;   // Propriedade de instância
    }

    greet() { // Método de instância
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.greet(); // Hello, my name is Alice and I am 25 years old.
person2.greet(); // Hello, my name is Bob and I am 30 years old.
