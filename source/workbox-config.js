module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "assets/**/*.{png,js,gz,css,jpg,ico,txt,jpeg}",
    "third-party/**/*.{png,js,gz,css,jpg,ico,txt,jpeg}"
  ],
  "swSrc": "lib/workbox/sw.js",
  "swDest": "public/sw.js",
  "injectionPointRegexp": /(const precacheManifest = )\[\](;)/

};