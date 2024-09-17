{
    // GENERICS
    // Funcionam como uma forma avancada de permitir que a tipagem seja flexivel, porem controlada, mantendo a seguranca do TS

    // 1. Interface com Generics
    interface ResponseAPII<T> {
        dados: T;
        success: boolean;
        mensagem?: string;
    }
    const respondeNumber: ResponseAPII<number> = {
        dados: 5,
        success: true
    }
    const respondeName: ResponseAPII<string> = {
        dados: 'Meu nome',
        success: true,
        mensagem: 'Tudo certo por aqui'
    }
    // 2. Function com generics e Restricoes
    // A funcao so aceita parametros que tenham a propriedade length (string ou array por ex) 
    function compare<T extends { length: number }>(a: T, b: T): number {
        const result = a.length > b.length ? a.length : b.length
        return result
    }
    console.log(compare('teste', 'ola'))

    // outro exemplo: 
    type objectKeyType = <O, K extends keyof O>(object: O, key: K) => O[K]
    const getData: objectKeyType = (obj, key) => obj[key]

    const animal = {
        name: 'Rex',
        type: 'Dog',
        breed: 'bulldog',
        color: 'black',
        vaccines: ['vvaccines 1', 'vvaccines 2', 'vvaccines 3', 'vvaccines 4', 'vvaccines 5']
    }

    const rexVaccines = getData(animal, "vaccines")
    console.log(rexVaccines)

    // 3. Tipos Genéricos com Herança
    class User<T> {

        constructor(private name: string, private core: T) {
            this.name = name;
            this.core = core;
        }
        getDatails(): string {
            return `${this.name}, ${JSON.stringify(this.core)} `
        }
    }
    interface AdminI {
        position: string,
    }
    interface ClientI {
        recentPurchases: number
    }
    const admin = new User<AdminI>('Michel', { position: 'manager' })
    const client = new User<ClientI>('cliente final', { recentPurchases: 5 })
    console.log(admin.getDatails());
    console.log(client.getDatails());

    // 4. Generics com Funções Assíncronas
    // 
    // Generics é muito eficaz para trabalhar com async fuctions, requisicoes a APIs
    async function searchData<T>(url: string): Promise<T> {
        const response = await fetch(url);
        const data = await response.json()
        return data
    }
    async function getUser() {
        const userData = await searchData<{ id: number, name: string }>('https://google.com.br');
        console.log(userData.name)
        const payData = await searchData<{ id: number; value: number }>("https://api.com/produto");
        console.log(payData.value);
    }
    getUser()

    // 5. Usando Generics com Tipos Complexos
    // E se você precisar lidar com uma situação em que tem tipos aninhados ou mais complexos?
    // Você pode continuar usando generics para garantir a flexibilidade e segurança de tipos. 
    // Por exemplo, um sistema de notificações:

    interface NotificationI<T> {
        id: number;
        msg: string;
        sender: T;
    }

    function sendNotification<T>(notification: NotificationI<T>) {
        console.log(`Enviando notificação para ${JSON.stringify(notification.sender)}`);
    }

    interface UserI {
        name: string;
        email: string;
    }

    const userNotification: NotificationI<UserI> = {
        id: 1,
        msg: "Você tem uma nova mensagem!",
        sender: { name: "Michel", email: "michel@email.com" },
    };

    sendNotification(userNotification);

    //   6. Generics com union 
    const myArray: Array<number | string> = [0, 1, 2, 3, 'quatro', 'cinco']
    console.log(myArray)
}