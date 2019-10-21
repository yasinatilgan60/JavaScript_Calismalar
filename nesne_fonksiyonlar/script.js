// DERS 1;
// let val;

// let num = 10;
// // object litaral
// let yasin = {
//     name : 'yasin',
//     age : 26
// }
// //val = num;
// // array
// let numbers = [10, 20, 30];
// // Elemanları objelerden oluşan yapılara constructor (C# -> Sınıf) denir. Constructor'ın her bir kopyasına instances denir.

// val = yasin;
// val = numbers;
// console.log(val);
// console.log(typeof val);

// DERS 2; CONSTRUCTOR OLUŞTURMA
// object literals
// let arda = {
//     name : 'arda',
//     yearOfBirth : 2004,
//     job : 'student'
// }
// Constructor metod.
// function Person(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // console.log(this); This anahtar sözcüğü o anda üretilen kopyanın kendisini temsil eder.
//     this.calculateAge = function(){
//         return 2019 - this.yearOfBirth;
//     }
// }

// Constructor'ı değişken içerisine de atabiliriz.
// let Person = function Person(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function () {
//         return 2019 - this.yearOfBirth;
//     }
// }
// let arda = new Person('Arda', 2004, 'student');
// let cem = new Person('Cem', 1974, 'Driver');

// console.log(cem.name);
// console.log(arda.job);
// console.log(`Arda'nın yaşı ${arda.calculateAge()} 'dir `);
// console.log(cem.calculateAge());

// DERS 3; ProtoTypes
//  Kalıtım / Inheritance nedir ? (JavaScript'de özelliklerin objeler arasında paylaştırılması.)
//  Bir sınıfın (Java, C# vs) kendisiyle ortak özellikleri olan başka bir sınıftan o özellikleri miras almasına denir. JavaScript'de bu kavram ProtoType ile alınır. ProtoType ile özellikler objelerden objelere aktarılabilir. Object'den üretilen objeye prototype ile özellikler aktarılır.

// ProtoType

// let Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
// Person.prototype.calculateAge = function () {

//     return 2019 - this.yearOfBirth;

// } // calculateAge proto kısmına aktarıldı.
// Person.prototype.getName = function () {

//     return this.name;

// }
// Person.prototype.lastName = 'Atılgan';
// let arda = new Person('Arda', 2004, 'Student');
// console.log(arda);
// console.log(arda.calculateAge());
// console.log(arda.getName());

// Her üretilen nesnede calculateAge metodu bulunmaz, fakat protoType sayesinde istediğimizde bu metoda ulaşabiliriz.

//Üretilen örneklerden ana Object içerisindeki metodlara da ulaşabiliriz.

// console.log(arda.hasOwnProperty('job')); // true değeri dönmektedir.
// console.log(arda.hasOwnProperty('lastName')); // false döner, çünkü lastName alanı protoType içerisindedir.

// DERS Constructor / Prototype örnek uygulama

// Employee Constructor'ı tanımlama

// function Employee(name, salary) {
//     if (!(this instanceof Employee)) { // eğer Employee'den üretilen bir nesne değil ise;
//         return new Employee(name, salary);
//     }
//     this.name = name,
//     this.salary = salary
// }
// let atakan = Employee('Atakan', 6000);
// let arda = new Employee('Arda', 6500);
// // Her obje ile bir metod üretmek yerine ana Employee'e constructor'ına özel bir fonksiyon prototype'a eklenir ve üretilen her objeden bu fonksiyona ulaşılabilir.
// Employee.prototype.calculateSalaryandTax = function () {
//     var month = new Date().getMonth() + 1;
//     var sumSalary = month * this.salary;
//     var sumTax;
//     if (sumSalary < 20000)
//         sumTax = sumSalary * 0.20;
//     else if (sumSalary <= 30000)
//         sumTax = sumSalary * 0.25;
//     else
//         sumTax = sumSalary * 0.27;
//     return {
//         tax : sumTax,
//         paid : sumSalary - sumTax
//     }
// }
// var arda_salary = arda.calculateSalaryandTax();
// console.log(`${arda.name} isimli çalışan ${arda_salary.tax} TL vergi kesintisi ile toplamda ${arda_salary.paid} TL maaş almıştır.`);
// console.log(atakan.calculateSalaryandTax());

//  DERS: Objects & Functions

// Creating Objects ; Object.create
//JavaScript'de kalıtım prototype ile mümkün olmaktadır. 
//  let personProto = {
//      calculateAge : function(){ // Bu fonksiyon objenin kendi elemanı olur.
//          return 2019 - this.yearOfBirth;
//      }
//  }
//  console.log(personProto);

