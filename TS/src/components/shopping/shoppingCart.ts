class Product {
    constructor(
        private _name: string,
        private _description: string,
        private _stock: string,
        private _value: string,
        private _discount?: string,) {
    }
}

class ShoppingCart {
    private readonly _products: Product[] = []
    constructor() {

    }
    insertProducts(...products: Product[]): void {
        for (const product of products) {
            this.products = product
        }
    }
    showShoppingCart(): void {
        console.table(this.products)
    }
    get products(): Product[] {
        return this._products
    }
    set products(product: Product) {
        this._products.push(product)
    }
}
const Camiseta = new Product('Camiseta Adidas', 'Tamanho M, Branca lisa', '199,90', '10', '80')

const newCart = new ShoppingCart()
newCart.insertProducts(Camiseta)
newCart.showShoppingCart()