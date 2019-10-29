var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: " + point.x + " Y: " + point.y + " konumuna gidiyor.");
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otob\u00FCs x: " + point.x + " Y: " + point.y + " konumuna gidiyor.");
    };
    return Bus;
}());
var taxi_1 = new Taxi(); // Taxi sınıfından bir obje üretildi.
taxi_1.travelTo({ x: 1, y: 1 });
taxi_1.currentLocation = { x: 3, y: 8 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
var taxi_2 = new Taxi();
taxi_2.travelTo({ x: 3, y: 3 });
taxi_2.currentLocation = { x: 1, y: 5 };
