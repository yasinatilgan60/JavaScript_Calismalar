/*
console.log("hello world!")
*/

// npm install webpack-dev-server --save-dev ile değişiklikten sonra server'ın yeniden başlatılması gerekmemektedir.
// webpack dev server'ın çalıştırılması için package.json'da 'scripts' içerisine start isminde script yazılır.
// npm run start ile çalıştırılır.
// index.html src tarafından dist içerisinde yönetilerek dinamik bir yapı sağlanmalıdır.
// Bunun için npm install html-webpack-plugin --save-dev ile paket kurulumu yapılmalıdır.
// Sadece html için değil farklı amaçlar için farklı plugin oluşturulabilir.

// Babel ile ES6 / ES7 ile yazılan js kodları her tarayıcının anlayabileceği ES5 kodlarına çevrilecektir.

// npm install --save-dev babel-loader @babel/core
// loader js uzantılı dosyaları tarar ve core ise temel görevleri yerine getirmektedir.
// preset ile babel'İn yapacağı işlem tanımlanır. (ES6, React ya da TypeScript çevirimleri gibi...)
// preset-env ile yazılan ES6 / ES7 ile yazılan js kodları ES5 ' e çevrilir.
// npm install babel-polyfill --save es7 ile gelen async ve await komutlarının yorumlanması da sağlanmaktadır. (Çalışma zamanında da kullanılabilmesi için dependencies'e kuruldu.)

/*
let name = "Arda Atılgan";

const sayHello = ()=> {
    console.log("hello there");
}

sayHello();
console.log(name);
*/

// Module ES6 ile lib.js ile export edilmiş public alanlara buradan erişilebilmektedir.

/* 1. Kullanım
import {sum,multiply} from './lib';

console.log(sum(1,4,7));
console.log(multiply(7,8,5));
*/
// 2. Kullanım
/*
import * as lib from './lib'; // tamamının kullanımı;

console.log(lib.sum(1,2,3));
console.log(lib.multiply(5,2,10));
*/

// 3. Kullanım

import myLib from './lib';
const lib = new myLib();

console.log(lib.sum(1,5,6,8)); // 12
console.log(lib.multiply(1,2,3,4,5,6)); // 720
console.log(lib.PI); // 3.146

