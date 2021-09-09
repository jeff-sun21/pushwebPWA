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
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eXUPaZBL2Ck:APA91bEypqwdi7u5ckIg8NtTuWFcban1LTs58VQ6oh-BStZymq_stqDMrhUjOfnrVfXx-jfVncIgIkgeLdgW3_kini9jLRRgKYVOQTk86JwUbNI5xEw59NfWDtnUTtxyu667k6UqKPDX","expirationTime":null,"keys":{"p256dh":"BLw__pBtZqloXA-xQUf6BnZAth2ANz7rs6vj3lnc1fKlTCyaqvONiwmjD7Nm8EJJ1SS4YWudrjt1wVop1OWnG7Q","auth":"EX5hgmzFE99l4kkC51KPNA"}}

push.sendNotification(sub, 'testing push-web push manager');