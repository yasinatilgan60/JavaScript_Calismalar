/*
let travelTo = (point: {x: number, y:number}) =>{
    
}

let getDistance = (pointA:{x: number, y:number}, pointB: {x: number, y:number}){

}

travelTo ({
    x:1,
    y:2
});*/
// Yukarıdaki gibi bir kullanım yapmak yerine interface tanımlanabilir.
// Belirli bir kalıp ve yazılımda sürdürülebilirliği oluşturmak için interface oluşturulur.
interface Point { // parametre olarak gidecek objenin tanımlaması yapıldı. 
    x: number,
    y: number
}
interface Passenger{
    name: string,
    phone: string;
}
interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
    getDistance(pointA: Point, pointB: Point): number;
    addPassenger(passenger: Passenger) : void;
    removePassenger(passenger: Passenger): void;
}
