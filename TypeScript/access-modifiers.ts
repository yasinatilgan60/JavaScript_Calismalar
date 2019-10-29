interface Point {
    x: number,
    y: number
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    // Bir şey belirtilmez ise public olarak davranır.
    /*
    private color: string; 
    private currentLocation: Point;
    */
    //    Yukarıdaki gibi tanımlama yapmak yerine typescript ile aşağıdaki gibi parametre kısmında belirtebiliriz.
    constructor(private location: Point, private color?: string) { }
    travelTo(point: Point): void {
        console.log(`taksi x: ${this.location.x} Y: ${this.location.y} dan x: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 3 }, 'Red');
taxi_1.travelTo({ x: 5, y: 6 });