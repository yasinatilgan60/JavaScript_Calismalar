// Slider için bir veri deposu, bunun için de bir obje oluşturmamız gerekmektedir.
var models = [
    {
        name: 'BMW 418d',
        image: 'img/bmw.jpg',
        link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name: 'Mazda CX-3',
        image: 'img/mazda.jpg',
        link: 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name: 'Volvo S60',
        image: 'img/volvo.jpg',
        link: 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name: 'Skoda Superb',
        image: 'img/skoda.jpg',
        link: 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name: 'Honda Civic',
        image: 'img/honda.jpg',
        link: 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
]
var index = 0;
var slaytCount = models.length;
var interval;
// özellikleri içerisinde barındıran settings objesi.
var settings = {
    duration: '2000',
    random: true
}
init(settings); // Objenin kopyası değil, adresi fonksiyona gönderilir.
// sağ ve sol butonlar için bir click eventi atanmalıdır.
document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
    console.log(index);
})
document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
    console.log(index);
})
// Sağ ve sol ikonlarına gelindiğinde setInterval'in durdurulması için;
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
});
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})
function init(settings) {
    // setTimeout ; belirli bir süre sonra başlatılacak olan fonksiyon
    // setInterval; belirli süredeki aralıklarla kullanılacak olan fonksiyon (clearInterval ile durdurulur.)
    var prev;
    // Aşağıdaki setInterval içerisindeki fonksiyona dışarıdan müdahele edilebilmesi için 'interval' değişkeni kullanıldı.
    interval = setInterval(function () {
        if (settings.random) {
            // Tekrar aynı sayının üretilmesini engellemek için do - while döngüsü kullanıldı.
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev)
            showSlide(index);
            console.log(index);
            prev = index;
        } else {
            //artan index
            if (slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        //console.log(index);
        //showSlide(index);
    }, settings.duration)
}
function showSlide(i) {
    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}

