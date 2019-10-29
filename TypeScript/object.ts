interface Point { // parametre olarak gidecek objenin tanımlaması yapıldı. 
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
    
}

class Taxi implements Vehicle { // Taxi class'ı Vehicle interface'inden implemente edilerek özelliklere sahip oldu.
    // Taxi'ye özel olan özellikler oluşturabilir.
    currentLocation: Point;
    travelTo(point: Point): void{
        console.log(`taksi x: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

class Bus implements Vehicle { // Bus class'ı Vehicle interface'inden implemente edilerek özelliklere sahip oldu.
    // Bus'a özel olan özellikler oluşturulabilir.
    currentLocation: Point;
    travelTo(point: Point): void{
        console.log(`otobüs x: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1: Taxi = new Taxi(); // Taxi sınıfından bir obje üretildi.

taxi_1.travelTo({x: 1, y: 1});
taxi_1.currentLocation = {x:3,y:8};
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

let taxi_2 = new Taxi();
taxi_2.travelTo({x: 3, y: 3});
taxi_2.currentLocation = {x:1,y:5};