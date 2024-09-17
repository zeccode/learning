// Usando tecnicas de Desenvolvimento Singleton da GoF
// Factory Method da Gof

class DataBase {
    private static dataBase: DataBase
    private host: string
    private user: string
    private password: string

    // metodo constructor privado, quer dizer que a class so pode ser instanciada dentro dela mesma!
    private constructor(
        host: string,
        user: string,
        password: string,
    ) {
        this.host = host;
        this.user = user;
        this.password = password;
        this.connect(this);
    }
    connect(data: DataBase): void {
        console.table(data)
        console.log(`Conectando...`)
        setTimeout(() => {
            console.log(`Conectado com ${this.host}!`)
        }, 3000)
    }
    // O PROPRIO METODO STATICO CRIA UMA UNICA STANCIA DA CLASS
    static getDataBase(host: string, user: string, password: string): DataBase {
        if (!DataBase.dataBase) DataBase.dataBase = new DataBase(host, user, password)
        return DataBase.dataBase
    }
}
// NAO É POSSIVEL USAR O METODO CONSTRUTOR DA CLASS. NAO USAMOS O NEW
// const dB1 = new DataBase('localhost', 'root', '12345') // RETORNA ERRO

const dB2 = DataBase.getDataBase('localhost_02', 'root', '12345') // retorna a conexao com localhost_02!
const dB3 = DataBase.getDataBase('localhost_03', 'root', '12345') // retorna a conexao com localhost_02 pois foi a instancia criada!
const dB4 = DataBase.getDataBase('localhost_04', 'root', '12345') // retorna a conexao com localhost_02 pois foi a instancia criada!
