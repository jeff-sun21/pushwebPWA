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
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/ecnY3XP8CJQ:APA91bHF-FqYFn64lXYa10f32n3ZbhvPiaKoekq8HVWmjKdAklYSR9iYAMVvHIdpvw7V62kVRpXQhYOB5754vtaGSKBq4eKkv-OEBP6h_WlC44NouX5C_aP_-r0Vr3x-C2rXIKhXTDqT","expirationTime":null,"keys":{"p256dh":"BI3RsDVbAHNsIcuE8GDZSEUXbJe_Umfj4skjTxn7dmFvqMOoS_ZtKYEWdFAWSEkkPK0DjOSpBw3kjr-XRSscVK8","auth":"ZuIZq9W6RYZPJOwpIkAw5w"}}

push.sendNotification(sub, 'testing push-web push manager');