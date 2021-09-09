//On install - app shell cached
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('sw.cache').then(function(cache) {
            return cache.add('index.html');
        })
    );
});

//with request network
self.addEventListener('fetch', function(event) {
    event.respondWith(
        //Try the cache
        caches.match(event.request).then(function(response) {
            //return it if there is a response, or else fetch again
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('push', event => {
    const options = {
      body: 'This notification was generated from a push!',
      icon: 'images/notification-flat.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {action: 'explore', title: 'Go to the site',
          icon: 'images/checkmark.png'},
        {action: 'close', title: 'Close the notification',
          icon: 'images/xmark.png'},
      ]
    };
  
    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
  });