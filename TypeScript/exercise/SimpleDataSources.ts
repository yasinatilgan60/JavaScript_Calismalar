import { Product } from "./Product";

// Ürün listesi getiren yapıdır.

export class SimpleDataSources {
    private products: Array<Product>;
    // private ile dışardan ulaşım engellenir, fakat getProducts metodu ile products listesi dışarıdan kontrollü olarak alınabilmektedir.
    constructor() {
        this.products = new Array<Product>(
            new Product(1,"Iphone 10","Telefon",8000),
            new Product(2,"Iphone X","Telefon",10000),
            new Product(3,"Samsung S6","Telefon",5000),
            new Product(4,"Samsung S7","Telefon",6000),
            new Product(5,"Samsung S8","Telefon",7000)
        );
        
    }
    getProducts(): Product[]{
        return this.products;
    }
}
let p = new SimpleDataSources();

