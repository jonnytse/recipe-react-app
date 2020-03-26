import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAweTdkEvGKI84oJYlSb0YvhVAV0JyE96k",
    authDomain: "recipes-2c295.firebaseapp.com",
    databaseURL: "https://recipes-2c295.firebaseio.com",
    projectId: "recipes-2c295",
    storageBucket: "recipes-2c295.appspot.com",
    messagingSenderId: "143701790713",
    appId: "1:143701790713:web:bd63e3db130618863c3728"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const providers = {
    google: new firebase.auth.GoogleAuthProvider()
}
  
export const firestore = firebase.firestore();
export default firebase;