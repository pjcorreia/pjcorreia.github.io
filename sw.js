self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        './reg1.html',
        './index.html',
        './sw.js',
        './app.js'
      ]);
    })
  );
});
