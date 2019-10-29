var Taxi = /** @class */ (function () {
    // Bir şey belirtilmez ise public olarak davranır.
    /*
    private color: string;
    private currentLocation: Point;
    */
    //    Yukarıdaki gibi tanımlama yapmak yerine typescript ile aşağıdaki gibi parametre kısmında belirtebiliriz.
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: " + this.location.x + " Y: " + this.location.y + " dan x: " + point.x + " Y: " + point.y + " konumuna gidiyor.");
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 3 }, 'Red');
taxi_1.travelTo({ x: 5, y: 6 });
