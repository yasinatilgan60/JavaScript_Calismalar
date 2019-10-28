// Çıkan yeni özellikler bazı araçlarla kullanılmaktadır.
// Webpack, Babel ve ES6 Module
// node yapısı sayesinde js kodları tarayıcı dışında da çalıştırılabilmektedir.
// npm ile 3. parti yazılımları kullanılabiliyor. Sadece kütüphaneler değil, framework ya da tool da olabilir.

// Babel ES6/7 ile yazılmış kodları ES5'e çevirmektedir.
// Webpack ile farklı modüldeki yapılar birleştirilerek tek bir yapı oluşturulur.


// Mevcut konfigürasyonu her js uygulamasında başlarken tekrar tekrar kullanabiliriz.
// npm init --yes (package.json kurulumu)

// Global olarak bilgisayara paket kurulumu yapılırsa, başka bilgisayara projeyi taşırken o bilgisayara da kurulumun yapılması gerekir.

// npm install webpack --save-dev  ile yerel kurulum..
// npm install webpack-cli --save-dev // komutları içeren paket kurulumu..

// webpack konfigürasyonları için webpack.config.js dosyasını eklemek gerekmektedir.
// webpack.config.js bir module geriye döndürmektedir.
console.log(require('./people'));
//console.log("hello")

// npm run dev ile webpack 
// npm run build ile bundle.js yayınlama modunda çalıştırılmaktadır.