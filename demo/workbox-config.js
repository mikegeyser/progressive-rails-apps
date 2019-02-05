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