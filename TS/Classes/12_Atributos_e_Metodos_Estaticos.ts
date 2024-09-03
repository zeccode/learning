export default class Pessoa {
    static ageDefault = 0
    static CPFDefault = ''

    constructor(
        public name: string,
        public lastName: string,
        public age: number | null,
        public CPF: string | null,
    ) { }

    metodoTradicionao(): void {
        if(this.CPF) Pessoa.CPFDefault = this.CPF
        if(this.age) Pessoa.ageDefault = this.age
        console.log(`Pessoa.ageDefault: ${Pessoa.ageDefault}`)
        console.log(`Pessoa.CPFDefault: ${Pessoa.CPFDefault}`)
    }
    // METODO STATICO QUE RETORNA UMA NOVA PESSOA, USANDO A PROPRIA CLASS, 
    // ESSA TECNICA É CHAMADA FACTORY METHOD
    static metodoStatico(name: string, lastName: string): Pessoa {
        return new Pessoa(name, lastName, this.ageDefault, this.CPFDefault)
    }
}

const joaoznho = new Pessoa('Joao', 'Andrade', 32, '000.000.000-2')
const aninha = new Pessoa('Aninha', 'Andrade', 25, '000.000.000-5')
console.table(joaoznho)
console.table(aninha)

const pedrinho = Pessoa.metodoStatico('Pedrinho', 'Andrade')
console.table(pedrinho)
joaoznho.metodoTradicionao()
aninha.metodoTradicionao()