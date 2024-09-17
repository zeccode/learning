{
    type mapStringsCallbakType = (item: string) => string

    let names: Array<string> = ["Alice", "Bob", "Charlie", 'joao', 'pedro']

    function mapStrings(array: string[], callbackfn: mapStringsCallbakType): string[] {
        const newArray: string[] = []
        for (let i = 0; i < array.length; i++) {
            newArray.push(callbackfn(array[i]))
        }
        console.log(newArray)
        return newArray
    }
    mapStrings(names, item => item.toUpperCase())
    // 1. Tipando os parâmetros e o retorno da função
    function sum(a: number, b: number, c: number = 10): number {
        return a + b + c
    }

    // 2. Funções que não retornam valor (void)
    const logMensage = (msg: string): void => {
        console.log(msg)
    }

    // 3. Funções com tipos complexos (usando interfaces ou tipos)
    type OperationType = (x: number, y: number) => number
    const multp: OperationType = (x, y) => {
        return x * y
    }

    // 4. Sobrecarga de funções
    // Quando uma funcao pode aceitar diferentes tipos de parametros e retornos diferentes.
    function process(valor: string): string
    function process(valor: number): number
    function process(valor: unknown): unknown {
        if (typeof valor === 'string') return valor.toUpperCase()
        if (typeof valor === 'number') return valor * valor
    }
    console.log(process(5))

    type AdderType = {
        (x: number): number;
        (x: number, y: number): number;
        (x: number, y: number, ...args: Array<number>): number;
    }
    
    const adder: AdderType = (x: number, y?:number, ...args: number[]) => {
        if (args) return args.reduce((s, v) => s + v, x + (y || 0))
        return x + (y || 0)
    }

    console.log(adder(3, 6, 9,5,4,3,2))
}