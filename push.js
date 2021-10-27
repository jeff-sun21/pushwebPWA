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
let jeff =
{"endpoint":"https://fcm.googleapis.com/fcm/send/ezarEzeVAgI:APA91bEFJB9pun_CP9issrx3BwAVDWvufYGV44SFJ96PQVSWew1IWPpgZOmYj7xxcdfLM1LzwFLSQeH4nyTl1sbPRVSyM0-A7ePmDdZuIAnP_yivm8SObS-gsAr5OAy-7jjTH7xLzLic","expirationTime":null,"keys":{"p256dh":"BIsFXLmeNszJD7vYaLtWBkPiULto9CqTRy1DvxoK3Y3azwTUsL1OIgU6Reqn2Kl4ZKsiwhcC04bVtEkIgN_0SVk","auth":"fqMbcI50SdgrSGnkcoyFZg"}}
;

let rafi =
{"endpoint":"https://fcm.googleapis.com/fcm/send/crn0vU5knxs:APA91bGAr9V4CV0GghKk2ZpQddESbW__STo0rBzH62onFCTpgU7vv4HdGFoM5WhzusG8-B_sExgakiInqvUEzPQPl8VKhiOWKHZ-fvuompLM_bdW2MvrVD-4Ndj_nSCd75MOmHBhIV_Z","expirationTime":null,"keys":{"p256dh":"BCBBEKqBl54YHj1tqJPz_2Kk_UBi_F-9Mnx6yWOvLdOYk5oWPmJo71ornQZDV3wAhtYYRXniBp4vS_hnPI__z0Q","auth":"agARspl1EyplWuhBtQGSGA"}}
  ;

let subscribers = [rafi, jeff];
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
