//server push manager
var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);
// run node push to generate keys to console, then add them here

let vapidKeys = {
  publicKey: 'BFgzccNJp6rBczI9ammSQhlXyychUq3ckeTx7D1CIiHuZmrMGiK72UD027B4FezqX67XW4mcdjEgp43V8HzknvQ',
  privateKey: 'e9hGQbmSdYVVr_IqW03LMFu9hRfPcrnYwJwG3WfgNDg'
};

push.setVapidDetails('mailto:j_hawker@sun21.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);

//TODO sub from DB
let sub = 
{"endpoint":"https://fcm.googleapis.com/fcm/send/cLig_FziIQI:APA91bFipctVHFKG5V6BtMLg3dJIYF-_rrSacjyE_7rXw1sQojhu9RObb3wMvcJCdbIWj5jYyrPmFLIbIJymABewNKO9rFi_CoEI6WZEMMoJ5CCIsrVRsm-pE5O6aKJP0kkYTQqcjIto","expirationTime":null,"keys":{"p256dh":"BKRKPZ-tOleSbQx4fj8-BFpqmnkKRSkDBTdGMXGavbLo-TdSaF2sk6IkDDQgo3jhQoPuPjR4YxfzWlvu9rebPw4","auth":"fNY86PN4hkrdhc4s2yR7NA"}}
;

push.sendNotification(sub, 'testing push-web push manager');