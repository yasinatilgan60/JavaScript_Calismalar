
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
let a: number = 5; // değer ataması sonradan da yapılabilmektedir.
let b: string = 'a';
let c: boolean = true;
let d: any;
let e: number[] = [4, 5, 6];
let f: Array<number> = [1, 2, 3];
let g: any[] = [1, 'a', true];
let h: [string,number,boolean] = ['a',5,false]; // tuple

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

// enum kullanımı;

enum Payment {kredi=0, havale=7, kapidaOdeme=2, eft=3};

let kredi = Payment.kredi; // 0
let havale = Payment.havale; // 1
let kapidaOdeme = Payment.kapidaOdeme; // 7
let eft = Payment.eft; // 3

