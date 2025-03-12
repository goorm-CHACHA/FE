if (!self.define) {
  let s,
    e = {};
  const n = (n, a) => (
    (n = new URL(n + '.js', a).href),
    e[n] ||
      new Promise((e) => {
        if ('document' in self) {
          const s = document.createElement('script');
          (s.src = n), (s.onload = e), document.head.appendChild(s);
        } else (s = n), importScripts(n), e();
      }).then(() => {
        let s = e[n];
        if (!s) throw new Error(`Module ${n} didn’t register its module`);
        return s;
      })
  );
  self.define = (a, c) => {
    const t =
      s ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (e[t]) return;
    let i = {};
    const u = (s) => n(s, t),
      r = { module: { uri: t }, exports: i, require: u };
    e[t] = Promise.all(a.map((s) => r[s] || u(s))).then((s) => (c(...s), i));
  };
}
define(['./workbox-f1770938'], function (s) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        {
          url: '/_next/static/Uh7Tqu9cs_qAsBy49GMfD/_buildManifest.js',
          revision: '5737e13e5d52c28d2c1b9934693478ae',
        },
        {
          url: '/_next/static/Uh7Tqu9cs_qAsBy49GMfD/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/173-b42124d70d21c355.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/357-c34d6094a4d9d9e6.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/36-dbb80a092ab20f15.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/40-0b9927314e4930af.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/433-576d6830372ee912.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/455-7701b62c7efe1016.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/4bd1b696-27fe3ef521142e14.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/562-094b01e719a5c43b.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/565-f10e01b84fc380a6.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/606-fec2e34bc73a7290.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/651-f2cad7c2b1e3ace5.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/922.9d939348c4e8c2f7.js',
          revision: '9d939348c4e8c2f7',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/home/page-689b1975847761ea.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/layout-d73af95f4c44ff95.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/mypage/info/page-1575a04b89f93dba.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/mypage/name-card-list/page-5c7526683855a1ec.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/mypage/page-f30ea8e29b4dbaa7.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/notifications/page-ccca5718c2b959eb.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/(plain)/account/find-id-pw/page-dd92492d140520e1.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/(plain)/account/login/page-0369c027cdabe52b.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/(plain)/qr-reader/page-453999fa898877ae.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/(plain)/register/interest/page-9a7c7e6897943cc7.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/(plain)/register/job/page-201168f1f28e8f91.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/(plain)/register/layout-1777297bb1bc7daa.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/(plain)/register/page-a957b861d00155ea.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/(top-layout)/chat/page-d02a4b6ed3efaa9d.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/(top-layout)/layout-ac941bce8d07288d.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-f775f1c335a40266.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/layout-b2ddcd1a3dbea9b1.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/app/page-a0a0c49d73b0bd9b.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/framework-6b27c2b7aa38af2d.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/main-8eadc21c0d0276a1.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/main-app-fc8f1f2725bd3222.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/pages/_app-d23763e3e6c904ff.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-0569cf4ba096a499.js',
          revision: 'Uh7Tqu9cs_qAsBy49GMfD',
        },
        {
          url: '/_next/static/css/244d4a2c7c057378.css',
          revision: '244d4a2c7c057378',
        },
        {
          url: '/_next/static/css/e745e840c91d221f.css',
          revision: 'e745e840c91d221f',
        },
        {
          url: '/images/icons/icon-128.png',
          revision: '0235b3088e0de3af4b8ba35e4b6123f3',
        },
        {
          url: '/images/icons/icon-512.png',
          revision: '9ed917920c3c9e1e1f240a82b6b70bea',
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      '/',
      new s.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: function (s) {
              return _ref.apply(this, arguments);
            },
          },
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new s.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new s.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\/_next\/static.+\.js$/i,
      new s.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new s.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new s.RangeRequestsPlugin(),
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:mp4|webm)$/i,
      new s.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new s.RangeRequestsPlugin(),
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:js)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:css|less)$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new s.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new s.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      function (s) {
        var e = s.sameOrigin,
          n = s.url.pathname;
        return !(
          !e ||
          n.startsWith('/api/auth/callback') ||
          !n.startsWith('/api/')
        );
      },
      new s.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      function (s) {
        var e = s.request,
          n = s.url.pathname,
          a = s.sameOrigin;
        return (
          '1' === e.headers.get('RSC') &&
          '1' === e.headers.get('Next-Router-Prefetch') &&
          a &&
          !n.startsWith('/api/')
        );
      },
      new s.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      function (s) {
        var e = s.request,
          n = s.url.pathname,
          a = s.sameOrigin;
        return '1' === e.headers.get('RSC') && a && !n.startsWith('/api/');
      },
      new s.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      function (s) {
        var e = s.url.pathname;
        return s.sameOrigin && !e.startsWith('/api/');
      },
      new s.NetworkFirst({
        cacheName: 'pages',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    s.registerRoute(
      function (s) {
        return !s.sameOrigin;
      },
      new s.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    );
});
