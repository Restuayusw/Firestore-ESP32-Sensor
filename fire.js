const firebase = require('firebase');

//change the firebase configuration below according to your firebase SDK
const config = {
  apiKey: "AIzaSyACGMOYQPl4giDJNsqdVTXuutjzKzx-UqE",
  authDomain: "cadence-sensor-esp32.firebaseapp.com",
  projectId: "cadence-sensor-esp32",
  storageBucket: "cadence-sensor-esp32.appspot.com",
  messagingSenderId: "799444608495",
  appId: "1:799444608495:web:cf94896cd28081accbc21a",

};

const fire = firebase.initializeApp(config);
module.exports = fire;