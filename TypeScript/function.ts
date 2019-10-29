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
const getAverage = (...a: number[]): string =>{ // void ile geri dönüş değerinin olmayacağı belirtilebilir.
    let total = 0;
    let count = a.length;
    a.forEach(item=> {
        total += item;
    })
    
    const result = total / count;
    return 'result: ' + result;
}


console.log(getAverage(1,2,3));
console.log(getAverage(1,2,2,4,5,6));
console.log("Hello World");