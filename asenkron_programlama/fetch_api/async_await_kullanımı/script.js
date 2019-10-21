// async ve await de callback ve  promise gibi işlemleri sıraya almada kullanılır.

function fn(){
    return "hello";
}

console.log(fn());

// promise 

function fnPromise(){
    return Promise.resolve("hello promise");
}

fnPromise().then(res => {
    console.log(res);
}).catch(error => {
    console.log(error);
})

// Dışarıya bir promise göndermek yerine async kullanımı;
async function fnAsync(){ // async ile işaretlenmiş bir asenkron fonksiyon dışarıya otomatik olarak promise nesnesini gönderir. Bu gönderimi aynı promise'da olduğu gibi then ile yakalayabiliriz.
    return "hello async";
}
console.log(fnAsync()); // Promise dönderildi. Status : resolved.
fnAsync().then(res => {
    console.log(res);
})

let isError = true;
function getCategory(){
    return new Promise((resolve,reject) =>{
        // işlem bir saniye bekletildi.
        if(!isError){
            setTimeout(()=>{
                resolve('phone');
            },1000);
        }else{
            reject('hata');
        }
        
    })
}

function getProducts(category){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`2 phone in ${category}`);
        },1000);
    })
}



getCategory().then(getProducts).then(res =>{
    console.log(res);
}).catch(error => {
    console.log(error); // isTrue true ise reject çalıştırılır ve error yazdırılır.
})


// aynı işlemin async ile yapılması;

async function getProduct(){
    // then catch'e benzer try catch ile hatalar yakalanabilir.
    try {
        let category = await getCategory(); // await ile resolve nesnesi beklenir.
        let result = await getProducts(category);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
getProduct();