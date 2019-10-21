// Arrow Functions ( ES6 ile gelen bir özelliktir. )

// let welcomeES5 = function () {
//     console.log('Hello from ES5');
// }

// welcomeES5();

// // ES6 ile;

// let welcomeES6 = () => { // parametre olmadığı için parantez içi boş kaldı.
//     console.log('Hello from ES6');
// }

// welcomeES6();

// // with parameters
// // ES5 kullanımı
// let multiplyES5 = function (x, y) {
//     return x * y;
// }

// let c = multiplyES5(6, 8);
// console.log(c);

// // ES6 ile;

// //let multiplyES6 = (x, y) => {return x * y};
// let multiplyES6 = (x, y) => x * y;
// console.log(multiplyES6(9, 7));

// // ES5 

// let splitES5 = function (text) {
//     return text.split(' ');
// }
// console.log(splitES5('MER HA BA')); // 3 elemanlı bir dizi döner.

// // ES6 ile;

// let splitES6 = text => text.split(' ');
// console.log(splitES6('GA LA TA SA RAY'));

// // Object Literals
// // ES5 ile
// let getProductES5 = function (id, name) {
//     return {
//         id: id,
//         name: name
//     }
// };

// console.log(getProductES5('1', 'Samsung S8'));

// // ES6 ile,

// let getProductES6 = (id, name) => (
//     {
//         id: id,
//         name: name
//     }
// );

// console.log(getProductES6('25', 'Iphone 5s'));

// // object literal array

// const phones = [
//     { name: 'Samsung S8', price: 3000 },
//     { name: 'Iphone 6 ', price: 4000 },
//     { name: 'Iphone 6S', price: 5000 },
//     { name: 'Iphone 8', price: 6000 },
// ];
// // Dizi içerisinden başka bir dizi çıkarmak için map fonksiyonu kullanılır.
// // ES5 ile,
// let pricesES5 = phones.map(function (phone) {
//     return phone.price;
// });
// console.log(pricesES5);

// // ES6 ile,
// //let pricesES6 = phones.map(phone => {return phone.price});
// let pricesES6 = phones.map(phone => phone.price);

// console.log(pricesES6);

// // ES5 ile,

// const arr = [1, 2, 3, 6, 10, 20, 30, 50, 55, 61, 79];
// let evensES5 = arr.filter(function (a) {
//     return a % 2 == 0;
// });

// console.log(evensES5);

// // ES6 ile

// let evensES6 = arr.filter(a => a % 2 == 0);
// console.log(evensES6);

// This keyword 

// Arrow function'da yeni bir scope oluşmaz.
// ES5 ile,
// let list = {
//     category : 'phone',
//     names : ['Iphone 8', 'Samsung S8',' Samsung A8'],
//     call : function(){
//         var self = this;
//         this.names.map(function(name){
//             console.log(`${self.category} ${name}`);
//             // burda örneğin category yazdırmak istersek this'i kullanamayız, çünkü yeni bir fonksiyon içerisine girdik.

//         })
//     }
// }
//list.call();
//ES6 ile,
// let list = {
//     category : 'phone',
//     names : ['Iphone 7', 'Samsung S8',' Samsung A8'],
//     call : function(){
//         this.names.map((name) => 
//         console.log(`${this.category} ${name}`) );
//     }
//     // arrow function yeni bir obje oluşturmaz.
// }
// list.call();
// ES5 ile
// function Game(){
//     this.live = 0;
//     this.addLive = function(){
//         var self = this;
//         this.OneUp = setInterval(function(){
//             console.log(++self.live);
//         },1000);
//     }
// }
// let player = new Game();
// player.addLive();
// ES6 ile
// function Game() {
//     this.live = 0;
//     this.addLive = function () {
//         this.oneUp = setInterval(() => console.log(++this.live), 1000);
//         //arrow fucntion ile ayrı bir context oluşturulmadığı için this burada kullanılabilmiştir.
//     };
// }

// let player = new Game();
// player.addLive();

// DERS; Spread Operator (ES6 ile gelen bir özellik)

