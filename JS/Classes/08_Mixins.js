// 8. Mixins
// Mixins são uma forma de reutilizar código entre múltiplas classes. 
// Como JavaScript não suporta herança múltipla, mixins permitem a combinação de comportamentos de diferentes classes.

const CanFly = {
  fly() {
    console.log(`${this.name} is flying!`);
  }
};

const CanSwim = {
  swim() {
    console.log(`${this.name} is swimming!`);
  }
};

class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Misturando comportamentos
Object.assign(Animal.prototype, CanFly, CanSwim);

const duck = new Animal('Duck');
duck.fly(); // Duck is flying!
duck.swim(); // Duck is swimming!

//   Neste exemplo, usamos Object.assign 
//   para adicionar métodos de CanFly e CanSwim ao protótipo da classe Animal, 
//   criando uma espécie de herança múltipla.