//  let arda = Object.create(personProto); // calculateAge arda nesnesinin proto kısmına aktarılır. Yani var olan objenin özelliklerini yeni objenin proto kısmına aktarak, yeni objeye yeni özellikler kazandırabiliriz. 
//  arda.name = 'Arda';
//  arda.yearOfBirth = 2004;
//  arda.job = 'student';
//  arda.city = 'Tokat';
//  let atakan = Object.create(personProto,{
//      name : {value: 'Atakan'},
//      yearOfBirth : {value: 1998},
//      job : {value :'student'}
//  });
//  console.log(arda.calculateAge());
//  console.log(arda);
//  console.log(atakan);
//  console.log(atakan.calculateAge());

// DERS ; Prototypal Inheritance / Prototype ile Kalıtım ( Farklı olan 2 constructor'ın birbirine özellik aktarması.)

let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function(){
    return 2019 - this.yearOfBirth;
}

let Teacher = function(name, yearOfBirth, job, subject ){
    Person.call(this,name,yearOfBirth,job); // Inheritance
    this.subject = subject; // subject Teacher'a özgüdür.
}





//console.log(atakan.calculateAge()); // hata
// Person contructor'ının proto kısmını Teacher'a aktarmak;
// Inherit the Person prototype methods
// Teacher.prototype = Object.create(Person.prototype); 
// // set Teacher constructor
// Teacher.prototype.constructor = Teacher;
// Teacher.prototype.greeting = function(){
//     return 'Hello, My name is ' + this.name;
// }
// let atakan = new Teacher('Atakan',1998,'teacher','math');
// console.log(atakan);
// console.log(atakan.calculateAge()); // calculateage proto kısmında yer alır.
// console.log(atakan.greeting()); // Teacher'a özel metod

// DERS Built-in Constructors

//String
// var str1 = 'Sadık';
// var str2 = new String('Sadık');

// console.log(str1); // string ekrana yazar.
// console.log(typeof str1);
// console.log(str2); // String objesi ekrana yazar.
// console.log(typeof str2);

// if (str1 === 'Sadık') { // === ile tip kontrolü de yapılır.
//     console.log('evet');
// } else {
//     console.log('hayır');
// }

// String.prototype.repeat = function (n) {
//     return new Array(n + 1).join(this);
// }
// console.log('yasin'.repeat(3));
// // Number
// var num1 = 10; // primitive
// var num2 = new Number(10); // object

// // Boolean
// var bool1 = true; // primitive
// var bool2 = new Boolean(true); // object

// // Object
// var obj1 = {
//     name: 'Sadık'
// }
// var obj2 = new Object({
//     name: 'Sadık'
// });

// // Array

// var arr1 = ['ada', 'atakan', 'arda', 'yasin'];
// var arr2 = new Array('ada', 'atakan', 'arda', 'yasin');


// Array.prototype.remove = Array.prototype.remove || function (member) {
//     var index = this.indexOf(member);
//     if (index > -1) {
//         this.splice(index, 1);
//     }
//     return this;
// }

// console.log(arr1.remove('arda'));

// DERS Inheritance Uygulama

// let Person = function (name) {
//     this.name = name;
// }

// Person.prototype.introduce = function () {
//     console.log('hello my name is ' + this.name);
// }

// // Teacher Constructor
// let Teacher = function (name, branch) {
//     //this.name = name; 
//     Person.call(this, name); //Teacher constructor'ından üretilen this nesnesi ortak özellikler için Person ile kullanıldı.( Inheritance )
//     this.branch = branch;
// }

// Teacher.prototype = Object.create(Person.prototype); // Artık Teacher üzerinden introduce metoduna ulaşılabilmektedir. Person'un prototype'ı Teacher'a atıldğı için Person'un constructor'u Teacher'a geçti. Bunu düzeltmek için;
// Teacher.prototype.constructor = Teacher;
// Teacher.prototype.teach = function () {
//     console.log('I teach ' + this.branch);
// }

// // Student Constructor