// function getTotal(a, b, c) { //Spread ile gelen dizi elemanları a,b ve c'ye aktarıldı.
//     return a + b + c;
// }

// console.log(getTotal(10,20,30));
// let numbers = [10,20,30];
// // numbers'ı dizi olarak fonksiyona göndermek için;

// //ES5 ile,
// console.log(getTotal.apply(null,numbers));
// //ES6 ile,
// console.log(getTotal(...numbers)); //spread operator

// let arr1 = ['two','three'];
// let arr2 = ['one','four','five'];
// let arr3 = ['one',...arr1,'four','five'];
// //arr1.push(...arr2); // sona ekler.
// //arr1.unshift(...arr2); // başa ekler.
// console.log(arr3);

// let h1 = document.querySelector('h1');
// let divs = document.querySelectorAll('div');
// let tags = [h1,...divs];
// tags.forEach(tag => tag.style.color = 'red');
// DERS; Rest Parameters
//ES5 ile,
// function sum() {
//     console.log(arguments); // Parametre belirtilmediği halde obje türünde bir yapı yazdırılır.
// }
// sum(10, 20, 30);
// --
// function sum(){
//     let arr = Array.prototype.slice.call(arguments);
//     console.log(arr); // dizi yazdırıldı. 
//     // dizi üzerinde forEach kullanıldı.
//     let result = 0;
//     arr.forEach(function(item){
//         result +=item;
//     });
//     return result;
// }
// console.log(sum(1,2,3));
// ES6 ile,
// function sumES6(...arr) { // Rest parametre ile gelen argumanlar direkt diziye çevrildi ve fonksiyon içerisinde bunu direkt kullanabildik.
//     // Beklediğimiz parametre bir rest parametresi.
//     let result = 0;
//     arr.forEach(item => result += item);
//     return result;
// }
// // Spread operatorlerde durum tam tersidir.
// console.log(sumES6(50, 40, 30, 20));
// // ES6 ile
// function isDriver(...years){ // Gelen argumanlar rest parametre içerisine aktarıldı.
//     years.forEach(year => console.log(2019-year>=18));
//     // ES5'de slice ve arguments kullanılarak da yapılabilirdi.
// }
// isDriver(1990,2003,2002,2002);

// Bir parametre daha göndermek istersek;
// function isDriver(age,...years){ // Gelen argumanlar rest parametre içerisine aktarıldı.
//     years.forEach(year => console.log(2019-year>=age));
//     // ES5'de slice ve arguments kullanılarak da yapılabilirdi.
// }
// isDriver(18,1996,2003,2002);

// Ders; ES6 ile gelen Destructring kavramı;

// Destructring kavramı;
// Destructring assignment ile aşağıdaki gibi atama işlemlerini yapabiliriz.
// var a, b, rest;
// [a,b] = [10,20];
// console.log(a);
// console.log(b);

// [a,b,...rest] = [10,20,30,40,50,60];
// console.log(a); // 10
// console.log(b); // 20 
// console.log(rest); // 30,40,50 ve 60'ın olduğu 4 elemanlı bir dizi.

// ({a,b} = {a:10 , b:20});
// console.log(a);
// console.log(b);

// ({a,b,...rest} = {a:10,b:20,c:30,d:40});
// console.log(a);
// console.log(b);
// console.log(rest); // Array değil Object yazdırıldı.

// Array destructring

//const arrConfig = ['localhost','8080','900'];

// ES5 ile,
// var server = arrConfig[0];
// var port = arrConfig[1];
// var timeOut = arrConfig[2];
// console.log(server,port,timeOut);
// ES6 ile,
// const [server,port,timeOut] = arrConfig;
// console.log(server,port,timeOut);

// Object Destructuring

// const objConfig = {
//     server : 'localhost',
//     port : '8080',
//     timeOut : 900
// }
// // var server = objConfig.server;
// // var port = objConfig.port;
// // var timeOut = objConfig.timeOut;
// const {server,port,timeOut} = objConfig;
// console.log(server,port,timeOut);

