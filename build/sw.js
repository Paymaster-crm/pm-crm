importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

// Import Workbox libraries
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js"
);

// Workbox caching
if (workbox) {
  workbox.setConfig({ debug: false });
  // Precache files
  workbox.precaching.precacheAndRoute([{"revision":"4d2b94d8f99706cc48508299627d5822","url":"asset-manifest.json"},{"revision":"2f84d64ee340d50cf8e2069df60e84c4","url":"favicon.ico"},{"revision":"05e77b4e9f1995c1c375d1f98e015d3a","url":"firebase-messaging-sw.js"},{"revision":"340bd6c315f2edb5c52bbbbcbbad96fd","url":"index.html"},{"revision":"497738b36a9953954a5821c7b62b9825","url":"manifest.json"},{"revision":"a2dcdbac391b8416b809845e243fd6db","url":"maskable_icon.png"},{"revision":"fa1ded1ed7c11438a9b0385b1e112850","url":"robots.txt"},{"revision":null,"url":"static/css/3596.bdd1b94f.chunk.css"},{"revision":null,"url":"static/css/434.855c797a.chunk.css"},{"revision":null,"url":"static/css/4957.3837ba17.chunk.css"},{"revision":null,"url":"static/css/5164.3837ba17.chunk.css"},{"revision":null,"url":"static/css/6244.f3b5fa2d.chunk.css"},{"revision":null,"url":"static/css/7378.92b00a00.chunk.css"},{"revision":null,"url":"static/css/8165.cc1e88bd.chunk.css"},{"revision":null,"url":"static/css/main.542b1ae5.css"},{"revision":null,"url":"static/js/1114.534d27f0.chunk.js"},{"revision":null,"url":"static/js/1175.73b17d88.chunk.js"},{"revision":null,"url":"static/js/1315.dabc5571.chunk.js"},{"revision":null,"url":"static/js/1334.bbb76814.chunk.js"},{"revision":null,"url":"static/js/1609.9af052a9.chunk.js"},{"revision":null,"url":"static/js/1893.0cb91b79.chunk.js"},{"revision":null,"url":"static/js/1953.1ca3e5fe.chunk.js"},{"revision":null,"url":"static/js/2103.3beca814.chunk.js"},{"revision":null,"url":"static/js/2179.5bc9dd25.chunk.js"},{"revision":null,"url":"static/js/2221.333d6cf2.chunk.js"},{"revision":null,"url":"static/js/2223.66977fd2.chunk.js"},{"revision":null,"url":"static/js/2229.2fe2df8a.chunk.js"},{"revision":null,"url":"static/js/2935.836baaef.chunk.js"},{"revision":null,"url":"static/js/2986.231732e4.chunk.js"},{"revision":null,"url":"static/js/2993.a80632fd.chunk.js"},{"revision":null,"url":"static/js/2993.a80632fd.chunk.js.LICENSE.txt"},{"revision":null,"url":"static/js/3036.9add4c16.chunk.js"},{"revision":null,"url":"static/js/3129.6fc7525e.chunk.js"},{"revision":null,"url":"static/js/3167.f7f83e47.chunk.js"},{"revision":null,"url":"static/js/3528.333e9eb8.chunk.js"},{"revision":null,"url":"static/js/3596.c0793c1d.chunk.js"},{"revision":null,"url":"static/js/3632.62db156b.chunk.js"},{"revision":null,"url":"static/js/3987.e067d69c.chunk.js"},{"revision":null,"url":"static/js/4032.0dda887a.chunk.js"},{"revision":null,"url":"static/js/4061.fe2c393f.chunk.js"},{"revision":null,"url":"static/js/4137.4578309c.chunk.js"},{"revision":null,"url":"static/js/4193.d73fa4f8.chunk.js"},{"revision":null,"url":"static/js/434.c90040d1.chunk.js"},{"revision":null,"url":"static/js/4424.c4b966c9.chunk.js"},{"revision":null,"url":"static/js/4459.affa5ff8.chunk.js"},{"revision":null,"url":"static/js/4459.affa5ff8.chunk.js.LICENSE.txt"},{"revision":null,"url":"static/js/4470.0c2c24a1.chunk.js"},{"revision":null,"url":"static/js/4728.727bb32e.chunk.js"},{"revision":null,"url":"static/js/4895.70817f55.chunk.js"},{"revision":null,"url":"static/js/4922.4767e905.chunk.js"},{"revision":null,"url":"static/js/4955.99bcdeb6.chunk.js"},{"revision":null,"url":"static/js/4957.a498eb3e.chunk.js"},{"revision":null,"url":"static/js/5163.5084639e.chunk.js"},{"revision":null,"url":"static/js/5164.ba3d5aff.chunk.js"},{"revision":null,"url":"static/js/520.03942bf0.chunk.js"},{"revision":null,"url":"static/js/5231.85159f01.chunk.js"},{"revision":null,"url":"static/js/5243.85f1df47.chunk.js"},{"revision":null,"url":"static/js/5292.f1ea6027.chunk.js"},{"revision":null,"url":"static/js/536.771478de.chunk.js"},{"revision":null,"url":"static/js/5374.fbbbec02.chunk.js"},{"revision":null,"url":"static/js/5374.fbbbec02.chunk.js.LICENSE.txt"},{"revision":null,"url":"static/js/5506.782fa879.chunk.js"},{"revision":null,"url":"static/js/5734.9a78d455.chunk.js"},{"revision":null,"url":"static/js/5957.1260e435.chunk.js"},{"revision":null,"url":"static/js/6244.b225fcb3.chunk.js"},{"revision":null,"url":"static/js/6361.372bc456.chunk.js"},{"revision":null,"url":"static/js/6449.72476ddd.chunk.js"},{"revision":null,"url":"static/js/6632.ec3403a5.chunk.js"},{"revision":null,"url":"static/js/7159.9ce2c222.chunk.js"},{"revision":null,"url":"static/js/7343.280d46d4.chunk.js"},{"revision":null,"url":"static/js/7378.398d9502.chunk.js"},{"revision":null,"url":"static/js/7411.bf0661b0.chunk.js"},{"revision":null,"url":"static/js/7554.da85352f.chunk.js"},{"revision":null,"url":"static/js/7685.d3d838fd.chunk.js"},{"revision":null,"url":"static/js/7741.93b21489.chunk.js"},{"revision":null,"url":"static/js/7851.36ca9906.chunk.js"},{"revision":null,"url":"static/js/7939.29b67691.chunk.js"},{"revision":null,"url":"static/js/8165.cae4fe64.chunk.js"},{"revision":null,"url":"static/js/8394.76813da4.chunk.js"},{"revision":null,"url":"static/js/8680.bedf9f1d.chunk.js"},{"revision":null,"url":"static/js/8712.33144173.chunk.js"},{"revision":null,"url":"static/js/8730.5d7e0883.chunk.js"},{"revision":null,"url":"static/js/8747.e871aff9.chunk.js"},{"revision":null,"url":"static/js/8786.0cef136a.chunk.js"},{"revision":null,"url":"static/js/8925.489888d1.chunk.js"},{"revision":null,"url":"static/js/8994.96599fdb.chunk.js"},{"revision":null,"url":"static/js/9122.2c7cb7f5.chunk.js"},{"revision":null,"url":"static/js/9212.7ecadf6e.chunk.js"},{"revision":null,"url":"static/js/9321.fef6ca8f.chunk.js"},{"revision":null,"url":"static/js/9391.21d0b222.chunk.js"},{"revision":null,"url":"static/js/9452.980895b9.chunk.js"},{"revision":null,"url":"static/js/9452.980895b9.chunk.js.LICENSE.txt"},{"revision":null,"url":"static/js/9543.7153f684.chunk.js"},{"revision":null,"url":"static/js/9604.c7ff9285.chunk.js"},{"revision":null,"url":"static/js/9684.b9d2b07f.chunk.js"},{"revision":null,"url":"static/js/9842.f0d4622a.chunk.js"},{"revision":null,"url":"static/js/9844.92799d99.chunk.js"},{"revision":null,"url":"static/js/9965.b523d6de.chunk.js"},{"revision":null,"url":"static/js/9970.07429628.chunk.js"},{"revision":null,"url":"static/js/main.0b431fcf.js"},{"revision":null,"url":"static/js/main.0b431fcf.js.LICENSE.txt"}] || []);
  workbox.routing.registerRoute(
    ({ url }) => {
      // Match only static assets (JS, CSS, images)
      return (
        url.origin === self.location.origin &&
        (url.pathname.endsWith(".html") ||
          url.pathname.endsWith(".js") ||
          url.pathname.endsWith(".css") ||
          url.pathname.endsWith(".png") ||
          url.pathname.endsWith(".ico") ||
          url.pathname.startsWith("/static/css/") ||
          url.pathname.startsWith("/static/js/") ||
          url.pathname.startsWith("/static/media/"))
      );
    },
    new workbox.strategies.CacheFirst({
      cacheName: "static-assets-cache-v1",
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
          maxEntries: 1000, // Limit the number of entries in the cache
        }),
      ],
    })
  );

  // Dynamic API caching
  const apiOrigin =
    self.location.hostname === "localhost"
      ? "http://localhost:9002"
      : "https://sameer-yadav.online";

  workbox.routing.registerRoute(
    ({ url }) => url.origin === "http://localhost:9002",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "dynamic-api-cache-v1",
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 1000,
          maxAgeSeconds: 1 * 60 * 60, // Cache for 1 hour
        }),
      ],
    })
  );

  // Offline form submission
  const allowedMethods = ["POST", "PUT", "DELETE"];
  workbox.routing.registerRoute(
    ({ request }) =>
      allowedMethods.includes(request.method) && // Match allowed methods dynamically
      request.url.startsWith("http://localhost:9002"),
    new workbox.strategies.NetworkOnly({
      plugins: [
        new workbox.backgroundSync.BackgroundSyncPlugin("formSubmissionQueue", {
          maxRetentionTime: 24 * 60, // Retry for up to 24 hours
          onSync: async ({ queue }) => {
            let entry;
            while ((entry = await queue.shiftRequest())) {
              try {
                const requestInit = {
                  method: entry.request.method, // Dynamically handle the method
                  headers: entry.request.headers,
                  body: await entry.request.blob(),
                  credentials: "include", // Include cookies
                };
                const url = entry.request.url;

                await fetch(url, requestInit);
              } catch (err) {
                console.error("Replay failed for:", entry.request, err);
                throw err;
              }
            }
          },
        }),
      ],
    })
  );
} else {
  console.error("Workbox could not be loaded.");
}

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDTDvGXNnUuzR3cqjVc5ZLyHfNqhrA_q5w",
  authDomain: "wapp-c2920.firebaseapp.com",
  databaseURL: "https://wapp-c2920-default-rtdb.firebaseio.com",
  projectId: "wapp-c2920",
  storageBucket: "wapp-c2920.appspot.com",
  messagingSenderId: "173956484948",
  appId: "1:173956484948:web:3c7ea53f56301230aa82c1",
  measurementId: "G-VX01JD5DCY",
});

// Firebase service worker for push notifications
const messaging = firebase.messaging();
// Handle background messages
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification?.title || "Default Title";
  const notificationBody = payload.notification?.body || "Default Body";
  const notificationIcon =
    payload.notification?.image ||
    "https://paymaster-document.s3.ap-south-1.amazonaws.com/kyc/personal.webp/favicon.png";

  const notificationOptions = {
    body: notificationBody,
    icon: notificationIcon,
    data: {
      click_action: "FLUTTER_NOTIFICATION_CLICK",
    },
  };

  // Show the notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});
