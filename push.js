//server push manager
var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);
// run node push to generate keys to console, then add them here

let vapidKeys = {
  publicKey: 'BDumdUvVxNY93SsJUMCqJx-XNzXZkH16Pq_TTHpxT4r_pZhmsNH-STLYBTPa1tdmKsK_84rroVaaPwaeQ7REf4c',        
  privateKey: 'Tu2ZCB0YjBvGfAFHMFuiL29FkMK_VazIzF_C3paG9Oc'
}

push.setVapidDetails('mailto:j_hawker@sun21.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);

//TODO sub from DB
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fasGhIfU4kg:APA91bEaOgN_8prPdJcu_Js15l2RT3mh1IuLI3PzqALquILmzqWHrqBTqYptFSlAkeBxQTg7Fp78I8o9kHf5GcRH47PgXcOpAZCZekYi6IRR7OZjNZ2QnLnnqekhnkzMZ9xQAJtcqmhk","expirationTime":null,"keys":{"p256dh":"BL11xIi1k_KgynqEWEhHS8jFWZTGvvm4eozyeBCdHFhd9OY7OXL8iYjCfQqBY2JJHxRUF7pSJ87p1VzQbeUqqJs","auth":"S4eRs6vU7k6ImzGzc7nfTg"}}

push.sendNotification(sub, 'testing push-web push manager');