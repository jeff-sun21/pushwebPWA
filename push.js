//server push manager
var push = require('web-push');

let vapidKeys = push.generateVAPIDKeys();
console.log(vapidKeys);
// run node push to generate keys to console, then add them here

let vapidKeys = {
  publicKey: 'BNkEAKeQU2tEIgqBIdpP3ByHfKK3aHoZ_oaYMoi4I0lEAgqJDku9NinzdizdBYSHQ6UgwqCsqpv0mRklzFpep0A',
  privateKey: 'GV8sV10yRWGF1kFm3CA9PCLeOUV6HhK8Sq71q5MDWhQ'
};

push.setVapidDetails('mailto:j_hawker@sun21.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);

//TODO sub from DB
let jeff =
{"endpoint":"https://fcm.googleapis.com/fcm/send/ekZXo5tfoYA:APA91bE8L9OZLTqq0NtszBmwbqdi3O5abwUI7-m-8Du7lbt-ti0poBcUT36ARVCr8KL68YShAdugxQ92hBvHXnGdGfYfYrqstGu6G9mn_VgFDFWloO-K2cf3JML2LMB0XYmDoZkPQsos","expirationTime":null,"keys":{"p256dh":"BMPtOE50Fgg0AvnUsZhPl_zonGmf5EHxOTUGaRc6mzTzX98rHQeXQphBhgllmUTSW-D_xMOQOb1kqo4uyHAscoc","auth":"beCqh_qJ8nlfC-YLYwJTnw"}}
;

let rafi =
{"endpoint":"https://fcm.googleapis.com/fcm/send/d-_6Fv2LV-o:APA91bF7GgzHZQLxNqsN_xXF2EXcET_CfeVxeeyLEtQ64Nu1LrpJCeaB1AGYB7PVci7D2VL9PwqFbWuVnPUTb8HOkBIMMy8WpldraS_GYxZ7yKY-zPk2SPr8dE27fjefEu-yvcAOff9T","expirationTime":null,"keys":{"p256dh":"BMl33OAh9EV63UUeCJHhhsBXkhfDLetXoAvGZT1FWdbqF1-xJac27Ae_S9p74aivFUtzYwt12JjSrgGh9hlqUcU","auth":"ddTHiy4uPqXm6XrOG5ih3w"}}
  ;

let subscribers = [rafi, jeff];
try {
  subscribers.forEach(element => {
    push.sendNotification(element, 'testing push-web push manager')
    // push.sendNotification(rafi, 'testing push-web push manager')
      .then(status => {
        console.log(status);
      })
      .catch(err => {
        console.log(err);
      })
  });
} catch (error) {
  console.log("error");
}
