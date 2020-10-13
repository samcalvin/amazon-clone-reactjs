import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMxaR-jyzi3qOCl_UJ35aMs1bE1LTk0kQ",
  authDomain: "clone-bbe18.firebaseapp.com",
  databaseURL: "https://clone-bbe18.firebaseio.com",
  projectId: "clone-bbe18",
  storageBucket: "clone-bbe18.appspot.com",
  messagingSenderId: "529777557667",
  appId: "1:529777557667:web:567ad294fd64a5231dbf16",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
