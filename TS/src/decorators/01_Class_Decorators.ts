function decorator<T extends new (...args: any) => any>(target: T): T {
    console.log('Corpo da function decorarion');
    return class extends target {
        constructor(...args: any[]) {
            super(...args); // Agora vai exibir o nome do animal
            console.log(this.name);
        }
    };
}

@decorator
class AnimalDecorator {
    constructor(public name: string, public cor: string) {
        console.log('Class AnimalDecorator')
    }
}

const animalDecorator = new AnimalDecorator('rex', 'caramelo');