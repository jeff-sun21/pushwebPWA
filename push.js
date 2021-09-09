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

//TODO sub from DB
let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/cwQARfFP-SM:APA91bG1rn3aZwYjV4WFhu8c0SYtCNGeTnPXZHYi_QTZ4QpPL9ZVxkf2gkI7ZoAd6wHFpFRk2-cmKDvPuTNGhVUQdnDiT0xQygpELKAeOO3ND2qGxpq5yHgQh2a8SsV-VWG-PwzBV0VD", "expirationTime": null, "keys": { "p256dh": "BBU_yXRikqyGnjGdVA8Bk16waSqKEZTXlGGINEi8h1z353g8QShUQF81nDo-7MihCXmlWPaAbRutFBneQOLxGuU", "auth": "9KFm8mzQ-HCGYo4tpubu2g" } }

push.sendNotification(sub, 'testing push-web push manager');