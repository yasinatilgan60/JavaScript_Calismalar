document.querySelector("#getEmployee").addEventListener('click', loadEmployee);

function loadEmployee() {
    var loadImage = document.querySelector(".loading");
    loadImage.style.display = 'block'; // loading imleci ekranda gösterilir.
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "employees.json", true); // get ile server'dan json dosyası alındı.
    
    setTimeout(() => {
        // onload: sorgunun sonlandığını gösterir.
        xhr.onload = function () {
            loadImage.style.display = "none"; // loading imleci kapatıldı.
            if (this.status === 200) { // sorgu başarılı mı?
                //console.log(this.responseText);// string türünde server'dan gelen veri yazdırıldı.
                // JSON server'a giderken text olarak gönderilir ya da alınır.
                //console.log(JSON.parse(this.responseText)); // string objeye dönüştürüldü.
                let employees = JSON.parse(this.responseText);
                let html="";
                employees.forEach(employee => {
                    html += `<tr>
                                <td>${employee.firstName}</td>
                                <td>${employee.lastName}</td>
                                <td>${employee.age}</td>
                                <td>${employee.retired}</td>
                            </tr>`;
                });
    
                document.querySelector("#employees").innerHTML = html;
            }
            
        }
        xhr.send(); // sorgu gönderildi.
    }, 1000);
    
    
}