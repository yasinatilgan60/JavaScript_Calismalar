// Course Class
class Course {
    constructor(title, instructor, image) {
        this.courseId = Math.floor(Math.random() * 100000); // local storage'dan id ile silmek için course'a id üretildi.
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}
// UI Class
class UI {
    addCourseList(course) {
        const list = document.getElementById('course-list');
        // delete butonuna local storage'dan da silme işlemi için id bilgisi aşağıda eklenmiştir.
        var html = `
        <tr>
            <td><img src="img/${course.image}"/></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" data-course-id="${course.courseId}" class="btn btn-danger btn-sm delete">Delete</a></td>
        </tr>
    `;
        list.innerHTML += html;
    }
    clearControls() {
        const title = document.getElementById('title').value = "";
        const instructor = document.getElementById('instructor').value = "";
        const image = document.getElementById('image').value = "";
    }
    deleteCourse(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
            return true;

        }
    }
    showAlert(message, className) {
        var alert = `
        <div class="alert alert-${className}">
            ${message}
        </div>
    `;
        var row = document.querySelector('.row');
        // beforeBegin, afterBegin, afterEnd, beforeEnd
        row.insertAdjacentHTML('beforeBegin', alert); // row'un öncesinde üste eklemek için beforeBegin seçildi.
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

}
// Storage Class; Sayfa içerisindeki verileri saklamak için kullanırız.
class Storage {
    // Storage'dan  bir nesne üretip işlem yapmayacağımız için
    // static metodlar tanımlayacağız.
    static getCourses() {
        let courses;
        if (localStorage.getItem('courses') === null) {
            courses = [];
        } else {
            // Local Storage içerisinde veriler JSON olarak değil, JSON stringi şeklinde saklanırlar. Burada JSON şeklinde verileri almak için JSON.parse kullanılır. 
            courses = JSON.parse(localStorage.getItem('courses'));
        }
        return courses;
    }
    static displayCourses() {
        // getCourses'dan aldığı bilgileri gösterir.
        const courses = Storage.getCourses();
        courses.forEach(course => {
            const ui = new UI();
            ui.addCourseList(course);
        });


    }
    static addCourse(course) {
        const courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem('courses', JSON.stringify(courses));
    }
    static deleteCourse(element) {
        if (element.classList.contains('delete')) {
            const id = element.getAttribute('data-course-id');
            const courses = Storage.getCourses();
            courses.forEach((course, index) => {
                if (course.courseId == id) {
                    courses.splice(index, 1); // index'den itibaren bir eleman sil. 
                }
            });
            localStorage.setItem('courses', JSON.stringify(courses));
        }
    }
}
document.addEventListener('DOMContentLoaded', Storage.displayCourses);
document.getElementById('new-course').addEventListener('submit', function (e) {
    // callback function, eventden bir obje almaktadır.
    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;
    //create course object;
    const course = new Course(title, instructor, image);
    console.log(course);
    // bu objeyi veritabanına kaydedebiliriz ya da arayüzde kullanıcıya gösterebiliriz.
    console.log(course); // course objesi yazdırılır.
    e.preventDefault(); // Sayfanın refresh olması engellendi.
    const ui = new UI(); // bu obje belirli işlemleri yapacak olan fonskiyonları kullanmamızı sağlayacaktır.
    if (title === '' || instructor === '' || image === '') {
        ui.showAlert('Please complete the form', 'warning');
    } else {
        // add course to list
        ui.addCourseList(course);
        // save to LS
        Storage.addCourse(course);
        // clear controls
        ui.clearControls();
        ui.showAlert('the course has been added', 'success');
    }
})
// HTML etiketlerine bir objeyi eklememiz gerekiyor.

document.getElementById('course-list').addEventListener('click', function (e) {
    // console.log(e.target);
    // eventi hangi nesne üzerinden yapacağız ?
    const ui = new UI();

    // delete from LS
    if (ui.deleteCourse(e.target)) {
        Storage.deleteCourse(e.target);
        ui.showAlert('the course has been deleted', 'danger');
    }
})
