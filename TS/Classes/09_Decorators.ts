// 9. Decorators
// O que são?
// Decorators são uma funcionalidade experimental em TypeScript que permite adicionar metadados, 
// modificar ou substituir o comportamento de classes, métodos, propriedades ou parâmetros.
// Eles são uma espécie de “função wrapper” que pode ser aplicada a elementos 
// da classe para estender ou alterar seu comportamento.
// Decorators são amplamente usados em frameworks como Angular para adicionar funcionalidades de forma declarativa.

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor | void {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`chamando ${propertyKey} com os argumentos: ${JSON.stringify(args)}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Calculator {
  @log // Decorator aplicado ao método 'add'
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
console.log(calculator.add(2, 3)); // Saída: chamando add com os argumentos: [2,3] \n 5

//   Explicação:
// O decorator log é uma função que envolve o método original add e adiciona um comportamento extra: registrar no console os argumentos passados ao método.
// Quando o método add é chamado, o decorator log intercepta a chamada, imprime os argumentos, e então chama o método original.
