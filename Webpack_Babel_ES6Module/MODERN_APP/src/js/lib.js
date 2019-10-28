
export default class {
    
    constructor(){
        this.PI = 3.146;
    }
    sum(...numbers) { // rest parametre ile birden fazla parametre gönderebiliriz.
        return numbers.reduce((number,total)=> total + number);
    }
    multiply(...numbers){
        return numbers.reduce((number,total)=> total * number);
    }   
    
}

/*
// Aşağıdaki kullanımı yapmak yerine yukarıdaki gibi bir sınıf oluşturarak o sınıfı dışarıya açabiliriz.
// private members
const PI = 3.146;

// public members
export function sum(...numbers) { // rest parametre ile birden fazla parametre gönderebiliriz.
    return numbers.reduce((number,total)=> total + number);
}

export function multiply(...numbers){
    return numbers.reduce((number,total)=> total * number);
}   

// customjs
/*
module.exports = {
    sum,
    multiply
}
*/
// ES6 module (export ile bir eleman dışarıya açık hale gelmektedir.)

