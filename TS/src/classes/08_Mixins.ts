// 8. Mixins
// O que são?
// Mixins são uma maneira de reutilizar código entre várias classes sem usar herança direta. 
// Em TypeScript, isso é feito combinando classes ou objetos que adicionam funcionalidade a outras classes.

// Mixins permitem que você “misture” funcionalidades de várias classes ou objetos em uma única classe, 
// evitando a complexidade da herança múltipla (que não é suportada diretamente em TypeScript ou JavaScript).

// EXEMPLO 01:

type ConstructorTYPE<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends ConstructorTYPE>(Base: TBase) {
  return class extends Base {
    timestamp = new Date();
  };
}

function Serializable<TBase extends ConstructorTYPE>(Base: TBase) {
  return class extends Base {
    serialize() {
      return JSON.stringify(this);
    }
  };
}

class User {
  constructor(public name: string) { }
}

// Aplicando mixins
const TimestampedUser = Timestamped(User);
const SerializableUser = Serializable(TimestampedUser);

const user = new SerializableUser('Alice');
console.log(user.timestamp); // Saída: (data e hora atual)
console.log(user.serialize()); // Saída: {"name":"Alice","timestamp":"..."}

// Explicação:
// Timestamped e Serializable são funções que aceitam uma classe base e retornam uma nova classe com funcionalidades adicionais.
// User é uma classe simples que armazena um nome.
// Usando mixins, criamos TimestampedUser e SerializableUser, que adicionam um carimbo de data/hora e a 
// capacidade de serializar o objeto, respectivamente.


// EXEMPLO 02:

class Disposable {
  isDisposed: boolean = false;

  dispose() {
    this.isDisposed = true;
    console.log('Disposed');
  }
}

class Activatable {
  isActive: boolean = false;

  activate() {
    this.isActive = true;
    console.log('Activated');
  }
}

type Constructor<T = {}> = new (...args: any[]) => T;

function applyMixins(derivedCtor: Constructor, baseCtors: Constructor[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null)
      );
    });
  });
}

class SmartObject implements Disposable, Activatable {
  isDisposed: boolean = false;
  dispose: () => void;

  isActive: boolean = false;
  activate: () => void;

  constructor() {
    setTimeout(() => console.log(this.isActive + ' : ' + this.isDisposed), 500);
  }
}

applyMixins(SmartObject, [Disposable, Activatable]);

const obj = new SmartObject();
obj.activate();
obj.dispose();
