import { IProductService } from "./IProductService";
import {Product} from './Product';
import { SimpleDataSources } from "./SimpleDataSources";
// IProductService'ini kullanacak olan ProductService
// IProductService interface'i ile bağımlılıklar azaltılmıştır, yani başka bir yapı (Örneğin OracleProductService, MSSQLProductService) ile de servis yazılabilir, fakat arka planda hepsi IProductService'in işaret ettiği metodları gerçekleştiren aynı işlemleri yapacaktır. Class yapısına değil interface yapısına bağlı olan bir yapı vardır.
export class ProductService implements IProductService{
    private dataSource: SimpleDataSources;
    private products: Array<Product>;
    constructor() {
        this.dataSource = new SimpleDataSources();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach(p=> this.products.push(p))
    }
    getById(id: number): Product {
        return this.products.filter(p=> p.id === id)[0]; // Eşleşen ilk elemanı gönder.
    }    
    getProducts(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        } else {
            let index;
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].id === product.id) {
                    index = i;
                }   
            }
            this.products.splice(index,1,product);
        }
    }
    deleteProduct(product: Product): void {
            let index = this.products.indexOf(product);
            if (index>-1) {
                this.products.splice(index,1);    
            }
    }
    private generateId(): number {
        let key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    }


}