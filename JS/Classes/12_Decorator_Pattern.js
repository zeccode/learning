// 12. Decorator Pattern
// O padrão de design decorator permite adicionar comportamentos ou funcionalidades
//  a objetos de forma dinâmica, mantendo a responsabilidade única de cada classe.

class Coffee {
    cost() {
        return 5;
    }
}

class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 2;
    }
}

class SugarDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 1;
    }
}

let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);

console.log(coffee.cost()); // 8

//   Nesse exemplo, MilkDecorator e SugarDecorator adicionam funcionalidades extras ao objeto Coffee de maneira flexível.