import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAWhc_Y7yJxe5H1xZ46vJNB9U7jCt61g3Y",
  authDomain: "fir-gallery-f14de.firebaseapp.com",
  databaseURL: "https://fir-gallery-f14de.firebaseio.com",
  projectId: "fir-gallery-f14de",
  storageBucket: "fir-gallery-f14de.appspot.com",
  messagingSenderId: "618026443239",
  appId: "1:618026443239:web:c6b5fc079d1f846f6d9d42",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFireStore, projectStorage, timestamp };
export default firebase;
