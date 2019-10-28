// tarayıcıda window.url ile değişken görüntülenmektedir.
/*
var module2= (function(){
    // function scope
    return{
        
    }
})();
*/
var url = 'http://logger.io/logger'; 
var name = "Yasin Atılgan";
function log(message){
    console.log(message);
    console.log(__filename); // dosya dizini
    console.log(__dirname); // klasör dizini 
}
// module.exports.url = url; // url alanı logger.js'e özel private alan olması isteniyorsa bu kod satırı silinir.
//module.exports.log = log; // module içerisindeki export'a log alanı tanımlansın ve log fonksiyonu aktarılsın demektir.
// ya da 
module.exports = {
    name : name,
    log : log
}
