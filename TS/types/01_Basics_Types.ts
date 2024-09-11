{
    const name: string = 'meu nome';
    const lastName: string = 'meu sobrenome';
    const age: number = 30;
    // OBS.: type number pode ser numeros inteiros, float, hexadecimais, binario e etc. Ou seja, engloba qualquer formato numerico 
    const isRegister: boolean = true;
    const raio: bigint = 10n
    const simbolo: symbol = Symbol('um simbolo'); // Valores únicos e imutáveis

    const phone: any = '(11) 9 9999-0000'
    // Any pode ser entendido tipagem a dinamica padrao do JS
    // (como se estivéssemos temporariamente "anulando" o TypeScript).

    const cellphone: unknown = '(11) 9 9999-0000'
    // Também pode ser entendido como Dinamico, porem com uma camada a mais, 
    // Pois exige a verificacao do tipo ao usa-lo. (USANDO O TYPE GUARD)

    const fullName: string[] = [name, lastName]

    function introduce(name: string, age: number): void {
        console.log(`Olá meu nome é ${name} e tenho ${age} anos!`)
    } // usamos para tipar um uma function que nao tem retorno

    introduce(name, age)

    // O TYPE GUARD
    function typeGuardfn(params: unknown): string {
        return typeof params === 'string' ? params.toUpperCase() : 'error'
    }
    console.log(typeGuardfn('teste'))
}
