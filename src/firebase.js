import firebase from "firebase";


const firebaseConfig = {

};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
