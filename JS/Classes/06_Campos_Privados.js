// 6. Campos Privados
// JavaScript introduziu a possibilidade de criar campos privados dentro de uma classe utilizando o prefixo #. 
// Esses campos são totalmente encapsulados e só podem ser acessados dentro da classe.

class Person {
  #ssn; // Campo privado

  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn;
  }

  getSSN() {
    return this.#ssn; // Acessando o campo privado dentro da classe
  }
}

const person = new Person('Alice', '123-45-6789');
console.log(person.name); // Alice
console.log(person.getSSN()); // 123-45-6789
console.log(person.#ssn); // Erro: Tentativa de acesso ao campo privado fora da classe

//   Campos privados são úteis para ocultar informações sensíveis e evitar que sejam manipuladas ou acessadas diretamente.