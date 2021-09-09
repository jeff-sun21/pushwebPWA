//server push manager
var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);
//run node push to generate keys to console, then add them here

let vapidKeys = {
  publicKey: 'BP4007SMbYJj_vk6YXZs4jQmD5tOmEybP1TQLHfQtUKnlOQwKt4qUE3uFpq0Igfls4HVU0FsB38Uq4if1lFAaLY',
  privateKey: 'quPIsgcPSn8Zd7A86G-S2y00OkNWUp4lCRBSVTds1Jg'
}

push.setVapidDetails('mailto:j_hawker@sun21.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);

//sub from DB
let sub = {}

push.sendNotification(sub, 'testing push-web push manager');