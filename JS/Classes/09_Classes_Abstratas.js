// 9. Classes Abstratas
// JavaScript não tem suporte nativo para classes abstratas como outras linguagens de programação, 
// mas podemos simular esse comportamento criando uma classe que não deve ser instanciada diretamente, 
// mas serve de base para outras classes.

class Vehicle {
  constructor() {
    if (new.target === Vehicle) {
      throw new Error('Cannot instantiate an abstract class.');
    }
  }

  move() {
    throw new Error('Method "move()" must be implemented.');
  }
}

class Car extends Vehicle {
  move() {
    console.log('Car is moving');
  }
}

const myCar = new Car();
myCar.move(); // Car is moving

const myVehicle = new Vehicle(); // Erro: Cannot instantiate an abstract class.

//   Neste exemplo, Vehicle atua como uma classe abstrata, e Car como uma classe concreta que implementa o método move().