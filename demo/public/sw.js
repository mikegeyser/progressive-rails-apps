importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.setConfig({
  debug: true
});

const precacheManifest = [
  {
    "url": "assets/application-1f13698c53e27a6961531d29e1f42a91162934df2d4cd1ba41592ea7b2e5fcbf.js",
    "revision": "631ce8e3337a30250d89644742cd3e36"
  },
  {
    "url": "assets/application-5b29103b268a5f02c9f7fd1e9dffaf7f366ca64fe0d6b04129c25eda142c7982.css",
    "revision": "211af8b9b40c812f1e05ebc3fc36bc30"
  },
  {
    "url": "assets/application-b939ee073b2178a91f74cc0b2e8ca291eac93d826c2924e07d7bec75d2cdae35.js",
    "revision": "f1ab5067fedabbf0294e7d5c3638ea1d"
  },
  {
    "url": "assets/application-d02265d1a2c57a8a729d97d93572411e232067dd896a47bec976aa31bc229add.js",
    "revision": "59276565a3e72479b7bca93bbfcc41c3"
  },
  {
    "url": "assets/lines/admin/admin-301e55ceb2a4b59bbd1dd18db299b20583ba414b45db4f4b00adef7d26e33de8.css",
    "revision": "742eb7e1257994f3540d662f92cd55a2"
  },
  {
    "url": "assets/lines/admin/admin-5ba2d6dea0a0e3945f0dd9904e0fdaafba46178b9353f4dd9ad9b06309b8e3ff.js",
    "revision": "d1f2ed59cca2f48088c36d4577e54097"
  },
  {
    "url": "assets/lines/admin/admin-6aeb4b26fe688a3c4da6336d96b5bf5d1363c154f215cfa1192fa46a337d89d9.css",
    "revision": "e1b58975037349afca73ce47eb0c20d4"
  },
  {
    "url": "assets/lines/admin/admin-79ed573615879f4302f3099a8ecfb9277e4b6fe76f4b7887e042d0796c29678d.js",
    "revision": "27e12b85333ae353a23b92b6775a258a"
  },
  {
    "url": "assets/lines/application-6d2592cf999211dd4cf67178ecc28ab44a1822dbcb27285372e4b88397293efd.css",
    "revision": "883f0522f5a41b5d136ce136d1e852ad"
  },
  {
    "url": "assets/lines/application-b4235cc869475f58d73b323ca5e163bf914d282603d8d614a89896b52169d590.css",
    "revision": "af876c26470112677c08107c8d1f5933"
  },
  {
    "url": "assets/lines/application-d00d20da4513f7d89c676466887088b2c43946bdffbd2116f6231156da4adc70.js",
    "revision": "08c1da949f276abf534bf99a140b77ee"
  },
  {
    "url": "assets/lines/application-f31fc7337e56a6febf9231c12c3f04d7af032c41813ab7a85b0b93758c286ce5.js",
    "revision": "71e5f1af5b4a97ff9dfefe1842db1be8"
  },
  {
    "url": "third-party/javascripts/bootstrap.min.js",
    "revision": "353240ad37d1b084a53b1575f8ce57da"
  },
  {
    "url": "third-party/javascripts/jquery.magnific-popup.js",
    "revision": "0dba5fac838437bbcb8f84dad6d6da74"
  },
  {
    "url": "third-party/javascripts/jquery.min.js",
    "revision": "5ca7582261c421482436dfdf3af9bffe"
  },
  {
    "url": "third-party/javascripts/jquery.mixitup.min.js",
    "revision": "dc3c92d506622f9ec9263497f014a130"
  },
  {
    "url": "third-party/stylesheets/bootstrap-theme.css",
    "revision": "521843d19184fbfca0b13f66bffdedcc"
  },
  {
    "url": "third-party/stylesheets/bootstrap-theme.min.css",
    "revision": "2eba6afef4ec3eff6ff250d16880f4c0"
  },
  {
    "url": "third-party/stylesheets/bootstrap.css",
    "revision": "b9ab1d050bb48d300d478070986f71c0"
  },
  {
    "url": "third-party/stylesheets/bootstrap.min.css",
    "revision": "92763be013564d72a3ad3373e4189c3e"
  },
  {
    "url": "third-party/stylesheets/magnific-popup.css",
    "revision": "5204575709689d82cb68a40b7cfbaded"
  },
  {
    "url": "404.html",
    "revision": "fb6e7993f5318a4b95dc595cf1e5beea"
  }
];

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
