//server push manager
var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);
// run node push to generate keys to console, then add them here

let vapidKeys = {
  publicKey: 'BNkEAKeQU2tEIgqBIdpP3ByHfKK3aHoZ_oaYMoi4I0lEAgqJDku9NinzdizdBYSHQ6UgwqCsqpv0mRklzFpep0A',
  privateKey: 'GV8sV10yRWGF1kFm3CA9PCLeOUV6HhK8Sq71q5MDWhQ'
};

push.setVapidDetails('mailto:j_hawker@sun21.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);

//TODO sub from DB
let jeffPC =
{"endpoint":"https://fcm.googleapis.com/fcm/send/ezarEzeVAgI:APA91bEFJB9pun_CP9issrx3BwAVDWvufYGV44SFJ96PQVSWew1IWPpgZOmYj7xxcdfLM1LzwFLSQeH4nyTl1sbPRVSyM0-A7ePmDdZuIAnP_yivm8SObS-gsAr5OAy-7jjTH7xLzLic","expirationTime":null,"keys":{"p256dh":"BIsFXLmeNszJD7vYaLtWBkPiULto9CqTRy1DvxoK3Y3azwTUsL1OIgU6Reqn2Kl4ZKsiwhcC04bVtEkIgN_0SVk","auth":"fqMbcI50SdgrSGnkcoyFZg"}}
;

let jeffSP = 
{"endpoint":"https://fcm.googleapis.com/fcm/send/cGr8KHVghHk:APA91bGw2YNMK0GzYx_vykclFbdrLSVtkuCqGXFO5H8GoIqkep9LaEafwVsEPNMO76FdfIgS3kZj_A5mb3t3JfuoRO_HjsZHuTY3nmnzdWnNkR3pm2dWfUkK7pgVTbx4Nk7xxggGWiop","expirationTime":null,"keys":{"p256dh":"BC7tESWIeuHXPFMnyN2WzJP3aweY_d1pC1hLKCL235_LzZc0jGEF0gxi533eZr5hLfXNMqQLqZpkCTfTwEzaEas","auth":"EjrGLaBebgNY5j28PHk2qg"}}
;

let rafiPC =
{"endpoint":"https://fcm.googleapis.com/fcm/send/cBv7Ed3ryj0:APA91bFdz4PXba5xFaWzqBzcuH4PQkMtn-Y6aDbu1ZAMD5xFUBlxapi4oMmdFuZoPVfogG5G2j8UyHowhYiFNlI9xB0XAoPeRqXMPcfDT0eV-16B1lnTBObbzxNkW10z7sI6S7a-gGNN","expirationTime":null,"keys":{"p256dh":"BNNtz9hvjiSsH2OllOHyas4nn0ozEIqSBVtZcak-aKJcFExTSte-amSRuF8Qsxm_XLD1y2d0j7rVZLyz5oEhU1w","auth":"cTT8mv1kDo2IJNfNbkfctA"}}
;

let fujitaSP =
{"endpoint":"https://fcm.googleapis.com/fcm/send/chQ34r_HQpA:APA91bGTr6pVQr-M1FCKYAmMEW3zUJbOevJFab6ibopo4-RisAJEsrMu8leDBzVVgG3vqjDMRwXojQmItfj6GmhcQqo9VTNTrwjx8_EmRB43lJ-SP5myGMIuVg32Bcv4IMdfCUI8wt44","expirationTime":null,"keys":{"p256dh":"BDQzZIc-VS_0Lzmo8bQfHt00zqbHxPXQBlap8xydMhnJMCJyNk4fQOgtqQY_V8gCHk-Tjpaiq-X06FLQgJ63b3w","auth":"anViWSCiKUaI0QcUllIsFA"}}  ;

let subscribers = [jeffPC, jeffSP, rafiPC];
try {
  subscribers.forEach(subscriber => {
    push.sendNotification(subscriber, 'testing push-web push manager')
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
