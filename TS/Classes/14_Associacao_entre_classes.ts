// Em Programação Orientada a Objetos (POO) com TypeScript, a associação entre 
// classes refere-se a um relacionamento entre duas classes onde uma classe usa, 
// ou "conhece", a outra classe. Esse relacionamento indica que uma classe 
// depende de outra para funcionar, mas elas ainda são independentes, ou seja, 
// a existência de uma não depende da outra.

// Tipos de Associação
// Existem diferentes formas de associação entre classes:

// Associação Simples:
// Uma classe contém uma referência a outra classe como um atributo, mas não há uma dependência rígida entre elas.
// Exemplo: Um Cliente que tem um Endereco, onde o Cliente "conhece" o Endereco, 
//mas ambos podem existir independentemente.

// Agregação:
// Um tipo mais específico de associação onde uma classe (o "todo") contém referências a outras classes 
// (as "partes"), mas as partes podem existir independentemente do todo.
// Exemplo: Um Departamento que tem Funcionarios, onde os Funcionarios são parte do Departamento, 
// mas eles podem existir fora do Departamento.

// Composição:
// Uma forma mais forte de associação onde uma classe (o "todo") é responsável pela criação e 
// destruição das instâncias de outra classe (as "partes"). Se o todo for destruído, as partes também serão.
// Exemplo: Um Carro que tem um Motor, onde o Motor não pode existir sem o Carro.

// Exemplo de Associação Simples
// Vamos considerar um exemplo onde temos uma classe Pedido e uma classe Cliente. Um Pedido tem um Cliente associado a ele.

class Cliente {
    constructor(public nome: string) { }
}

class Pedido {
    constructor(public numero: number, public cliente: Cliente) { }

    detalhesPedido(): void {
        console.log(`Pedido Nº: ${this.numero}, Cliente: ${this.cliente.nome}`);
    }
}

// Criando instâncias
const cliente1 = new Cliente("Michel Araújo");
const pedido1 = new Pedido(123, cliente1);

// Exibindo detalhes do pedido
pedido1.detalhesPedido(); // Saída: Pedido Nº: 123, Cliente: Michel Araújo

//_________________________________________________________________________________________________
//   Explicação:
// Associação Simples: 
// A classe Pedido tem uma associação com a classe Cliente, 
// o que significa que um Pedido conhece o Cliente que fez o pedido. 
// No entanto, ambos Pedido e Cliente podem existir de forma independente.

// Independência: 
// O Pedido mantém uma referência ao Cliente, mas a destruição de um 
// Pedido não afeta o Cliente, e vice-versa.

// Quando Usar Associação?
// Modelagem de Domínio: 
// Associação é útil para modelar relações onde uma classe precisa interagir 
// com outra para realizar suas funções, mas não existe uma relação de posse ou dependência rígida.
// Flexibilidade: Associações permitem um design flexível e modular, onde as 
// classes podem ser reutilizadas ou substituídas sem impactar diretamente as 
// outras classes associadas.
