// 2. Propriedades e Métodos Estáticos

//  Propriedades e métodos estáticos são definidos diretamente na classe, e não em suas instâncias.
//  Eles são chamados na classe em si, e não em instâncias da classe.

class MathOperations {
    static add(x, y) { // Método estático
        return x + y;
    }

    static subtract(x, y) { // Método estático
        return x - y;
    }
}

console.log(MathOperations.add(10, 5));      // 15
console.log(MathOperations.subtract(10, 5)); // 5

// Aqui, add e subtract são métodos estáticos, então você não precisa criar uma instância de MathOperations para usá-los.