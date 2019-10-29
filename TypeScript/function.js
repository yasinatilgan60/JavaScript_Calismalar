/*
function getAverage(a: number,b: number,c?: number): string { // Fonksiyon 3 adet number değeri parametre alıp, sonucu string olarak geri dönderecektir.
    let total = a+ b;
    let count = 2;
    if (typeof c!== 'undefined') {
        total +=c;
        count ++;
    }
    const result = total / count;
    return 'result: ' + result;
}
// getAverage(10,20,'abc'); // hata verir.
// c? ile fonksiyonun 2 ya da 3 parametre alarak çalışabileceği belirtildi.
*/
// gelen parametreler belli değil ise rest parameters kullanılır.
// 'function' kullanmak yerine arrow function ile daha modern bir kullanım;
var getAverage = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = a.length;
    a.forEach(function (item) {
        total += item;
    });
    var result = total / count;
    return 'result: ' + result;
};
console.log(getAverage(1, 2, 3));
console.log(getAverage(1, 2, 2, 4, 5, 6));
console.log("Hello World");
