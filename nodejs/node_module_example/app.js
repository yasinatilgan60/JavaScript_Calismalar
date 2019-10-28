/*
var message = "hello world!";
console.log(window); // window global objedir. Tarayıcılarda çalışır, nodejs'de tanımlı değildir.
console.log(window.message); // window tanımlanan message değişkenini de içinde barındırmaktadır.

// browser

// node
 // node'da console, setTimeout vs gibi her yerden ulaşabildiğimiz özellikleri barındıran global objesi vardır.
// IIFE


var module1= (function(){
    // function scope    
    return{

    }
})();
*/

// node

//console.log(module); // Terminalde module görüntülenmektedir.
// exports alanı module üzerinden ulaşılabilir özellikleri barındırmaktadır.

// Örneğin; logger.js'in modülüne ulaşmak için...

const logger = require('./logger');
logger.log('hello world!'); // logger.js modülündeki log fonksiyonu ile ekrana hello world! yazdırılmaktadır. (node app.js)
console.log(logger.name);

// Node içerisindeki modül yapısı IIFE yapısıdır.

