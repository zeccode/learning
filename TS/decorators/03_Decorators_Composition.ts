{
    interface ConstructorInt {
        new(...args: any[]): any
    }

    function firstDecorator(target: ConstructorInt) {
        console.log(`first Decorator`);
        return class extends target {
            constructor(...args: any[]) {
                super(...args); // Agora vai exibir o nome do animal
                console.log(`Nome do Animal: ${this.name}`);
            }
        };
    }

    function secondDecorator(target: ConstructorInt) {
        console.log('second Decorator')
        return target
    }

    @firstDecorator
    @secondDecorator
    class Animal {
        constructor(public name: string, public cor: string) {
            console.log('Class Animal')
        }
    }

    const animal = new Animal('rex', 'caramelo');
}