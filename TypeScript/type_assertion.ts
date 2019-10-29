let message;
message = "Hello World";
let count = (<string>message).length; // any tipindeki message'ın bilinçli olarak string yazıldığı belirtildi ve string metodu kullanıldı.
let len = (message as string).length; // alternatif yöntem.