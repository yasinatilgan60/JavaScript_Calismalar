"use strict";
exports.__esModule = true;
var SimpleDataSources_1 = require("./SimpleDataSources");
// IProductService'ini kullanacak olan ProductService
// IProductService interface'i ile bağımlılıklar azaltılmıştır, yani başka bir yapı (Örneğin OracleProductService, MSSQLProductService) ile de servis yazılabilir, fakat arka planda hepsi IProductService'in işaret ettiği metodları gerçekleştiren aynı işlemleri yapacaktır. Class yapısına değil interface yapısına bağlı olan bir yapı vardır.
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSources_1.SimpleDataSources();
        this.products = new Array();
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); });
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0]; // Eşleşen ilk elemanı gönder.
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product);
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > -1) {
            this.products.splice(index, 1);
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
