// 7. Classes Abstratas
// O que são?
// Classes abstratas são classes que não podem ser instanciadas diretamente. 
// Elas são usadas como base para outras classes, fornecendo uma estrutura ou 
// esqueleto que outras classes devem seguir. 
// Uma classe abstrata pode ter métodos abstratos e concretos.

// Métodos abstratos: São métodos que são declarados na classe abstrata, 
// mas não têm implementação. Eles devem ser implementados nas subclasses que herdam da classe abstrata.

// Métodos concretos: São métodos que têm uma implementação na classe abstrata e podem ser usados pelas subclasses.

// EXEMPLO 01:

abstract class Animal {
  abstract makeSound(): void; // Método abstrato, obriga todas as classes filhas a implementar esse metodo!

  move(): void {
    console.log('Moving...');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Woof! Woof!');
  }
}

const myDog = new Dog();
myDog.makeSound(); // Saída: Woof! Woof!
myDog.move(); // Saída: Moving...

// const myAnimal = new Animal(); // Erro: Não é possível instanciar uma classe abstrata


// Explicação:
// A classe Animal é abstrata e contém um método abstrato makeSound() e um método concreto move().
// A classe Dog herda de Animal e é obrigada a implementar o método makeSound().
// Tentativas de instanciar diretamente a classe Animal resultariam em erro, pois ela é abstrata.

// EXEMPLO 02:

abstract class Shape {
  abstract area(): number; // Método abstrato
  abstract title(): void
  describe(): void {
    console.log('This is a shape.');
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super(); // SUPER INIVIA O METODO CONSTRUCTOR DA CLASSE PAI
    this.width = width;
    this.height = height;
  }
  title() {
    console.log('METHODO ABSTRADO')
  }
  area(): number {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.area()); // 200