// let {timeOut : t} = objConfig; // Bunun anlamı objConfig içerisindeki timeOut'u t'ye aktar.
// // console.log(timeOut) // timeOut is not defined.
// console.log(t); // 900 yazdırılır.

// Örneğin timeOut'un olmadığı bir durumda;

// const objConfig = {
//     server : 'localhost',
//     port : '8080'
// }
// let {server,port,timeOut=900} = objConfig;
// console.log(server,port,timeOut); // timeout için undefined değeri alınır. Fakat yukarda timeOut=900 gibi bir değer kullanılırsa timeOut default olarak 900 değerini alır.

// const days = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
// //const [wed,fri] = days;
// //console.log(wed,fri); // Monday Tuesday yazdırılır.
// // Wednesday Friday için öteleme işlemleri yapılabilir.
// const [,,wed,,fri] = days;
// console.log(wed,fri);

// DERS ES6'da dizi kullanımı
//ES5 ile,
// const boxes = document.querySelectorAll('.box');
// // console.log(boxes); // NodeList
// //let boxesES5 = Array.prototype.slice.call(boxes);
// // boxesES5.forEach(function(box){
// //     box.style.backgroundColor = 'green';
// // });
// // console.log(boxesES5); // Array

// //ES6 ile,
// // Array.from(boxes).forEach(box => 
// //     box.style.backgroundColor = 'green');
// // ES5 ile
// // for (let i = 0; i < boxesES5.length; i++) {
// //     console.log(boxesES5[i]);
// //     if (boxesES5[i].className == 'box blue') {
// //         continue;
// //     }
// //     boxesES5[i].textContent = "I'm changed";
// //     boxesES5[i].style.backgroundColor = 'blue';
// // }
// //ES6 ile,
// // var boxesES6 = Array.from(boxes);
// // console.log(boxesES6); //Array
// // for (let box of boxesES6) {
// //     if(box.className=='box blue'){
// //         continue;
// //     }
// //     box.textContent = "I'm changed.";
// //     box.style.backgroundColor = 'blue';
// // }

// //from metodu...
// // let arr = Array.from('Modern Javascript'); //String to Array
// // console.log(arr); //  Array

// const products = [
//     { name: 'Samsung S8', price: 3500 },
//     { name: 'Samsung S7', price: 2500 },
//     { name: 'Samsung S6', price: 1000 }
// ]

// console.log(Array.from(products, prd => prd)); // Elemanları obje olan bir dizi.
// console.log(Array.from(products, prd => prd.price)); // sadece fiyatlardan oluşan bir dizi.
// console.log(Array.from(products, prd => prd.name == 'Samsung S8')); // true, false, false --> array

// // sadece istediğimiz nesneyi alabilmemiz için.
// console.log(products.find(prd => prd.name == 'Samsung S8')); // Object

// console.log(products.filter(prd => prd.name == 'Samsung S8')); // 1 elemanlı Obje dizisi.

// // Örneğin; Fiyatı 1000 olan nesnenin index numarası nedir ?
// console.log(products.findIndex(prd => prd.price==1000)); // 2 yazdırılır.

// let numbers = ['a','b','c'];
// let entries = numbers.entries();

// for (let i of entries) {
//     console.log(i); // dizinin her bir elemanını temsil eden bir value değeri bir de key (index) değeri geri dönderilir. 
// }
// let keys = numbers.keys();
// for (let i of keys) {
//     console.log(i); // sadece index numaraları yazdırılır.
// }

// let values = numbers.values();

// for (let i of values) {
//     console.log(i); // a, b, c yani sadece değerler yazdırılır.
// }
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype üzerinden array için diğer metodlara ulaşılabilir.

// DERS; ES6 ile gelen maps objesinin kullanımı

// Maps: key/value pairs (collection)
// Map'leri plaka-il bilgisi ya da id - ürün gibi verileri saklarken kullanabiliriz.

// let val;
// const numbers = new Map(); // numbers instance

// numbers.set(1,'one'); // key and value
// numbers.set('2','two');
// numbers.set(3,'three');
// numbers.set('four','four');

