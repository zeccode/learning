//  Em JavaScript, uma classe é uma estrutura que permite criar objetos com propriedades e métodos. 
//  Ela serve como um molde ou blueprint para criar múltiplos objetos que compartilham o mesmo comportamento e características.
//  Antes da introdução das classes em ES6 (ECMAScript 2015), JavaScript usava funções construtoras e protótipos para criar objetos. 
//  As classes foram introduzidas como uma forma mais simples e legível de trabalhar com objetos e herança.
//  Aqui está um exemplo básico de uma classe em JavaScript:

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Método
    startEngine() {
        console.log(`${this.brand} ${this.model} is starting...`);
    }

    // Método
    getCarInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

// Criando uma instância da classe Car
const myCar = new Car('Toyota', 'Corolla', 2020);

// Usando métodos da classe
console.log(myCar.getCarInfo()); // Toyota Corolla (2020)
myCar.startEngine(); // Toyota Corolla is starting...

//   Principais conceitos:

//  Constructor: É um método especial para inicializar objetos criados a partir de uma classe. Ele é chamado automaticamente quando uma nova instância da classe é criada.
//  Métodos: São funções definidas dentro de uma classe que podem ser usadas pelos objetos criados a partir dela.
//  Herança: As classes em JavaScript permitem que você crie subclasses que herdam propriedades e métodos de outras classes, facilitando o reuso de código.
//  Essa abordagem orientada a objetos facilita a organização do código, especialmente em projetos maiores.