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
{"endpoint":"https://fcm.googleapis.com/fcm/send/dpf_wigx80k:APA91bGF2Hs2-VzQgYc2NWk1vviIMqNShp_ff288T8UiMvbujTl12iBkvQqbrh2K2kYfOYPGVlISMIkRfRRlYXxmDi_rJHg3pqZt89qoJYQWdl3vDWcMNEoyNh9-1tCqoiUr1lC23--0","expirationTime":null,"keys":{"p256dh":"BDs9PT52FYI5ld-_BKq8FkkQzFH4VBSo1DlKssJpXozwRRife4KQt9vYnGDrZ8_L1yHTE_Obi_dxSjRlMe8aH7c","auth":"8K4EDZn2aLF1ay6CyOYA8A"}}
;
try {
  push.sendNotification(sub, 'testing push-web push manager')
    .then(status => {
      console.log(status);
    })
    .catch(err => {
      console.log(err);
    })
} catch (error) {
  console.log("error");
}
