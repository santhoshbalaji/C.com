// Initialize Firebase
// TODO: Replace with your project's customized code snippet

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

var config = {
    apiKey: "AIzaSyBLbD9j-ebpfMJrl4OLkXOxkvBjyX48FBQ",
    authDomain: "check-c.firebaseapp.com",
    projectId: "check-c",
    // databaseURL: "https://check-c.firebaseio.com",
    // messagingSenderId: "1057689071135",
};
firebase.initializeApp(config);



var db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

// console.log(db)