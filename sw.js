var CACHE_NAME = 'bengkel-nalar-v1';
var ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './content-matematika.js',
  './content-fisika.js',
  './content-kimia.js',
  './content-biologi.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){ return cache.addAll(ASSETS); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k!==CACHE_NAME; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request).then(function(cached){
      return cached || fetch(event.request).then(function(res){
        return caches.open(CACHE_NAME).then(function(cache){
          try{ cache.put(event.request, res.clone()); }catch(e){}
          return res;
        });
      }).catch(function(){ return cached; });
    })
  );
});
