// AJAX ile callback fonksiyonlarını kullanarak işlemleri istediğimiz sırayla yapabiliriz.

var products = [
    {id:1,name:'Samsung S8',price:2500},
    {id:2,name:'Samsung S7',price:3500},
    {id:3,name:'Samsung S8',price:5000}
]
let added = true;
function addProduct(prd,callback) {
    if (added) {
        setTimeout(() => {
            products.push(prd);
            callback(null,prd); // ekleme işlemi bittikten sonra fonksiyon çağrılır.
        }, 2000);
    } else {
        callback('500',prd);
    }
    
    
}

function getProducts(){
    setTimeout(() => {
        products.forEach(product => {
            console.log(product.name);
        });
    }, 1000);
}
var iphone = {
    id:4,
    name: "Iphone 8",
    price: 6000
}
//addProduct(iphone,getProducts);

addProduct(iphone,function(err,data) {
    if (err) {
        console.log('hata',+err);
    }else{
        console.log(data);
    }
});
