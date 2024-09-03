// 4. Parâmetros Opcionais e Padrões
// TypeScript permite que você defina parâmetros opcionais e valores padrão em métodos e constructors.

export default class User {
    name: string;
    age?: number; // Parâmetro opcional

    constructor(name: string, age: number = 18) { // Valor padrão
        this.name = name;
        this.age = age;
    }

    getInfo(): string {
        return this.age
            ? `${this.name} is ${this.age} years old.`
            : `${this.name} age is not specified.`;
    }
}

const user1 = new User('Alice');
const user2 = new User('Bob', 25);

console.log(user1.getInfo()); // Alice is 18 years old.
console.log(user2.getInfo()); // Bob is 25 years old.

