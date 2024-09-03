// 11. Union Types e Type Guards
// TypeScript permite que você defina propriedades e métodos que aceitem 
// múltiplos tipos, usando union types e type guards.


class ResponseCl {
    constructor(public data: string | number) { }

    print() {
        if (typeof this.data === 'string') {
            console.log(`String data: ${this.data}`);
        } else {
            console.log(`Number data: ${this.data}`);
        }
    }
}

const response = new ResponseCl('Success');
response.print(); // String data: Success

//   Essas funcionalidades tornam o desenvolvimento com classes em TypeScript mais robusto, 
//   seguro e flexível, proporcionando uma experiência de desenvolvimento mais orientada a 
//   tipos e menos propensa a erros.