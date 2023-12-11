import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAd0f_VFh3loT2BS-c83rdD_yTKH6hDHns",
    authDomain: "react-blog-test-695bd.firebaseapp.com",
    projectId: "react-blog-test-695bd",
    storageBucket: "react-blog-test-695bd.appspot.com",
    messagingSenderId: "374403668782",
    appId: "1:374403668782:web:44de0f5df88e32eabcb8bf"
};

firebase.initializeApp(firebaseConfig);

export default firebase;