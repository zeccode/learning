function methodDecoration(
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor): PropertyDescriptor | void {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
        console.log(`chamando ${propertyKey} com os argumentos: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

class CalculatorDecorator {
    // Decorator aplicado ao método 'add'
    // A seguir Ignoramos o erro que o TS aponta, pois é uma funcionalidade ainda nao Homologada 
    // @ts-ignore
    @methodDecoration
    add(a: number, b: number): number {
        return a + b;
    }
}

const calculatorDecorator = new CalculatorDecorator();
console.log(calculatorDecorator.add(2, 3)); 