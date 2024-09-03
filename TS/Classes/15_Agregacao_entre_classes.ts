// Associação entre classes por Agregação: 

// Agregação é um tipo de associação entre classes na Programação Orientada a Objetos (POO) 
// onde uma classe ("todo") contém referências a outras classes ("partes"). 
// No entanto, ao contrário da composição, as partes podem existir 
// independentemente do todo. Isso significa que o ciclo de vida das 
// partes não depende do ciclo de vida do todo.

// Exemplo de Agregação
// Vamos considerar um exemplo com as classes Departamento e Funcionario. 
// Um Departamento pode ter vários Funcionarios, mas os Funcionarios podem existir sem o Departamento.

class Funcionario {
    constructor(public nome: string) { }

    trabalhar(): void {
        console.log(`${this.nome} está trabalhando.`);
    }
}

class Departamento {
    private funcionarios: Funcionario[] = [];

    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    listarFuncionarios(): void {
        console.log("Funcionários do departamento:");
        this.funcionarios.forEach((func) => console.log(func.nome));
    }
}

// Criando instâncias de funcionários
const funcionario1 = new Funcionario("Michel Araújo");
const funcionario2 = new Funcionario("Ana Silva");

// Criando instância de departamento
const departamento = new Departamento();

// Adicionando funcionários ao departamento
departamento.adicionarFuncionario(funcionario1);
departamento.adicionarFuncionario(funcionario2);

departamento.listarFuncionarios();


// Explicação:
// Agregação: No exemplo, a classe Departamento agrega objetos da classe Funcionario. 
// Ou seja, Departamento mantém uma coleção de Funcionario.

// Independência: Apesar de os funcionários estarem associados ao departamento, 
// eles podem existir independentemente. Por exemplo, Funcionario pode ser criado 
// e usado em outro contexto sem pertencer a nenhum Departamento.
// Relação "tem-um": Departamento "tem" uma lista de Funcionarios, 
// mas os Funcionarios não são parte intrínseca do Departamento.
