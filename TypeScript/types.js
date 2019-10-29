/*
let number = 5;
number = 'a'; // typescript burada type hatası vermektedir.
*/
/*
let a; // any tip farklı değerde tipleri değer olarak alabilmektedir.
//let a:number; // a number tipinin haricindeki bir değeri alamayacaktır.
a=5;
a = 'a';
a = true;
*/
// TypeScript dosyaları derleyici tarafından direkt olarak çalıştırılmaz. tsc ile 'js' uzantılı dosyaya çevirmek gerekir.
var a = 5; // değer ataması sonradan da yapılabilmektedir.
var b = 'a';
var c = true;
var d;
var e = [4, 5, 6];
var f = [1, 2, 3];
var g = [1, 'a', true];
var h = ['a', 5, false]; // tuple
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
// enum kullanımı;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 7] = "havale";
    Payment[Payment["kapidaOdeme"] = 2] = "kapidaOdeme";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
;
var kredi = Payment.kredi; // 0
var havale = Payment.havale; // 1
var kapidaOdeme = Payment.kapidaOdeme; // 7
var eft = Payment.eft; // 3
