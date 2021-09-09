//server push manager
var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);
//run node push to generate keys to console, then add them here

let vapidKeys = {
    publicKey: 'BOhiidivtDwwMnsc_17NH47CxxqaqT2HixaYxzUI1liFJqSZBpwM20GaWh9aidTDUdO7RB-aZTc8j08hKhpepDw',
    privateKey: 'B7bihMAQFWc21zkEKL0qFDWpdMIuAd7WgRqZYQ4r3y8'
}

push.setVapidDetails('mailto:j_hawker@sun21.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {}

push.sendNotification(sub, 'testing push-web push manager');