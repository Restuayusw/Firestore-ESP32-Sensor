const firebase = require('firebase');

//change the firebase configuration below according to your firebase SDK
const config = {
  apiKey: "AIzaSyCGqq6oMA1GTbURV0DC-X72ZEhj0aaiRgU",
  authDomain: "esp32-hall-sensor.firebaseapp.com",
  projectId: "esp32-hall-sensor",
  storageBucket: "esp32-hall-sensor.appspot.com",
  messagingSenderId: "251861365362",
  appId: "1:251861365362:web:06ace13b6907d62e28c8eb",
};

const fire = firebase.initializeApp(config);
module.exports = fire;