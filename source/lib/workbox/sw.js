importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.setConfig({
  debug: true
});

const precacheManifest = [];

workbox.precaching.precacheAndRoute(precacheManifest);

let contentStrategy = workbox.strategies.staleWhileRevalidate({
  cacheName: 'content'
});

let pageStrategy = workbox.strategies.cacheFirst({
  cacheName: 'page'
});

let streamingStrategy = workbox.streams.strategy([
  () => '<html>',
  () => '<head>',
  () => pageStrategy.makeRequest({ request: '/head' }),
  () => '</head>',
  () => '<body>',
  () => pageStrategy.makeRequest({ request: '/header' }),
  async ({ event, url }) => {
    let request = {
      request: `${url}?fragment=true`
    };

    return contentStrategy.makeRequest(request);
  },
  () => pageStrategy.makeRequest({ request: '/footer' }),
  () => '</body>',
  () => '</html>'
]);

workbox.routing.registerRoute(/blog\/.*/, streamingStrategy, 'GET');

self.skipWaiting();
