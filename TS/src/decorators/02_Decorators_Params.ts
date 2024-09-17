function decoratorParams(firstParams: string, secParams: string) {

    // O CLOSURE NOS PERMITE USAR ESSES PARAMETROS NAS FUNCTIONS DESCENDENTES.
    return function <T extends new (...args: any) => any>(target: T): T {
        console.log(`Corpo da function decorarion - ${firstParams} Parametro`);
        return class extends target {
            constructor(...args: any[]) {
                super(...args); // Agora vai exibir o nome do animal
                console.log(`Nome do Animal: ${this.name} - ${secParams} Parametro`);
            }
        };
    }
}

@decoratorParams('Primeiro', 'Segundo')
class AnimalDecoratorParams {
    constructor(public name: string, public cor: string) {
        console.log('Class Animal')
    }
}

const animalDecoratorParams = new AnimalDecoratorParams('rex', 'caramelo');