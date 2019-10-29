export class Product{
    /*
    id: number;
    name: string;
    constructor(id,name) {
        this.id = id;
        this.name = name;
    }
    */
   // Typescript ile gelen alternatif yöntem;
   constructor(
       public id?: number,
       public name?: string,
       public category? : string,
       public price?: number) {}
}

let p = new Product();