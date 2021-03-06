---
layout: null
---
var cacheName = 'fazibear.me-cache-v1';
var filesToCache = [
  '/css/main.css',
  '/css/uno.css',
  '/css/monokai.css',
  '/js/main.js',
  '/images/cover.jpg',
  '/',
  '/blog',

  {% for page in site.html_pages %}
  '{{ page.url }}',
  {% endfor %}

  {% for post in site.posts %}
  '{{ post.url }}',
  {% endfor %}
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        console.log('[*] Serving cached: ' + event.request.url);
        return response;
      }

      console.log('[*] Fetching: ' + event.request.url);
      return fetch(event.request);
    }
    )
  );
});
