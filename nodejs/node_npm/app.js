// Uygulama içerisindeki paketleri yönetmek için package.json dosyası kullanılmaktadır.
// package.json dosyasını oluşturmak için npm init komutu kullanılmaktadır.
// npm init --y ile soru sormadan direkt package.json dosyası oluşturulur.
// 'npm i underscore' ile underscore isimli kütüphane kurulur ve package.json'da dependencies kısmına eklenir.

// Yüklü paketi kullanabilmek için;

var _ = require('underscore');

var numbers = [10, 5, 100, 2, 1000];
// https://underscorejs.org/#max
console.log(_.max(numbers)); // 1000

// npm i webpack --save-dev sadece proje geliştirme aşamasında kullanılır.
// dependencies; yerel paketler anlamına gelir. 
// Bir paketi sadece bir projede değil, tüm projelerde kullanmak istiyorsak global olarak eklememiz gerekir.
// Örneğin; global olarak eklememiz için; npm i live-server --global
// live-server ile live-server moduna geçilir. ctrl + c ile çıkılır.
// npm list -g ile global paketler listelenir.
// npm list -g --depth 0 ile sadece paketler görüntülenir.
// paket isminin okunuşu--> 4.25.1 / major.minor.patch // hatalar vs patch... özellik vs minor... köklü değişiklikler vs major. ^ işareti ile minor ya da patch kısmında değişiklik olursa güncelleme yapılması sağlanmış olur.
// npm uninstall jqeury ile jquery paketi silinmiş olur.
