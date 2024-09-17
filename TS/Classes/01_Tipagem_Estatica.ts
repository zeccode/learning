{
  // Uma das maiores vantagens do TypeScript é a capacidade de adicionar 
  // tipos às propriedades, métodos, parâmetros e valores de retorno. 
  // Isso ajuda a detectar erros durante o tempo de compilação.

  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet(): string {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  const person = new Person('Alice', 25);
  console.log(person.greet());

  // Aqui, name é uma string, e age é um number. Se tentarmos passar valores de tipos errados, TypeScript gerará um erro.

}