"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    /*
    id: number;
    name: string;
    constructor(id,name) {
        this.id = id;
        this.name = name;
    }
    */
    // Typescript ile gelen alternatif yöntem;
    function Product(id, name, category, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
var p = new Product();