// val = numbers;
// console.log(val); // Map nesnesi yazdırılır.
// // elemanlardan birini alalım;
// val = numbers.get(1); // 1 key'ına ait one değeri alınır.
// console.log(val); // one
// val = numbers.get('2'); // two value
// val = numbers.get(3); // three value
// val = numbers.get('four'); // four value
// val = numbers.size; // 4 
// val = numbers.has(1); // 1 key'ına ait eleman var mı yok mu ? true değeri döner.
// val = numbers.delete('four'); // four key'ına ait eleman siler. 
// console.log(numbers); // 3 elemanlı Map
// //numbers.clear(); // tüm elemanları siler.
// for (var [key,value] of numbers) { // numbers.entries() aynı sonucu verir.
//     console.log(key + ' = ' + value);
// }
// for (var key  of numbers.keys()) {
//     console.log(key); // sadece key'ler ekrana yazdırılır.
// }
// for (var value  of numbers.values()) {
//     console.log(value); // sadece value'ler ekrana yazdırılır.
// }

// numbers.forEach((key,value) => console.log(key + ' - ' + value));

// // yeni bir Map objesi oluşralım.
// var first = new Map([
//     [1,'one'],
//     [2,'two'],
//     [3,'three'],
// ]);

// var second = new Map([
//     [4,'four'],
//     [5,'five'],
// ]);

// var merged = new Map([...first,...second]); // iki Map obj'si birleştirildi.

// console.log(merged); 

// Sets ( Collection - Unique Value (Tekil))

// let val;
// var mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(2); // 2 tekrardan eklenmez, çünkü Set içerisinde değerler tekil tutulur.
// console.log(mySet); // Set(2)
// mySet.add('iki');
// mySet.add({ a: 1, b: 2 }); // objeyi de set içerisine ekleyebiliriz.
// var obj = { a: 1, b: 2 };
// mySet.add(obj); // Aynısı set içerisinde olmasına rağmen bu objeyi set içerisine ekleyebiliriz, çünkü referansları (adres farklılığı) farklıdır.
// console.log(mySet);

// // set içerisinde eleman var mı ?
// val = mySet.has(1); //true
// val = mySet.has(obj); //true
// console.log(val);
// val = mySet.size;
// console.log(val); // 5
// // silmek için;
// mySet.delete(1); // 1 değeri silinir.
// console.log(mySet); // 4 elemanlı set
// for (let item of mySet) { //myset.keys() ya da values() yine aynı değerleri vermektedir.
//     console.log(item);
// }

// for (let [key, value] of mySet.entries()) {
//     console.log(key, value);
// }

// // from ile seti direkt diziye çevirebiliriz.

// console.log(Array.from(mySet)); // Array

// let mySet2 = new Set([1, 2, 3, 4]);
// console.log(mySet2);
// // ! filter metodunu dizilerde kullanabiliriz.
// // intersect / kesişimler
// // var intersect = new Set(Array.from(mySet).filter(
// //     x => mySet2.has(x))
// // ); ya da
// var intersect = new Set([...mySet].filter(
//     x => mySet2.has(x))
// );
// console.log(intersect); // sadece 2 değerini vermektedir.

// // diffirences / farklar

// var diffirence = new Set([...mySet].filter(
//     x => !mySet2.has(x))
// );
// console.log(diffirence); // 3 elemanlı bir set vermektedir.

// DERS; Classes ( ES6 ile gelen bir kavramdır. )

// JavaScript'de yeni bir obje oluşturmak için constructor yapılarını kullanmıştık.

// Yeni objeler oluşturmak için prototype'ları görmüştük.

// Class oluşturulduğunda arka planda yine bir constructor oluşturulur.


// ES ile,

// var personES5 = function (name, job, yearofBirth) {
//     this.name = name;
//     this.job = job;
//     this.yearofBirth = yearofBirth;
// }

// Fonksiyonların her bir türetilen objede kopyalanmasını engellemek ve üretilen her objenin prototype'daki fonksiyona ulaşmasını sağlamak için;

