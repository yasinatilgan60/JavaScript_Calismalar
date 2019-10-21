// ES6 ile gelen fetch api ile fonksiyonların bizlere promise döndermesine gerek yoktur. Bu işlem fetch api ile gerçekleştirilmektedir. Fetch api xmlhttprequest(ajax)'e alternatiftir.

// text
function getText() {
    fetch('text.txt').then(response => {
        return response.text(); // bir sonraki then'e aktarıldı.
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    })

}
// getText();

// json
function getJson() {
    fetch("products.json").then(response => {
        return response.json(); // gelen sonuç json'a çevrildi.
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    })
}
// getJson();

// external api

function getExternalApi() {
    fetch("https://randomuser.me/api/?results=5").then(response => {
        return response.json();
    }).then(users => {
        var html = "";
        users.results.forEach(user => {
            html += `
                <div>
                    <img src=${user.picture.medium}></img>
                    <div>${user.name.first} ${user.name.last} </div>
                </div>
            `;        
        });
        document.querySelector("#users").innerHTML = html;
    }).catch(error => {
        console.log(error);
    })
}
//getExternalApi();

// randomuser'da post api kullanılmadığı için json sample kullanıldı. https://jsonplaceholder.typicode.com/
// post request için external api kullanmamız gerekir. Yerelde olan bir dosyaya javascript kullanarak veri yazamayız. Bunun için server tabanlı nodejs gereklidir.


var url = 'https://jsonplaceholder.typicode.com/todos/';

var data = {
    method : "POST",
    body : JSON.stringify({ // Server'a gönderildiği için json string formatına dönüştürüldü.
        userIdd : 1,
        title : "sample title",
        body: "sample body"
    }),
    headers : new Headers({
        'content-type' : 'application/json'
    })
}

fetch(url,data).then(response=>{
    console.log(response);
}).catch(error=>{
    console.log(error);
})