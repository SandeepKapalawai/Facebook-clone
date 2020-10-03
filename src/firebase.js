import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyApne-jZ64U-il330Twdre04FSqekYHos0",
    authDomain: "facebook-8158d.firebaseapp.com",
    databaseURL: "https://facebook-8158d.firebaseio.com",
    projectId: "facebook-8158d",
    storageBucket: "facebook-8158d.appspot.com",
    messagingSenderId: "492183790915",
    appId: "1:492183790915:web:6d4dec89183d2cff677bf6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;   