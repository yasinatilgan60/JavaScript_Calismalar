// genel işlemlerin yapılacağı js dosyasıdır. profile.js, ui.js ile js kodları parçalanarak daha düzenli bir görünüm elde edilmiştir.
const profile = new Profile();
const ui = new UI();
const searchProfile = document.querySelector('#searchProfile');

// searchProfile'e key up olayını eklemek için;

searchProfile.addEventListener('keyup', (event) => {
    ui.clear();
    let text = event.target.value; // event'in gerçekleştiği yerdeki value değeri text değişkenine aktarıldı.
    if (text !== '') {

        profile.getProfile(text).then(res => {
            //ui.clear();
            if (res.profile.length === 0) {
                ui.showAlert(text);
            } else {
                //console.log(res.profile[0]); // Array (object ve length'e sahip) yerine sadece kullanacağımız objeyi aldık.
                console.log(res);
                ui.showProfile(res.profile[0]);
                ui.showTodo(res.todo);

            }
        }).catch(err=>{
            ui.showAlert(text);
        });
    }
})