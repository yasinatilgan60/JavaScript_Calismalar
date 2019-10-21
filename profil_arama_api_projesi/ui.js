// ui.js ile api'den aldığımız verileri sayfada göstereceğiz. Bunun için de bir class oluşturulacaktır.
// Profil bilgilerinin tasarıma aktarılması.


class UI {
    constructor() {
        this.profileContainer = document.querySelector("#profileContainer");
        this.alert = document.querySelector("#alert");
    }

    showProfile(profile) {
        // bootstrap sınıflarını kullanarak yeni yapıyı oluşturalım..
        this.profileContainer.innerHTML = `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150" class="img-thumbnail"></a>
                    </div>
                    <div class="col-md-9">
                        <h4>Contact</h4>
                        <ul class="list-group">
                            <li class="list-group-item">name: ${profile.name}</li>
                            <li class="list-group-item">username: ${profile.username}</li>
                            <li class="list-group-item">email: ${profile.email}</li>
                            <li class="list-group-item">address: address:
                                street: ${profile.address.street}
                                suite: ${profile.address.suite}
                                city: ${profile.address.city}
                                zipcode: ${profile.address.zipcode}
                            </li>
                            <li class="list-group-item">phone: ${profile.phone}</li>
                            <li class="list-group-item">webiste: ${profile.website}</li>
                            <li class="list-group-item">name: ${profile.company.name}</li>
                        </ul>
                        <h4 class="mt-3">ToDo List</h4>
                        <ul id="todo" class="list-group">

                        <ul>
                    </div>
                </div>
            </div>
        `;
    }
    showTodo(todo){
        let html='';
        todo.forEach(item => {
            if (item.completed) {
                html+=`<li class="list-group-item bg-success">${item.title}</li>`;
            } else {
                html+=`<li class="list-group-item bg-secondary">${item.title}</li>`;
            }
        });
        this.profileContainer.querySelector("#todo").innerHTML = html;
        
    }
    showAlert(text) {
        this.alert.innerHTML = `${text} is not found.`;
    }
    clear() {
        this.alert.innerHTML = '';
        this.profileContainer.innerHTML = '';
    }
}