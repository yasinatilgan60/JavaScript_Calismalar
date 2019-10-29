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

// class.ts tsc class.ts ile js uzantısına çevrilince interface ve class yapıları ES5 kodları olan fonksiyon yapısına dönüştürülür.
// Yeni bir nesne oluşturmak için Class yapısına ihtiyaç vardır.

