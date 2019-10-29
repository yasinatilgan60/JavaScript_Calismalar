import { ProductService } from "./ProductService";
import { Product } from "./Product";

// Diğer yapıları kullanacağımız kısımdır.


let _productService = new ProductService();
let result;
let product = _productService.getById(2);
console.log(product);

let p = new Product();
p.id = 2;
p.name = "Vestel";
p.price = 5000;
p.category = "Telefon";
_productService.saveProduct(p);
//_productService.deleteProduct(product);
result = _productService.getProducts();
console.log(result);