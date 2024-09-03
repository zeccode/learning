// 11. Classe como Parâmetro de Função
// Em JavaScript, classes podem ser passadas como parâmetros para funções, permitindo a criação 
// dinâmica de instâncias ou a personalização de classes.

function createInstance(ClassType, ...args) {
  return new ClassType(...args);
}

class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}

const user = createInstance(User, 'Michel');
user.sayHello(); // Hello, Michel!

//   Aqui, createInstance recebe uma classe como parâmetro e cria uma instância dessa classe dinamicamente.  
