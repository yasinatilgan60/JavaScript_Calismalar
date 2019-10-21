// DERS; Course objesinin oluşturulması
// Course constructor
function Course(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}
// UI Constructor
function UI() {

}

UI.prototype.addCourseList = function (course) {
    const list = document.getElementById('course-list');
    var html = `
        <tr>
            <td><img src="img/${course.image}"/></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        </tr>
    `;
    list.innerHTML += html;
}

UI.prototype.clearControls = function () {
    const title = document.getElementById('title').value = "";
    const instructor = document.getElementById('instructor').value = "";
    const image = document.getElementById('image').value = "";
}
UI.prototype.deleteCourse = function (element) {
    if (element.classList.contains('delete')) {
        element.parentElement.parentElement.remove();
    }
}
UI.prototype.showAlert = function(message,className){
    var alert = `
        <div class="alert alert-${className}">
            ${message}
        </div>
    `;
    var row = document.querySelector('.row');
    // beforeBegin, afterBegin, afterEnd, beforeEnd
    row.insertAdjacentHTML('beforeBegin',alert); // row'un öncesinde üste eklemek için beforeBegin seçildi.
    setTimeout(()=>{
        document.querySelector('.alert').remove();
    },3000);
}
document.getElementById('new-course').addEventListener('submit', function (e) {
    // callback function, eventden bir obje almaktadır.
    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;
    //create course object;
    const course = new Course(title, instructor, image);
    // bu objeyi veritabanına kaydedebiliriz ya da arayüzde kullanıcıya gösterebiliriz.
    console.log(course); // course objesi yazdırılır.
    e.preventDefault(); // Sayfanın refresh olması engellendi.
    const ui = new UI(); // bu obje belirli işlemleri yapacak olan fonskiyonları kullanmamızı sağlayacaktır.
    if (title === '' || instructor === '' || image === '') {
        ui.showAlert('Please complete the form', 'warning');
    } else {
        // add course to list
        ui.addCourseList(course);
        // clear controls
        ui.clearControls();
        ui.showAlert('the course has been added','success');
    }
})
// HTML etiketlerine bir objeyi eklememiz gerekiyor.

document.getElementById('course-list').addEventListener('click', function (e) {
    // console.log(e.target);
    // eventi hangi nesne üzerinden yapacağız ?
    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showAlert('the course has been deleted','danger');
})


