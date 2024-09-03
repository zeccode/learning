// 5. Interfaces e Implementações
// Interfaces permitem definir contratos que as classes devem seguir.
// Isso ajuda a garantir que uma classe tenha certas propriedades e métodos com tipos específicos.

interface Animal {
    name: string;
    makeSound(): void;
}

export default class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log('Woof! Woof!');
    }
}

const myDog = new Dog('Rex');
myDog.makeSound(); // Woof! Woof!


// Neste exemplo, a classe Dog implementa a interface Animal, 
// garantindo que ela tenha uma propriedade name e um método makeSound.
