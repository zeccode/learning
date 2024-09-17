// Associação entre classes por Composição:
// Composição é um tipo de associação entre classes na Programação Orientada a Objetos (POO) 
// onde uma classe ("todo") é responsável pela criação e destruição de instâncias de outras classes ("partes"). 
// Em outras palavras, se o objeto "todo" for destruído, as partes também serão destruídas,
// pois elas não têm uma existência independente fora do contexto do todo.

// Exemplo de Composição:
// Vamos considerar um exemplo com as classes Casa e Comodo. 
// Uma Casa é composta por vários Comodos, 
// mas esses Comodos não podem existir sem a Casa.

class Comodo {
    constructor(public nome: string) { }

    descricao(): void {
        console.log(`Este é o cômodo: ${this.nome}`);
    }
}

class Casa {
    private comodos: Comodo[] = [];

    constructor() {
        this.comodos.push(new Comodo("Sala"));
        this.comodos.push(new Comodo("Cozinha"));
        this.comodos.push(new Comodo("Quarto"));
    }

    listarComodos(): void {
        console.log("Cômodos da casa:");
        this.comodos.forEach((comodo) => comodo.descricao());
    }
}

// Criando instância de casa (os cômodos são criados automaticamente)
const casa = new Casa();
casa.listarComodos();


// Explicação:
// Composição: A classe Casa compõe objetos da classe Comodo. 
// Quando uma Casa é criada, seus Comodos são criados dentro dela. 
// Se a Casa for destruída, os Comodos também serão destruídos, 
// porque eles não podem existir fora do contexto da Casa.
// Relação "parte-todo": Os Comodos fazem parte da Casa e 
// não têm significado ou existência independente fora dela.