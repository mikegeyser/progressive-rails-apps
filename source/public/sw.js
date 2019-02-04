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
    "url": "assets/border-c8634761aad3747d2fde55caf819351b75488baeb65f2fc7ee7e2cff2f48ab9f.png",
    "revision": "f856430a7373cd11b8031775950859a5"
  },
  {
    "url": "assets/content__images/image_300x190-03940f24840e7cd7c8ab4dd3ecad63465c12f9201184072480a7b344fb2bc1a9.jpg",
    "revision": "84b9d46ac117824c1907a8687c4411d0"
  },
  {
    "url": "assets/content__images/image_460x190-961cd55d7b54330b54a32e27bc2b8e9f7736870a91c98abff8e149d99d60392a.jpg",
    "revision": "f8cbadfb889519030db0e9b6f5748157"
  },
  {
    "url": "assets/favicon-0a68671511cdcf92cb1eb825f75c8f7b92ddf8a955dedbc1202daea4859d80ca.ico",
    "revision": "4c297da8a3395ebd46fd376f3c1bdd96"
  },
  {
    "url": "assets/heading_sep_white-5b597bf8335a6b296167461635e9caafa36296e60fe753fab8a8dbb32462220e.png",
    "revision": "834ccf9f5a56c0b293fa2f201c959cd8"
  },
  {
    "url": "assets/heading_sep-f21a8b32261d76106071c7629673a14689a69b2df68b37dffa232458a11f6d68.png",
    "revision": "1ee800de9f6316e40398d1ce92558c53"
  },
  {
    "url": "assets/ic_rss-c5870c27872fb348fe17eb2ae8be111e3300db497011db319d2506e665d59bc2.png",
    "revision": "a956cf64a964789bbe48822c2150c4a0"
  },
  {
    "url": "assets/icons/ico1_a-d6548e66306ba41a14669bfa11356d829220339d45da1dcf6f01dcb3d7b17049.png",
    "revision": "60b6de5616cf80fb80f614fc8e9757e6"
  },
  {
    "url": "assets/icons/ico1-d7a69e16a1add3c63b52b9f9a7a93416708d49d73644b986fc6e5b5ec274c7b2.png",
    "revision": "587c4c95619f7a97fa2c2223ef1e9afb"
  },
  {
    "url": "assets/icons/ico2_a-c0ce9c87c72aa36f70fa154fd528e687d3db8b2695be3acfac7a1f4f102b09bf.png",
    "revision": "70436b421fabdb043cf20df7c6fea5d4"
  },
  {
    "url": "assets/icons/ico2-7bc2dcd6f3ba80e9fe7098262542369a96114b6f7fa28fd484312e4dd555d124.png",
    "revision": "01757b696ece1e4d9195ffcbc5b4997f"
  },
  {
    "url": "assets/icons/ico3_a-a1ca6046912814d40cdf14bf67491633560fc3845898c0d13ca9dfe9b04f5218.png",
    "revision": "2f7249790015c1e77be87c3947de4f16"
  },
  {
    "url": "assets/icons/ico3-ed6807daa453d94faa2aff9e93ced6f4d6bcbcfe119589d74b8155f03dd31545.png",
    "revision": "428696e676a9764bc0d574ebf985015d"
  },
  {
    "url": "assets/icons/pencil_a-2ff32a031d496894a2d978f1f53eb262dec87855228f6631f5d9a3d12e4a70cf.png",
    "revision": "ec50a7cf0daf9a0c0231997d84877a12"
  },
  {
    "url": "assets/icons/pencil-c314335295db207be0bb5f2472e99a20f65bdc53a971b3ed3d6f3d2bbb6051fc.png",
    "revision": "2674ecbd9c5fd262b3a01dca28214848"
  },
  {
    "url": "assets/image_1920x1000-68e66e04923c610016ab68cc3a5b99c0982c63d92d7cd982358e461bb740cd11.jpg",
    "revision": "4ff573c7fac9aac0557e2e082abb0c94"
  },
  {
    "url": "assets/image_1920x1178-e281807e1b4056ecf070115eff4f46c0fe8986649708e8609567fc23d73f6507.jpg",
    "revision": "7572aa6e5868b97508f242a7758ffa08"
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
    "url": "assets/pattern_black-28a319b605955ce813c5ffe02f71f04e5d0603b01c6b19cccf01c4ca9f33e56e.png",
    "revision": "4910bd161714d28616d5d9a886b22d63"
  },
  {
    "url": "assets/pattern-5a275caa05457f2399b1ea09c63668613b5477ef1351e75ec1ca3cc27ae989b7.png",
    "revision": "b6b10982aac23aa5d50e229d52f6089b"
  },
  {
    "url": "assets/sep_black-b7a888735fff8d4fe761dc12e53c5d5d90c5f6dcb8dbdd747136e3308077ecb2.png",
    "revision": "43b1143c0ee91c0845c2f3f11abe865e"
  },
  {
    "url": "assets/sep-6c0cdecc9606f4165104dc9964ac56224c97069aa1d86feb3141817f9e6ae889.png",
    "revision": "de8869b07159510926429f6f6c329c23"
  },
  {
    "url": "assets/slider/image_1920x1000-68e66e04923c610016ab68cc3a5b99c0982c63d92d7cd982358e461bb740cd11.jpg",
    "revision": "4ff573c7fac9aac0557e2e082abb0c94"
  },
  {
    "url": "assets/slider/left_a-a1ea76a6c8b028f12e6c00a0f0536a16f9878ae498b3da3ae5cfdcde0902b1ab.png",
    "revision": "6a07815c31e3dfe6937c7aa20c260932"
  },
  {
    "url": "assets/slider/left-e3953b74b5dd3f34934fdc6b5b27b8959030b3f5bb25088b64755806715b64e9.png",
    "revision": "bb55933357ac2280c7793bbcdf361205"
  },
  {
    "url": "assets/slider/next_a-2e8afc6c32280b5fd3ea9531720c5c2a2d3cb2586681a685fc4a53fc26788463.png",
    "revision": "d686561255fc41298a0854e7f91c5036"
  },
  {
    "url": "assets/slider/next-c459cd43f899b84e94c6438383a80945a3503bf98bd44a2858c332f6c6658720.png",
    "revision": "37e193c84bed2d614f14000c586c4459"
  },
  {
    "url": "assets/slider/pager_a-9118f67f8525037f3faa948caf945119ea453c36f984223f8f070151c3cc0133.png",
    "revision": "e84d78be5b67dd6e7b808893d59ada7c"
  },
  {
    "url": "assets/slider/pager-813f708f4ad3d2fa7bd6a58a016f2d08e556454a1b4834f1c5f23f5daa4bc290.png",
    "revision": "428eff4b58cf69f912afa080f249f56d"
  },
  {
    "url": "assets/slider/prev_a-e58b26235da9bb0fd1296de30b51f9ce95e8da05c02e5673aa47db39b9243d20.png",
    "revision": "a1f64898476286ecc9959f3e68c332a0"
  },
  {
    "url": "assets/slider/prev-471913bafa5258a150d2041f5599010a9423feb3a395bf4023f46121a7062cc9.png",
    "revision": "6c22e581181f4f03203db5a587f4b937"
  },
  {
    "url": "assets/slider/right_a-0a19de8c3cbcd5944cffcaa8543acfbb5b170fd50ff466d7b8a353eda6968c9e.png",
    "revision": "13b9ae35b7a0e3cef7e1780350c0e373"
  },
  {
    "url": "assets/slider/right-d383ab55620b4cd7c27ff4e9df9fc46c4b6b70b65a31c5c16ffda8efb9edfa1b.png",
    "revision": "3ad71b4ecc4e88152472128353fced3a"
  },
  {
    "url": "assets/social/facebook_a-8d9c333611a3b3cebfa45b1d3f455950d1f0925aa903c6ef79c6c27c81357772.png",
    "revision": "4bcda96181c7e56f245425c022302eea"
  },
  {
    "url": "assets/social/facebook-1a767a12c942e872fefc94c5159af25ff78ecfa4a394e1070b498b821c85a939.png",
    "revision": "e0f8839e965ccc635ac888a1264125b3"
  },
  {
    "url": "assets/social/google_a-93698be6d65d4e7a23e1131bd294f877fbe1b85be5f4ba82e6c8028771a36fb2.png",
    "revision": "a320486bf07e92cd9071b6b51fead085"
  },
  {
    "url": "assets/social/google-a9124d85b266420f1133874d1d68e99d2602fb4d83dbde16896f3124f75ea877.png",
    "revision": "0cc3e645636bcbc1ee4272957f93dc9c"
  },
  {
    "url": "assets/social/mail_a-aa2849357c454deba38ee0cc65bc1935643e24294ad358cd62a05d93ff44de2f.png",
    "revision": "2a86561bac8dd390e5b697593100a84b"
  },
  {
    "url": "assets/social/mail-c6388dcf9e7ec665ba526cc06b29ec47211a4087177fed5dc78167943f0bcc89.png",
    "revision": "69fd2d9c5a10d9efdfc30cc199d700d8"
  },
  {
    "url": "assets/social/twitter_a-9f3f6d66f1ac2b3b6f020ca04b7d424b5fa4a29dcd42d2115ef3e8b56b9b75ad.png",
    "revision": "ec37d8902543b12326b871ac8e51f610"
  },
  {
    "url": "assets/social/twitter-20e8ca82c1d33e78dcb67fdd8896f5aefbd4b28b2116bff4e3f74f3551c3b6c9.png",
    "revision": "b5b09b206d7cc6c628ca4619f20523f9"
  },
  {
    "url": "assets/submenu-d9f0d79002af6689516ec926f85b04f5b54014500e593ad8647773b86d1cb773.png",
    "revision": "04a16cc238568c6357394d740e60bd88"
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
  }
];

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
