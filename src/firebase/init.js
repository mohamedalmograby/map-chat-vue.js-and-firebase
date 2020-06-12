import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD9rgQyK8M2b2jkk5w4oUgjLOymH4-i_JM",
    authDomain: "map-chat-me.firebaseapp.com",
    databaseURL: "https://map-chat-me.firebaseio.com",
    projectId: "map-chat-me",
    storageBucket: "map-chat-me.appspot.com",
    messagingSenderId: "614646391883",
    appId: "1:614646391883:web:2ab2130608f697a25299ce",
    measurementId: "G-Y0SR8RQV7C"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  

  export default firebaseApp.firestore()