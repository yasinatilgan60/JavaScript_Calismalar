"use strict";
exports.__esModule = true;
var ProductService_1 = require("./ProductService");
var Product_1 = require("./Product");
// Diğer yapıları kullanacağımız kısımdır.
var _productService = new ProductService_1.ProductService();
var result;
var product = _productService.getById(2);
console.log(product);
var p = new Product_1.Product();
p.id = 2;
p.name = "Vestel";
p.price = 5000;
p.category = "Telefon";
_productService.saveProduct(p);
//_productService.deleteProduct(product);
result = _productService.getProducts();
console.log(result);