// let Student = function (name, num, lesson) {
//     Person.call(this, name);
//     this.num = num;
//     this.lesson = lesson;
// }
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.study = function () {
//     console.log('My number is ' + this.num + ' I study ' + this.lesson);
// }

// // Headmaster Constructor

// let Headmaster = function (name, branch) {
//     Teacher.call(this, name, branch);
// }
// Headmaster.prototype = Object.create(Teacher.prototype);
// Headmaster.prototype.constructor = Headmaster;
// Headmaster.prototype.shareTask = function () {
//     console.log('I have already shared all the work.');
// }

// let p1 = new Person('Arda');
// p1.introduce();

// let t1 = new Teacher('Yasin', 'math');
// t1.introduce();
// t1.teach();

// let s1 = new Student('Ali', 500, 'Turkish');
// s1.introduce();
// s1.study();

// let h1 = new Headmaster('Kamil', 'Turkish');
// h1.introduce(); // Person
// h1.teach(); // Teacher
// h1.shareTask(); // Headmaster

// console.log(h1);

// Ders; Primitive Types & Objects

// var a = 10;
// var b = a;
// // Primitivi tiplerde değişkenler içerisinde yapılan değişiklikler birbirini etkilemez, çünkü Stack içerisinde ayrı ayrı alanlarda tutulmaktadır.
// console.log(a);
// console.log(b);

// var obj1 = {
//     name: 'Yasin',
//     age: 26
// }

// var obj2 = obj1; // Stack içerisindeki adresler eşitlendi.
// // Objectlerde stack içerisinde adres tutar. Bu adres Heap içerisindeki alanı işaret eder.
// obj1.age=27; // Heap bölgesindeki alanda değişiklik yapıldı.
// console.log(obj1.age); // 27 yazar.
// console.log(obj2.age);  // 27 yazar. !!
//  // ----
// var num = 10;
// var account = {
//     name: 'Atakan',
//     accountNumber : '741258'
// }

// function update(a,b){
//     // b account'un adresini taşır. b'de yapılacak olan değişiklik account'u da etkiler.
//     a=100; // num'ın kopyası olan a'nın değeri değişir.
//     b.accountNumber = '99999'; // Heap kısmındaki alanın içerisinde değişiklik yapılır. 
// }

// update(num,account);

// console.log(num); // 10 yazar, 100 değil. Farklı alanda değişiklik yapıldı. Primitive type
// console.log(account); // accountNumber 9999 olarak değişir. Object.

// // --------
// var products = [
//     {name : 'product name', price:1000},
//     {name : 'product name', price:1000},
//     {name : 'product name', price:1000},
//     {name : 'product name', price:1000}
//     // ...
// ]

// function filterProducts(prd){
//     // Products obje olduğu için kopyalama yerine adres referans alınarak işlem yapıldı. prd products'ın adresini tutar.
// }

// filterProducts(products);

// --------

// DERS; Callback Functions
// let val;
// function multipleByTwo(a, b, c, callback) {
//     let arr = [];
//     // null ya da fonksiyon mu olup olmadığına bakmak için;
//     if (callback && typeof callback === 'function') {
//         for (let i = 0; i < 3; i++) {
//             arr[i] = callback(arguments[i] * 2);
//             // Fonksiyona gönderilen değerlere arguments ile ulaşabiliriz.
//         }
//     }
//     return arr;
// }
// function addOne(a) {
//     return a + 1;
// }
// function addTwo(a) {
//     return a + 2;
// }
// val = multipleByTwo(2, 8, 4, addTwo);
// // anonymous (İsmi olmayan tek kullanımlık fonksiyondur.) fonksiyonda gönderilebilir. 
// val = multipleByTwo(2, 4, 6, function (a) {
//     return a + 20;
// });
// console.log(val);

// Ders; Immediate Functions (Sadece uygulama başında 1 kez çalıştırılan fonksiyonlar.)

// (function(){

// })();

// (function(){

// }());

// (function (name) { // anonymous function (immediate) / sadece 1 kez çalışır.
//     var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     var today = new Date();

//     var msg = 'Welcome ' + name + ', today is ' + days[today.getDay()] + '.';
//     console.log(msg);
// }('Elvan'));

// DERS; Functions that Return Functions

// function question(hobby) {
//     switch (hobby) {
//         case 'car':
//             return function (name) {
//                 console.log(name + ', do you have a car?');
//             }
//             break;
//         case 'book':
//             return function (name) {
//                 console.log(name + ', what is your favourite book ?');
//             }
//             break;
//         case 'software':
//                 return function(name,type){
//                     console.log(name + ', are you interested in ' + type + '?');
//                 }
//                 break;
//         default:
//             return function(name,){
//                     console.log(name + ', how are you ?');
//                 }
//     }
// }

// var carQuestion = question('car');

// carQuestion('Yasin');
// carQuestion('Emre');

// var bookQuestion = question('book');
// bookQuestion('Can');
// bookQuestion('Sergen');

// var softwareQuestion = question('software');
// softwareQuestion('Ali','Python');

// DERS; GETTER & SETTER (ES5 ile gelen bir özellik.)
// Obje içerisindeki metodları get ve set ile yönetebiliriz.
// const person = {
//     firstName: 'Yasin',
//     lastName: 'Atılgan',
//     // get fullName(){
//     //     return `${this.firstName} ${this.lastName}`;
//     // },
//     // set fullName(value){
//     //     const parts = value.split(' ');
//     //     this.firstName=parts[0];
//     //     this.lastName=parts[1];
//     // }
// }
// Object.defineProperty(person,'fullName',{
//     get: function(){
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set: function(value){
//         const parts = value.split(' ');
//         this.firstName=parts[0];
//         this.lastName=parts[1];
//     }
// })

// Object.defineProperty(person,'age',{
//     value: 50,
//     writable : true // yazılabilir hale geldi. set active
// })
// person.age = 60;
// // person.firstName = 'Atakan'; ile değiştirmek yerine;
// // person.fullName = 'Bahadır Atılgan';
// // console.log(person.fullName);
// console.log(person.age);

// DERS; Call, Apply & Bind

var welcome = function(){
    console.log('Welcome ' + this.name);
}
// welcome(); // obje olmadığı için this window objesidir.

// // arda isminde bir obje tanımlayalım;
//var arda = { name: 'arda' };
//var atakan = { name: 'atakan' };

// welcome.call(arda); // 'welcome arda' yazar.
// welcome.call(atakan); // 'welcome atakan' yazar.
// welcome.apply(arda); // 'welcome arda' yazar.
// welcome.apply(atakan); // 'welcome atakan' yazar.
// // metod parametre almıyor ise apply ve call kullanımı aynıdır.

// // bind kullanımı 
// // fonksiyonu referans alarak yeni welcomeArda fonksiyonu oluşturuldu.
// welcomeArda = welcome.bind(arda);

// welcomeArda(); // 'welcome arda' yazar.

// --- call ve apply arasındaki fark nedir ?
// fonksiyon iki parametre alsın.
// var welcome = function(a,b){
//     console.log('Welcome ' + this.name + ', are you interested in ' +a+' and '+b + ' ?');
// }
// welcome.call(arda,'java','python');
// welcome.call(atakan,'javascript','c#');
// // apply'de parametreleri dizi şeklinde göndermemiz gerekmektedir.
// welcome.apply(arda,['java','python']);
// welcome.apply(atakan,['javascript','c#']);

// welcomeArda = welcome.bind(arda);
// welcomeArda('html','css');

// DERS; Call, Aplly & Bind ile ilgili bir örnek;
// call, apply ve bind function prototype ile gelmiştir.
// Demo : Numeric Range

// var num = {
//     min: 0,
//     max: 100,
//     checkNumericRange: function (value) {
//         if (typeof value !== 'number') {
//             return false;
//         } else {
//             return value >= this.min && value <= this.max;
//         }
//     }
// }
// console.log(num.checkNumericRange(50));

// var num2 = { min: 80, max: 90 };
// console.log(num.checkNumericRange.call(num2,85)); // true
// console.log(num.checkNumericRange.apply(num2,[78])); //false

// var numCheckNumericRange = num.checkNumericRange.bind(num2);
// console.log(numCheckNumericRange(85));

// DERS; Error Handling / Try,Catch (Hata yakalama işlemleri)

// Çalışma zamanında gelen hatalar olabilir.
// kullanıcı kaynaklı hatalar,
// Error Object
//Reference Error
//Type Error
//Syntax Error
//URIError
// var user = {
//     name: 'Yasin'
// }
// try {
//     //console.log(myFunction());
//     console.log(user.name); // Yasin
//     //console.log(user.email); // undefined, fakat bunun yerine hatayı kendimiz kullanıcıya istediğimiz şekilde gösterebiliriz.
//     if(!user.email){
//         throw new SyntaxError('User has no email.');
//         //catch içerisi de buna uygun mesajları gönderir.
//         // SyntaxError yerine temel olan Error objeside gönderilebilir.
//     }
// } catch (e) {
//     console.log(e);
//     console.log(e.message); // sadece mesaj yazdırılır.
//     console.log(e.name); // hatanın türü -> Reference Error.
//     console.log(e instanceof ReferenceError); //true
//     console.log(e instanceof TypeError); // false
//     console.log(e instanceof SyntaxError); 
//     console.log(typeof e); //object
// }
// finally{
//     console.log('try içerisinde hata olsa da olmasa da bu block çalışır. ');
// }

// //console.log(myFunction()); // Reference error.

// DERS; Error Handling Uygulama

// document.getElementById('myBtn').addEventListener('click',
//     function (e) {
//         var name = document.getElementById('name');
//         var age = document.getElementById('age');
//         var errors = document.getElementById('errors');
//         errors.innerHTML = ''; // Önceki hataları silmek için.
//         try {
//             if (name.value.length === 0) {
//                 throw new Error('Name is required');
//             }
//             if (name.value.length > 20) {
//                 throw new Error('Name is too long');
//             }
//             // if(age.value.length==0){
//             //     throw new Error('Age is required');
//             // }
//             if (isNaN(age.value)) {
//                 throw new Error('Age is not numeric');
//             }
//             console.log('Form is submitted.');
//         } catch (err) {
//             errors.innerHTML = err.message;
//         }finally{
//             name.value = '';
//             age.value = '';
//         }
//         e.preventDefault();
//     });




