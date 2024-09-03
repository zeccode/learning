// 13. Singleton Pattern
// O Singleton é um padrão que garante que uma classe tenha somente uma instância e 
// fornece um ponto global de acesso a essa instância.

class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.data = {};
        Singleton.instance = this;
    }

    getData() {
        return this.data;
    }

    setData(key, value) {
        this.data[key] = value;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

instance1.setData('name', 'Michel');

console.log(instance2.getData().name); // Michel
console.log(instance1 === instance2); // true

//   Aqui, Singleton garante que instance1 e instance2 sejam a mesma instância.

