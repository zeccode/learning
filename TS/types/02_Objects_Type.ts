{
    //1. Objetos Literais
    // Definir diretamente no objeto o type especifico de seus atributos
    const people1: { name: string; age: number; isActive: boolean } = {
        name: "Maria",
        age: 28,
        isActive: true,
    };

    // 2. Interfaces
    // Uma forma de criar uma estrutura (ou contrato) para um objeto
    // é flexível e extensível, pode ser extendidas ou implementadas por 
    // outras interfaces ou classes.
    interface People2 {
        name: string;
        age: number;
        isActive: boolean;
    }

    const people2: People2 = {
        name: "João",
        age: 30,
        isActive: true,
    };

    //3. Types
    // 
    type People3 = {
        name: string;
        age: number;
        isActive: boolean;
    }

    const people3: People3 = {
        name: "João",
        age: 30,
        isActive: true,
    };

    // 4. Record
    // Record<K, T> é usado para criar um tipo de objeto com chaves e valores específicos:
    const user: Record<string, unknown> = {
        name: 'Meuname',
        lastName: 'MeuSobrename',
        age: 30,
        phone: '(11) 9 9999-0000',
    }

    //5. Mapped Types
    // Pode usar para criar typos para objetos dinamicamente
    type Propties = 'name' | 'age';
    type People4 = {
        [k in Propties]: string
    }
    const people4: People4 = {
        name: 'nome da Pessoa 4',
        age: '30',
    }

    // 6. Index Signatures
    // bem parecido com Mapped Types
    interface People5 {
        [key: string]: string
    }
    const people5: People5 = {
        name: 'nome da Pessoa 5',
        lastName: 'sobrenome da Pessoa 5',
        age: '30',
    }

    // 7. Partial Required
    // Partial<T> todos os tatributos sao opcionais
    // Required<T>  todos os tatributos sao Obrigatorios
    interface People6 {
        name: string;
        age: number;
        isActive: boolean;
    }
    const partialPeople: Partial<People6> = {
        name: 'Nome da Pessoa',
    }
    const requiredPeople: Required<People6> = {
        name: 'Nome da Pessoa',
        age: 30,
        isActive: false,
    }
    
    // 8. key of types
    type ColorsType = typeof colors // Cria um novo tipo baseado na inferencia de types do objeto colors
    type ColorsNameType = keyof ColorsType // keyof Cria um tipo baseado nas keys do type (ColorsType) do objeto colors
    const colors = {
        midnightBlue: '#2C3E50',
        Turquoise: '#1ABC9C',
        Sunflower: '#F1C40F',
        Alizarin: '#E74C3C',
        Clouds: '#ECF0F1',
    }
    const colorsName = [...Object.keys(colors)]

  
}   