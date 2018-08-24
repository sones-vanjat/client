import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAQBoeoqg760OCRcvn5GdUIqqg7x0_f3uo",
  authDomain: "panjat-sosis.firebaseapp.com",
  databaseURL: "https://panjat-sosis.firebaseio.com",
  projectId: "panjat-sosis",
  storageBucket: "panjat-sosis.appspot.com",
  messagingSenderId: "579770190267"
};

let app = firebase.initializeApp(config);
let db = app.database()

export default db