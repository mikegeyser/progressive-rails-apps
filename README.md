# 1. configure

workbox-config.js

```js
module.exports = {
  globDirectory: 'public/',
  globPatterns: ['assets/**/*.{js,gz,css,txt}', 'third-party/**/*.{js,gz,css,txt}', '404.html'],
  swSrc: 'lib/workbox/sw.js',
  swDest: 'public/sw.js',
  injectionPointRegexp: /(const precacheManifest = )\[\](;)/
};
```

lib/workbox/sw.js

```js
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.setConfig({
  debug: true
});

const precacheManifest = [];

workbox.precaching.precacheAndRoute(precacheManifest);

self.skipWaiting();
```

# 2. Installing and running

app/views/shared/\_head.html.erb

```html
<script type="text/javascript">
      let isProduction = <%= Rails.env.production? %>;

      if (isProduction && 'serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js');

          navigator.serviceWorker.addEventListener('controllerchange', () => {
            window.location.reload();
          });
      }
</script>
```

```sh
    > rails assets:precompile
    > workbox injectManifest workbox-config.js
    > rails server -e production
```

```sh
rake workbox:server
```

# 3. Runtime caching

lib/workbox/sw.js

```js
workbox.routing.registerRoute(
  /.*.(?:png|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60
      })
    ]
  }),
  'GET'
);
```

# 4. Fragments

app/controllers/application_controller.rb

```rb
    def head
        render 'shared/_head', layout: false
    end

    def header
        render 'shared/_header', layout: false
    end

    def footer
        render 'shared/_footer', layout: false
    end
```

app/controller/home_controller.rb
app/controller/blog_controller.rb
app/controller/article_controller.rb

```rb
    if params[:fragment]
      render layout: false
    end
```

# 5. Streaming

```js
let contentStrategy = workbox.strategies.staleWhileRevalidate({
  cacheName: 'content'
});

let pageStrategy = workbox.strategies.cacheFirst({
  cacheName: 'page'
});
```

```js
let streamingStrategy = workbox.streams.strategy([
  () => '<html>',
  () => '<head>',
  () => /* head */,
  () => '</head>',
  () => '<body>',
  () => /* body */,
  () => /* footer */,
  () => '</body>',
  () => '</html>'
]);
```

```js
pageStrategy.makeRequest({ request: '/head' });
```

```js
pageStrategy.makeRequest({ request: '/header' });
```

```js
pageStrategy.makeRequest({ request: '/footer' });
```

```js
async ({ event, url }) => {
  let request = {
    request: `${url}?fragment=true`
  };

  return contentStrategy.makeRequest(request);
};
```

```js
workbox.routing.registerRoute(/blog/, streamingStrategy, 'GET');
workbox.routing.registerRoute(/blog\/.*/, streamingStrategy, 'GET');
workbox.routing.registerRoute(/\/$/, streamingStrategy, 'GET');
```

# 6. Handle cache misses

```js
try {
  return await contentStrategy.makeRequest(request);
} catch (error) {
  let response = await caches.match('404.html');
  return response;
}
```
