// importScripts(
//   "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
// );
// importScripts(
//   "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
// );

// firebase.initializeApp({
//   apiKey: "AIzaSyDTDvGXNnUuzR3cqjVc5ZLyHfNqhrA_q5w",
//   authDomain: "wapp-c2920.firebaseapp.com",
//   databaseURL: "https://wapp-c2920-default-rtdb.firebaseio.com",
//   projectId: "wapp-c2920",
//   storageBucket: "wapp-c2920.appspot.com",
//   messagingSenderId: "173956484948",
//   appId: "1:173956484948:web:3c7ea53f56301230aa82c1",
//   measurementId: "G-VX01JD5DCY",
// });

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.image,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

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

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle = payload.notification?.title || "Default Title";
  const notificationBody = payload.notification?.body || "Default Body";
  const notificationIcon =
    payload.notification?.image || "path/to/default/icon.png"; // Default icon path if image is not provided

  const notificationOptions = {
    body: notificationBody,
    icon: notificationIcon,
    data: {
      click_action: "FLUTTER_NOTIFICATION_CLICK", // Specify action on notification click if needed
    },
  };

  // Show the notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});
