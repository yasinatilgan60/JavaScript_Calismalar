"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
// Ürün listesi getiren yapıdır.
var SimpleDataSources = /** @class */ (function () {
    // private ile dışardan ulaşım engellenir, fakat getProducts metodu ile products listesi dışarıdan kontrollü olarak alınabilmektedir.
    function SimpleDataSources() {
        this.products = new Array(new Product_1.Product(1, "Iphone 10", "Telefon", 8000), new Product_1.Product(2, "Iphone X", "Telefon", 10000), new Product_1.Product(3, "Samsung S6", "Telefon", 5000), new Product_1.Product(4, "Samsung S7", "Telefon", 6000), new Product_1.Product(5, "Samsung S8", "Telefon", 7000));
    }
    SimpleDataSources.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSources;
}());
exports.SimpleDataSources = SimpleDataSources;
var p = new SimpleDataSources();
