if (!self.define) {
  let e,
    s = {};
  const c = (c, a) => (
    (c = new URL(c + '.js', a).href),
    s[c] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = c), (e.onload = s), document.head.appendChild(e);
        } else (e = c), importScripts(c), s();
      }).then(() => {
        let e = s[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, n) => {
    const i =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[i]) return;
    let t = {};
    const r = (e) => c(e, i),
      u = { module: { uri: i }, exports: t, require: r };
    s[i] = Promise.all(a.map((e) => u[e] || r(e))).then((e) => (n(...e), t));
  };
}
define(['./workbox-f1770938'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/ZGkjPKQdQ9qlfmsvcuHcI/_buildManifest.js',
          revision: '60e612746a8e2ff85f3bbc4721a41d2b',
        },
        {
          url: '/_next/static/ZGkjPKQdQ9qlfmsvcuHcI/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/173-bc9d7dbd1b6fb4d3.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/277-0ab2adfaf8981a65.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/36-dbb80a092ab20f15.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/40-0b9927314e4930af.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/428-4e8c8629b3a0290f.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/433-576d6830372ee912.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/455-7701b62c7efe1016.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/4bd1b696-27fe3ef521142e14.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/547-9ebbd5a12025f887.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/562-094b01e719a5c43b.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/565-178199da17f619cc.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/5e22fd23-f31a89b66734ac95.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/606-fec2e34bc73a7290.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/629-de17decacf2409da.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/651-f2cad7c2b1e3ace5.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/667-8cb7b1c997727c51.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/922.9d939348c4e8c2f7.js',
          revision: '9d939348c4e8c2f7',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/home/page-0c51481f35fb4bee.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/layout-daf4e09463fc8215.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/mypage/name-card-list/page-ad26f0ddb13e4a04.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/mypage/page-3a9b9a5443c6b269.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/notifications/page-35cdeac3dd94789a.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/(plain)/account/find-id-pw/page-fad0a697dfe468a0.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/(plain)/account/login/page-77dc8fb2215ebbc7.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/(plain)/qr-reader/page-453999fa898877ae.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/(plain)/register/interest/page-48a46654c9eaebbc.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/(plain)/register/job/page-09903655a59790e2.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/(plain)/register/layout-809dede512a13f31.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/(plain)/register/page-75174ad3ce6b332a.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/(top-layout)/chat/page-8bc296f078df39a8.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/(top-layout)/layout-ae42dd779e309a32.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-f775f1c335a40266.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/layout-af225d919f082405.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/page-17e349ee896e2853.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/app/test/page-eadeaa89493d5de6.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/b563f954-87c8b9b034915b44.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/framework-6b27c2b7aa38af2d.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/main-8eadc21c0d0276a1.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/main-app-fc8f1f2725bd3222.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/pages/_app-d23763e3e6c904ff.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-0569cf4ba096a499.js',
          revision: 'ZGkjPKQdQ9qlfmsvcuHcI',
        },
        {
          url: '/_next/static/css/232652af133295de.css',
          revision: '232652af133295de',
        },
        {
          url: '/_next/static/css/244d4a2c7c057378.css',
          revision: '244d4a2c7c057378',
        },
        {
          url: '/assets/svgs/BackArrow.svg',
          revision: 'a78b403d8c2342edf4211569fcbeaaa8',
        },
        {
          url: '/assets/svgs/ExitIcon.svg',
          revision: 'a6efcba84b838134f046876521ee42e3',
        },
        {
          url: '/assets/svgs/Scanner.svg',
          revision: 'b9348bbe5cadb8ec212a666f5d540441',
        },
        {
          url: '/assets/svgs/Subtract.svg',
          revision: '0573aab49ab69190c92ea3ef9ec37c5e',
        },
        {
          url: '/assets/svgs/filter.svg',
          revision: '96bbbb231f11c4b1252686e53836f9e9',
        },
        {
          url: '/assets/svgs/qr-code.svg',
          revision: '36a015250bd34962004c203abb413251',
        },
        {
          url: '/firebase-messaging-sw.js',
          revision: '6503669e00eab1b1b25b1bda685d3b4b',
        },
        {
          url: '/images/icons/chat/Profile.png',
          revision: '700da1dd43ac6038d97b2583cd9da3d5',
        },
        {
          url: '/images/icons/icon-128.png',
          revision: '0235b3088e0de3af4b8ba35e4b6123f3',
        },
        {
          url: '/images/icons/icon-512.png',
          revision: '9ed917920c3c9e1e1f240a82b6b70bea',
        },
        {
          url: '/images/icons/top-navigation/Icons.png',
          revision: 'ee4269b8c1c85091d3367e93b7aba46a',
        },
        {
          url: '/service-worker.js',
          revision: 'b247afa471e5ed996e3057696de61288',
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: function (e) {
              return _ref.apply(this, arguments);
            },
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      function (e) {
        var s = e.sameOrigin,
          c = e.url.pathname;
        return !(
          !s ||
          c.startsWith('/api/auth/callback') ||
          !c.startsWith('/api/')
        );
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      function (e) {
        var s = e.request,
          c = e.url.pathname,
          a = e.sameOrigin;
        return (
          '1' === s.headers.get('RSC') &&
          '1' === s.headers.get('Next-Router-Prefetch') &&
          a &&
          !c.startsWith('/api/')
        );
      },
      new e.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      function (e) {
        var s = e.request,
          c = e.url.pathname,
          a = e.sameOrigin;
        return '1' === s.headers.get('RSC') && a && !c.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      function (e) {
        var s = e.url.pathname;
        return e.sameOrigin && !s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      function (e) {
        return !e.sameOrigin;
      },
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    );
});
