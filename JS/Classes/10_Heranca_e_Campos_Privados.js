// 10. Classes com Herança e Campos Privados
// Combinar herança com campos privados pode ser um desafio, mas é possível em JavaScript.

class Employee {
  #salary;

  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }

  getSalary() {
    return this.#salary;
  }
}

class Manager extends Employee {
  #bonus;

  constructor(name, salary, bonus) {
    super(name, salary);
    this.#bonus = bonus;
  }

  getTotalCompensation() {
    return this.getSalary() + this.#bonus;
  }
}

const manager = new Manager('John Doe', 50000, 10000);
console.log(manager.getTotalCompensation()); // 60000


//   Aqui, a classe Manager herda de Employee, e ambas utilizam campos privados para manter a encapsulação dos valores.

