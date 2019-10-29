import {Vehicle} from './Vehicle';
import {Point} from './Point';
export class Taxi implements Vehicle { // export ile Taxi yapısı dışarı açılmıştır.
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
