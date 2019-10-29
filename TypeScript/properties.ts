interface Point {
    x: number,
    y: number
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    constructor(private _location: Point, private _color?: string) { }
    travelTo(point: Point): void {
        console.log(`taksi x: ${this._location.x} Y: ${this._location.y} dan x: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
    // Aşağıda metod kullanmak yerine properties kullanıldı.
    get location(){
        return this._location; // location'a private olmasına rağmen class içerisinden ulaşılabilmektedir. 
    }
    set location(value: Point){
        if (value.x<0 || value.y<0) {
            throw new Error('Koordinat bilgileri negatif olamaz.');
        }
        this._location = value;
    }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 3 }, 'Red');
taxi_1.travelTo({ x: 5, y: 6 });

let currentLocation = taxi_1.location;
taxi_1.location = {x:5,y:9};