# 1. Caching

workbox-config.js
```js
module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "assets/**/*.{js,gz,css,txt}",
    "third-party/**/*.{js,gz,css,txt}",
    "404.html"
  ],
  "swSrc": "lib/workbox/sw.js",
  "swDest": "public/sw.js",
  "injectionPointRegexp": /(const precacheManifest = )\[\](;)/
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
```

app/views/shared/_head.html.erb
```html
<script type="text/javascript">
    let isProduction = <%= Rails.env.production? %>;

    if (isProduction && 'serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
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

# 3. Fragments

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

# 4. Streaming