// personES5.prototype.calculateAge = function () {
//     return 2019 - this.yearofBirth;
// }

// var arda = new personES5('Arda', 'Atılgan', 2004);
// console.log(arda.calculateAge()); 
// console.log(arda);

// ES6 ile,

// class PersonES6 {
//     constructor(name, job, yearofBirth) {
//         this.name = name;
//         this.job = job;
//         this.yearofBirth = yearofBirth;
//     }
//     calculateAge() {
//         return 2019 - this.yearofBirth;
//     }
// }

// let atakan = new PersonES6('Atakan', 'Atılgan', 1998);
// console.log(atakan.calculateAge()); // 21
// console.log(atakan); // Gelen yapı ES5'deki ile tamamen aynıdır.

// DERS; STATIC METHODS


class PersonES6{
    constructor(name,job,yearofBirth){
        this.name = name;
        this.job = job;
        this.yearofBirth = yearofBirth;
    }
    calculateAge(){
        return 2019 - this.yearofBirth;
    }
    static sayHi(){
        console.log('Hello there');
    }
}

// emel.sayHi(); // hata verir. Instance üzerinden static metodlara ulaşılamaz.
// PersonES6.sayHi(); // class üzerinden direkt ulaşıldı.

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     static distance(a, b) {
//         const dx = a.x - b.x;
//         const dy = a.y - b.y;
//         return Math.hypot(dx, dy);
//     }
// }

// const d1 = new Point(10, 10);
// const d2 = new Point(20, 20);

// console.log(Point.distance(d1, d2)); // ! oluşturulan objeler static metoda gönderilir. Bu nedenle static metodlar kullanılır. Bu static metodları kullanabilmek için bir instance kullanmak gerekmez.


// DERS; Sub Classes / Alt Sınıflar

// Inheritance yolu ile bir sınıfa ait özellikleri başka sınıfa aktarmak.

// ES5 ile daha önceden yapmıştık. Örneğin;

// function PersonES5(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// PersonES5.prototype.sayHi = function() {
//     return ` Hello I'm ${this.firstName} ${this.lastName}`;
// }

// function CustomerES5(firstName,lastName,phone,userName){
//     PersonES5.call(this,firstName,lastName); // CustomerES içerisinde PersonES5'e ait özellikler edinildi.
//     this.phone = phone;
//     this.userName = userName;
// }

// // CustomerES'in PersonES5'in prototype özelliklerine ulaşması için;

// CustomerES5.prototype = Object.create(PersonES5.prototype); // Kalıtım burda olmaktadır. PersonES5'İn prototype'ının içerisindeki özellikler CustomerES5'İn prototype'ı içerisine aktarılmıştır.
// var person = new PersonES5('Ahmet','Koc');
// var customer = new CustomerES5('Arda','Atılgan','64646','ardaatilgan');
// console.log(person);
// console.log(customer.sayHi()); // Hello I'm Arda Atılgan
// console.log(customer); // CustomerES5 den üretilen nesnenin proto kısmında PersonES5'i kullandığı görülmektedir.
// // !! ES6 ile;

// class PersonES6{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     sayHi(){
//         return `Hello I am ${this.firstName} ${this.lastName}`;
//     }    
//     static getTotal(){
//         return 2500;
//     }
// }

// class CustomerES6 extends PersonES6{
//     constructor(firstName,lastName,phone,userName){
//         super(firstName,lastName); // PersonES6 için gerekli olan alanlar gönderildi.
//         this.phone = phone; // CustomerES'e özel alan.
//         this.userName = userName; // CustomerES'e özel alan.
//     }
//     // prototype'ların kopyalanmasına gerek yok.
// }

// let customer1 = new CustomerES6('Atakan','Atılgan','74125','atakanatilgan');

// console.log(customer1.sayHi()); // Hello I am Atakan Atılgan
// console.log(customer1); // proto kısmında PersonES6 kullanmaktadır.
// //console.log(customer1.getTotal()); // hata
// console.log(CustomerES6.getTotal()); // 2500


