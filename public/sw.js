if (!self.define) {
  let e,
    s = {};
  const i = (i, t) => (
    (i = new URL(i + '.js', t).href),
    s[i] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, a) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[n]) return;
    let c = {};
    const r = (e) => i(e, n),
      o = { module: { uri: n }, exports: c, require: r };
    s[n] = Promise.all(t.map((e) => o[e] || r(e))).then((e) => (a(...e), c));
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
          url: '/_next/static/9iMSei7vlt7JXrtskPEkK/_buildManifest.js',
          revision: 'f8ace08abc300db682f6866286231425',
        },
        {
          url: '/_next/static/9iMSei7vlt7JXrtskPEkK/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/134-2aedcd4719c61727.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/173-bc9d7dbd1b6fb4d3.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/265-414951d5a49c72ae.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/357-c34d6094a4d9d9e6.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/376-6d5a0d917271e326.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/40-0b9927314e4930af.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/428-4e8c8629b3a0290f.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/433-576d6830372ee912.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/455-7701b62c7efe1016.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/4bd1b696-27fe3ef521142e14.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/562-75545dad2555cd82.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/565-178199da17f619cc.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/5e22fd23-f31a89b66734ac95.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/606-fec2e34bc73a7290.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/651-3c3516c6c994c507.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/729-81034e5614f84fc6.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/908-3da139098ce68474.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/922.9d939348c4e8c2f7.js',
          revision: '9d939348c4e8c2f7',
        },
        {
          url: '/_next/static/chunks/995-ed012eb3bd8c8c23.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/home/page-a51a85450132f6ff.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/layout-6a5b5533ad5cfe4b.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/mypage/modify-profile/page-52a5d965ef960f11.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/mypage/name-card-list/page-0b8b06da55030d44.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/mypage/page-413c2e43fc0e421d.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/notifications/page-9d00bab313afe435.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(main-layout)/user-info/%5BuserId%5D/page-ae7e89db16a19911.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(plain)/account/find-id-pw/page-21ec8379323f8bd9.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(plain)/account/login/page-5acff940b8911048.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(plain)/qr-reader/page-453999fa898877ae.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(plain)/register/job/page-160fc72c8fc84e26.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(plain)/register/layout-dabd5b7b96470b71.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(plain)/register/network/page-3ab840755f8ea940.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(plain)/register/page-b113d5d6e0bc8ea1.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(top-layout)/chat/page-61af4ac32db1a976.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(top-layout)/create-group/page-4438ad33764df580.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/(top-layout)/layout-9483fc4f0083d868.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-f775f1c335a40266.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/layout-af225d919f082405.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/page-4a508d469ded457b.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/test-api/page-2825044f84358df7.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/app/test/page-7615db65a734dcff.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/b563f954-87c8b9b034915b44.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/framework-6b27c2b7aa38af2d.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/main-8eadc21c0d0276a1.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/main-app-fc8f1f2725bd3222.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/pages/_app-d23763e3e6c904ff.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-0569cf4ba096a499.js',
          revision: '9iMSei7vlt7JXrtskPEkK',
        },
        {
          url: '/_next/static/css/0b68e5bb20629938.css',
          revision: '0b68e5bb20629938',
        },
        {
          url: '/_next/static/css/244d4a2c7c057378.css',
          revision: '244d4a2c7c057378',
        },
        {
          url: '/assets/svgs/Arrow.svg',
          revision: '8596c106a3dff80939241428512dba40',
        },
        {
          url: '/assets/svgs/NextPage.svg',
          revision: '9a43458257b14d04e2f7324bf041cd33',
        },
        {
          url: '/assets/svgs/Plus.svg',
          revision: 'b770a81f5f88f044f7730f79ddf480a7',
        },
        {
          url: '/assets/svgs/Scanner.svg',
          revision: 'b9348bbe5cadb8ec212a666f5d540441',
        },
        {
          url: '/assets/svgs/Subtract-on.svg',
          revision: 'dd33c8eed7e0b6774dfc8a73756b6e06',
        },
        {
          url: '/assets/svgs/Subtract.svg',
          revision: '0573aab49ab69190c92ea3ef9ec37c5e',
        },
        {
          url: '/assets/svgs/back-arrow.svg',
          revision: 'a78b403d8c2342edf4211569fcbeaaa8',
        },
        {
          url: '/assets/svgs/checkbox-checked.svg',
          revision: 'd3571a83150e75733e459dcf1bb58aee',
        },
        {
          url: '/assets/svgs/checkbox-unchecked.svg',
          revision: '20ef24c33f4fe22f51e68e0f85f65dcb',
        },
        {
          url: '/assets/svgs/exit-icon.svg',
          revision: 'a6efcba84b838134f046876521ee42e3',
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
          revision: '6a5247ef2d266cfbc61041ffe0219ab6',
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
          i = e.url.pathname;
        return !(
          !s ||
          i.startsWith('/api/auth/callback') ||
          !i.startsWith('/api/')
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
          i = e.url.pathname,
          t = e.sameOrigin;
        return (
          '1' === s.headers.get('RSC') &&
          '1' === s.headers.get('Next-Router-Prefetch') &&
          t &&
          !i.startsWith('/api/')
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
          i = e.url.pathname,
          t = e.sameOrigin;
        return '1' === s.headers.get('RSC') && t && !i.startsWith('/api/');
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
