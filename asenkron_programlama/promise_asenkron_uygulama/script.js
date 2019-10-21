/*
var p = new Promise(function (resolve, reject) {
    if (true) {
        resolve('success');
    } else {
        reject('failure');
    }

});
p.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
});
*/


/*
new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(5);  // resolve then içerisinde yakalanabilir.
    }, 1000);

}).then(function (number) {
    console.log(number); // 5
    return number * number;
}).then(function(number) {
    console.log(number); //25
    return number * number;
}).then(function(number) {
    console.log(number); //625
});
*/

const isMomHappy = true;
const willGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            name: 'Iphone 8',
            price: 5000,
            color: 'black'
        }
        resolve(phone);
    } else {
        const error = new Error('mom is not happy');
        reject(error);
    }
});

const showToFriends = function (phone) {
    const message = "Hi friends this is my new phone " + phone.name;
    return Promise.resolve(message);
}

const askMom = function () {
    willGetNewPhone.then(showToFriends).then(message => {
        console.log(message);
    })
        .catch(err => { console.log(err) });
}

askMom();