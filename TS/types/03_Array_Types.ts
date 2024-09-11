{
    function some(number: number[]): number {
        const total: number = number.reduce((prev, current) => {
            return prev += current
        }, 0)
        return total
    }
    some([1, 2, 3, 4]);

    function mult(number: Array<number>): number {
        const total: number = number.reduce((prev, current) => {
            return prev *= current
        }, 0)
        return total
    }
    mult([1, 2, 3]);

    // 1. Array de Tipos Específicos - notação de tipo Tipo[]
    let numbers: number[] = [1, 2, 3, 4, 5];
    let names: string[] = ["Alice", "Bob", "Charlie"];

    // 2. Array com Tipos Múltiplos
    const data: [string, number, boolean] = ['Alice', 30, true]

    // 3. Array com Tipos Genericos - rray<T>, onde T é o tipo dos elementos do array
    let numbersGenerics: Array<number> = [1, 2, 3, 4, 5, 6, 7]
    let namesGenerics: Array<string> = ["Alice", "Bob", "Charlie", 'joao', 'pedro']

    // 4. Arrays de Objetos INTERFACE
    interface PeopleArrayI {
        name: string;
        age: number;
    }
    const peopleArrayI: PeopleArrayI[] = [{
        name: "Alice",
        age: 30,
    }, {
        name: "Bob",
        age: 35,
    }]
    // 4. Arrays de Objetos TYPES
    type PeopleArrayT = {
        name: string;
        age: number;
    }
    const peopleArrayT: PeopleArrayT[] = [{
        name: "Charlie",
        age: 34,
    }, {
        name: "joao",
        age: 32,
    }]

    // 6. Arrays de Tuplas com Tipos Variáveis
    type TuplaType = [string, ...number[]]
    const exemple: TuplaType = ['string', 1, 2, 3, 4, 5, 6, 7, 8]

    // 7. Arrays com Propriedades Adicionais
    interface ArrayNewProps extends Array<number>{
        description?: string
    }
    const numbersNewDescription: ArrayNewProps = [1,2,3,4,5]

    numbersNewDescription.description = 'Descricao do array'
    console.log(numbersNewDescription)
}