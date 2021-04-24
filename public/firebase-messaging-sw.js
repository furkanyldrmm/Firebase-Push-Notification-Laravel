importScripts('https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.2/firebase-messaging.js');
   
firebase.initializeApp({
    apiKey: "AIzaSyBFRMWnKkJBk7WWVCtTo2X3mxSGxqC3_3A",
    projectId: "push-notification-f5fea",
    messagingSenderId: "99218056583",
    appId: "1:99218056583:web:24b4538cb8be391d061f22",
});
  
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function({data:{title,body,icon}}) {
    return self.registration.showNotification(title,{body,icon});
});