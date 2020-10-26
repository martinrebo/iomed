import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


export const firebaseConfig = {
    apiKey: "AIzaSyA4gtn8yRevRKp_rsE0yzCFCWn9RTDamlE",
    authDomain: "iomed-react.firebaseapp.com",
    databaseURL: "https://iomed-react.firebaseio.com",
    projectId: "iomed-react",
    storageBucket: "iomed-react.appspot.com",
    messagingSenderId: "176201738835",
    appId: "1:176201738835:web:18f388253758c60e02f4a6",
    measurementId: "G-KCHLH0BFW9"
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


// Create user in Database
auth.onAuthStateChanged(function (LoggedUser) {
console.log("Authenticate user - Create Database")
    if (LoggedUser) {
        firebase.firestore().collection('users').doc(LoggedUser.uid).set({
            name: LoggedUser.displayName,
            email: LoggedUser.email
        }, { merge: true })


    } else {
        console.log("user not Logged in")
    }
})

// Configure FirebaseUI.
export const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/weather',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
    ]
};

// Get Saved Search 

