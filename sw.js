self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        './reg1.html',
        './index.html',
        './sw.js',
        './app.js'
      ]);
    })
  );
});


self.addEventListener('fetch', function(event) {
  console.log(event.request);
  event.respondWith(
    caches.match(event.request)
  );
});
