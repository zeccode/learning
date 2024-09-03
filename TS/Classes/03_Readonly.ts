// 3. Readonly
// O modificador readonly é usado para tornar propriedades imutáveis após a inicialização. 
// Elas podem ser atribuídas apenas no momento da declaração ou no constructor da classe.

export default class Car {
    readonly brand: string;
    readonly model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    changeBrand(newBrand: string) {
        // this.brand = newBrand; // Erro: brand é readonly
    }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.brand); // Toyota
