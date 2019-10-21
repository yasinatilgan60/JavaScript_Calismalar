// callback'de olduğu gibi sıralama işlemleri promise ile de yapılabilmektedir.

var products = [
    { id: 1, name: 'Samsung S8', price: 2500 },
    { id: 2, name: 'Samsung S7', price: 3500 },
    { id: 3, name: 'Samsung S8', price: 5000 }
]
let added = true;
function addProduct(prd, callback) {
    /** Promise bir anonymous fonksiyon alır.
        Resolve: çözümlenmiş / Reject: hata ile ilgili parametre. 
    **/
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            products.push(prd);
            // let added = false;
            if (added) {
                resolve();
            } else {
                reject('hata : 500');
            }
        });
    })

}

function getProducts() {
    setTimeout(() => {
        products.forEach(product => {
            console.log(product.name);
        });
    }, 1000);
}
var iphone = {
    id: 4,
    name: "Iphone 8",
    price: 6000
}
//addProduct(iphone,getProducts);

addProduct(iphone).then(getProducts).catch(function(err){
    console.log(err);
}); // Promise nesnesi ile ürün eklendikten sonra getProducts fonksiyonu çağrılır. Hata varsa catch ile gösterilir. 