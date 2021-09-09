let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/index.html",
            ])
        })
    )
});

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        if (event.request.url === "https://peaceful-torvalds-59d7d9.netlify.app/manifest.json") {
            event.waitUntil(
                this.registration.showNotification("Offline", {
                    body: "No internet connection.",
                })
            )
        }
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp;
                }
                let requestURL = event.request.clone();
                fetch(requestURL);
            })
        )
    }
})

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