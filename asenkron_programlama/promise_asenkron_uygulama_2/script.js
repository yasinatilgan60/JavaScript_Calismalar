// XMLHttpRequest ile promise'ları (ardışık işlemlerde kullanılan) geri döndüren fonksiyon
// Fetch Api içerisinde nasıl bir senaryo oynanmaktadır ?
let myObj = {
    url :"https://randomuser.me/api/?results=5"
}

let request = obj =>{
    return new Promise((resolve,reject)=>{
        // Bir request oluşturmak;
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET",obj.url);
        // headers set edilmiş ise;
        if (xhr.headers) {
            Object.keys[obj.headers].forEach(key => {
                xhr.setRequestHeader(key,obj.headers[key]);
            });
        }

        xhr.onload = () =>{
            if (xhr.status>=200 && xhr.status<300) {
                resolve(xhr.response);
            }else{
                reject(xhr.statusText);
            }
        }
        xhr.onerror = () =>{
            reject(xhr.statusText);
        }
        // send POST işlemi yapılacağı zaman parametre kullanır. GET işleminde parametre kullanılmaz.
        xhr.send(obj.body); // body obje içerisinde olmadığı için null değeri gönderilir ve GET metodu çalışır.
    });
}
// Döndürülen Promise then ile yakalanmaktadır.
let buildHtml = function(data){
    let users = JSON.parse(data);
    let html = "";
    users.results.forEach(user =>{
        html += `
        <div>
            <img src="${user.picture.medium}"></img>
            <div>${user.name.title} ${user.name.first} ${user.name.last}</div>
        </div>
        `;
    });
    document.querySelector("#users").innerHTML = html;
    return Promise.resolve("Html is loaded.");
}
request(myObj).then(buildHtml).then(msg => {
    console.log(msg);
}).catch(error =>{
    console.log(error);
});

// Burada kullanılan api dışında başka apiler de kullanılabilir. Örneğin; MetaWeather Api
// Burada yapılan işlemler ES6 ile FETCH API aracılığı ile yapılmaktadır.