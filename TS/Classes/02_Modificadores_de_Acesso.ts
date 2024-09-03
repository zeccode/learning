// TypeScript introduz modificadores de acesso (public, private, protected) que controlam a visibilidade de propriedades e métodos.

// public: As propriedades e métodos são acessíveis de qualquer lugar. Este é o padrão.
// private: As propriedades e métodos só podem ser acessados dentro da própria classe.
// protected: As propriedades e métodos podem ser acessados dentro da classe e em subclasses.


class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    getSalary(): number {
        return this.salary;
    }
}

export default class Manager extends Employee {
    constructor(name: string, salary: number, department: string) {
        super(name, salary, department);
    }

    getDepartment(): string {
        return this.department; // Acesso permitido porque 'department' é protected
    }
}

const employee = new Employee('John Doe', 50000, 'IT');
console.log(employee.name); // Acesso permitido
console.log(employee.getSalary()); // Acesso permitido

// ERROR:
// console.log(employee.department); // Erro: 'department' é protected
