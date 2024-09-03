// 5. Encapsulamento
// Embora JavaScript não tenha suporte nativo para modificadores de acesso como private (como em outras linguagens), 
// podemos simular encapsulamento com convenções (como prefixar nomes de propriedades com _) 
// ou usar símbolos (symbols) ou campos privados (#).

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance; // Propriedade "privada"
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
    }
  }

  get balance() {
    return this._balance;
  }
}

const account = new BankAccount('John', 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.balance); // 1300

// Neste exemplo, a propriedade _balance é considerada "privada" por convenção e não deve ser acessada diretamente fora da classe. 
// Em vez disso, métodos como deposit, withdraw, e o getter balance são usados para interagir com o saldo da conta.
// Esses conceitos fornecem uma base sólida para entender como as classes funcionam em JavaScript, 
// permitindo a criação de código mais organizado, modular e reutilizável.