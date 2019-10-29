import {Product} from "./Product"
export interface IProductService {
    getById(id : number): Product; // Metod gövdeleri yazılmamaktadır.
    getProducts(): Product[];
    saveProduct(product: Product): void;
    deleteProduct(product: Product): void;
}