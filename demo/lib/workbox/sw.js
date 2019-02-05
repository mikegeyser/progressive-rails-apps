importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.setConfig({
  debug: true
});

const precacheManifest = [];

workbox.precaching.precacheAndRoute(precacheManifest);

workbox.routing.registerRoute(
  /.*.(?:png|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'asset-images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60
      })
    ]
  }),
  'GET'
);

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
    try {
      return await contentStrategy.makeRequest(request);
    } catch (error) {
      let response =  await caches.match('404.html');
      return response;
    }
  },
  () => pageStrategy.makeRequest({ request: '/footer' }),
  () => '</body>',
  () => '</html>'
]);

workbox.routing.registerRoute(/blog/, streamingStrategy, 'GET');
workbox.routing.registerRoute(/blog\/.*/, streamingStrategy, 'GET');
workbox.routing.registerRoute(/\/$/, streamingStrategy, 'GET');

self.skipWaiting();
