interface Point { // parametre olarak gidecek objenin tanımlaması yapıldı. 
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
    
}

class Taxi implements Vehicle { // Taxi class'ı Vehicle interface'inden implemente edilerek özelliklere sahip oldu.
    color: string; 
    constructor(location: Point, color?: string){ // this ile oluşturulan nesne işaret edilir. ? ile parametre isteğe bağlı hale getirilmiştir.
        this.currentLocation = location;
        this.color = color;
    }
    // Taxi'ye özel olan özellikler oluşturabilir.
    currentLocation: Point;
    travelTo(point: Point): void{
        console.log(`taksi x: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

/* Aşağıdaki gibi nesnenin propertilerine ulaşıp değer atamak yerine constructor ile nesne oluştuğu anda işlem yapabiliriz.
taxi_1.travelTo({x: 1, y: 1});
taxi_1.currentLocation = {x:3,y:8};
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
*/
let taxi_1: Taxi = new Taxi({x:2,y:3},'Red'); // Üretilen objeye constructor sayesinde location bilgisini girme şartı getirilmiştir.
taxi_1.travelTo({x:5,y:6});
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

let taxi_2 = new Taxi({x:3,y:5}); // 2. objede renk bilgisi girilmemiştir. Çünkü constructor içerisinde ? ile isteğe bağlı hale getirilmiştir.
