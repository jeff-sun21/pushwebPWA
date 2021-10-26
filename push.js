//server push manager
var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);
// run node push to generate keys to console, then add them here

let vapidKeys = {
  publicKey: 'BEz75GgmpAbegh-XuJmeMg9aBYJoZ-xw4NfyfjBjFIFefPdwn98QBya84hqT0PpqOsCDgQrJuUmVv46qQOkOUbs',
  privateKey: '5yA6_mSDZHCpzlOtBbPm44A0BvUZitx4FvBk_v2wo5k'
};

push.setVapidDetails('mailto:j_hawker@sun21.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);

//TODO sub from DB
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cLig_FziIQI:APA91bFipctVHFKG5V6BtMLg3dJIYF-_rrSacjyE_7rXw1sQojhu9RObb3wMvcJCdbIWj5jYyrPmFLIbIJymABewNKO9rFi_CoEI6WZEMMoJ5CCIsrVRsm-pE5O6aKJP0kkYTQqcjIto","expirationTime":null,"keys":{"p256dh":"BKRKPZ-tOleSbQx4fj8-BFpqmnkKRSkDBTdGMXGavbLo-TdSaF2sk6IkDDQgo3jhQoPuPjR4YxfzWlvu9rebPw4","auth":"fNY86PN4hkrdhc4s2yR7NA"}}

push.sendNotification(sub, 'testing push-web push manager');