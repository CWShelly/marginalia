import * as firebase from 'firebase';



const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET

};
  firebase.initializeApp(config);

 console.log(process.env.NODE_ENV);
const database = firebase.database();
const storage = firebase.storage();
console.log(firebase.storage);
// const database = firebase.firestore(app)

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { storage, firebase, googleAuthProvider, database as default }
