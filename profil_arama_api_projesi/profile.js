// input içerisine girilen sorguyu api'ye gönderme işlemi;

// apilerden kendisinden veri alınması için genelde client id ve client secret bilgisini isterler.

class Profile{
    constructor(){
        this.clientId ='',
        this.clientSecret = ''
    }
    // input'a girilen username ile api'den verileri çekebilmek için.
    async getProfile(username){
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);

        const profile = await profileResponse.json(); // gelen veri json'a çevrildi.
        // Gelen veri üzerindeki id ile todo bilgisini sorgulamak ve getirmek;
        //console.log(profile); // Array döndürülmektedir.
        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${profile[0].id}`);
        const todo = await todoResponse.json();
        return { profile,todo };
    } 
}