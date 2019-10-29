// Modules Kullanımı
// Taxi.ts dosyası oluşturularak Taxi yapısı başka bir dosya içerisine alınır.
// Vehicle interface'i farklı dosyalarda da kullanılabilir. Bu neden Vehicle.ts oluşturularak farklı bir yapı içerisine alınmaktadır.
import { Taxi } from './Taxi';
import {Vehicle} from './Vehicle';




let taxi_1: Taxi = new Taxi({ x: 2, y: 3 }, 'Red');
taxi_1.travelTo({ x: 5, y: 6 });

let currentLocation = taxi_1.location;
taxi_1.location = {x:5,y:9};