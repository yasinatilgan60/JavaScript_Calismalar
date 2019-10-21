// Modül kullanmamızdaki ana amaç, işlemleri parçalara ayırarak karmaşıklığı azaltmaktır.
/*
// 1. Global variable naming conflicts / İsimlendirme çakışmaları

// scirpt.js
var name = "Yasin";
//app.js
var name ="Atakan";
// Farklı js dosyaların index.html içerisinde tanımalanacak ve hepsinden gelen veriler bir global scope içerisinde toplanacaktır.

console.log(name);
*/
/*
// 2. Encapsulation

// Örnek bir obje;

var Counter = {
    number : 0,
    increment : function(){
        return ++this.number;
    },
    decrement : function(){
        return --this.number;
    }
}

console.log(Counter.increment());
console.log(Counter.increment());
Counter.number = 20; // Obje içerisindeki private alana ulaşılmaMası gerekirdi.
console.log(Counter.increment());
console.log(Counter.decrement());
*/
/*
// 1. durumun çözümü için;

// IIFE (Immediately Invoked Function Expression)

// script.js
(function(){
    var name = "Yasin";
    console.log(name);
})();
// app.js
(function(){
    var name = "Arda";
    console.log(name);
})();

// Her iki isimde yazar, IIFE sayesinde farklı scope'Lar oluşturuldu ve fonksiyonlar birbirini ezemediler.
*/
/*
// 2. durumun çözümü için;

// Bir tane modül açılacaktır. 

var Module = (function(){
    // private members
    let number=10;
    let increment = function(){
        return ++number;
    }
    let decrement = function(){
        return --number;
    }
    return {
        // public members
        // Dışarıdan ulaşılmasını istediğimiz alanlar buraya yazılmalıdır.
        increment,
        decrement
    }
})();
// Public olan increment ve decrement ile private olan number'a müdahele edebeliriz.
console.log(Module.increment());
console.log(Module.increment());
console.log(Module.increment());
console.log(Module.decrement());

//IIFE ile başka bir kullanım;

var Module = (function(){
    var privateMethod = function(){

    };

    return {
        publicMethod : function(){

        }
    }
})();

// Module üzerinden public method'a ulaşabilmek için;

Module.publicMethod();
*/
/*
// Demo; Module Pattern

// Ayrı bir scope'a sahip IIEF function oluşturmak;
var products = [
    {name:"Samsung S6",price:3500},
    {name:"Samsung S7",price:4500},
    {name:"Samsung S8",price:5000}
]
    

var ProductController = (function(data){
    //private members
    var collection = data || []; // Boş değilse içeriği data olsun.
    const addProduct = function(product){
        collection.push(product);
    }
    const removeProduct = function(product){
        var index = collection.indexOf(product); // silinecek olan ürünün index'i alındı.
        if (index>=0) {
            collection.splice(index,1); // index'den itibaren başla ve 1 eleman sil.
        }
    }
    const getProduct = function(){
        return collection;
    }
    return {
        // public members
        addProduct,
        removeProduct,
        getProduct
    }
})(products);

ProductController.addProduct(products[0]);
ProductController.addProduct(products[1]);

console.log(ProductController.getProduct());

// Modülü başka bir modül içerisinde kullanarak genişletme işlemleri; (Module Extending)

var extended = (function(m) {
    m.sayHello = function(){
        console.log("hello from extended module");
    }
    return m;
})(ProductController || {});

extended.sayHello();
console.log(extended.getProduct()); // extended geniletilmiş modülü ProductController özelliklerine sahiptir.

*/
/*
// Singleton Pattern

// Uygulama içerisinde yeni obje üretmek yerine ana objenin kullanılmasını isteyebiliriz.

var singleton = (function(){
    var instance;


    // obje döndüren bir fonksiyon;
    const createInstance = function(){
        return {
            randomNumber : Math.random()
        }
    }
    // public olan üyeler return ile dışarı açılabiliyordu.
    return {
        getInstance: function(){
            if (!instance) {
                instance = new createInstance(); // instance içerisine değer atılmamış ise içinde ramdom değer olan
                //objeyi ata.       
            }
            return instance;
        }
    }
})();

const instance1 = singleton.getInstance(); 
const instance2 = singleton.getInstance();
// iki değerde aynı değeri aldı. Private olan createInstance'da bir kere değer üretildi ve aynı değer 2 kere çağrıldı.
console.log(instance1.randomNumber,instance2.randomNumber);
*/
/*
// Önceden yapılan product örneğinin Singleton ile yapılması;


var singleton = (function(){
    var instance;

    function ProductController(){
        const products = [
            {name:'product 1'},
            {name:'product 2'},
            {name:'product 3'}
        ];
        const add = function(product){
            products.push(product);
        }
        const get = function(){
            return products;
        }
        return {
            add,get
        }        
    }
    // ProductController'ı kullanmak istediğimiz zaman return içerisindeki public elemana ulaşmamız gerekmektedir.
    return {
        getInstance : function (){
            if (!instance) {
                instance = new ProductController();
            }
            return instance;
        }
    }


})();

const productController1 = singleton.getInstance();
const productController2 = singleton.getInstance();
// productController1 ile ürün eklendi, productController2 ile ürün listesi çağrılınca eklenen ürünün de olduğu liste
// geriye döner. Özetle aynı instance üzerinde işlem yapılır. Geriye döndürülen obje aynı objedir.
productController1.add({name:"product 4"});
console.log(productController2.get());
*/


// Factory Pattern

// Birbirine benzer olan objeleri oluşturmak için kullanılan yapılardır.

function Factory(){
    this.createEmployee = function(type) {
        // type ile üretilecek olan çalışanın görevi / zamanlaması belirtilmektedir.
        var employee;
        if (type==='fulltime') {
            employee = new FullTime(); // Bir tane constructor'dan üretilen obje employee değişkenine atandı.
        } else if(type==='parttime'){
            employee = new PartTime();
        }else if(type==='temporary'){
            employee = new Temporary();
        }
        employee.type = type;
        employee.say = function(){
            console.log(this.type +" saatlik ücreti: "+this.hourly);
        }
        return employee;
    }
}

var FullTime = function(){
    this.hourly = '30TL'
}
var PartTime = function(){
    this.hourly = '20TL'
}
var Temporary = function(){
    this.hourly = '10TL'
}

var factory = new Factory();
var employees = [];

employees.push(factory.createEmployee('fulltime'));
employees.push(factory.createEmployee('parttime'));
employees.push(factory.createEmployee('fulltime'));
employees.push(factory.createEmployee('parttime'));
employees.push(factory.createEmployee('temporary'));
employees.push(factory.createEmployee('temporary'));
employees.push(factory.createEmployee('parttime'));

employees.forEach(function(emp){
    emp.say();
});
