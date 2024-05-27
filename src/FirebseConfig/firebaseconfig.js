// firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBW8yy11c8BHqrmWUVhusYuke8lYlb8hPs",
//   authDomain: "rewardearn-fc7dc.firebaseapp.com",
//   projectId: "rewardearn-fc7dc",
//   storageBucket: "rewardearn-fc7dc.appspot.com",
//   messagingSenderId: "888674912162",
//   appId: "1:888674912162:web:2a9a6e8d67935757f3d4fb",
//   measurementId: "G-QQ1XBHYPT9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);


const firebaseConfig = {
    apiKey: "AIzaSyBW8yy11c8BHqrmWUVhusYuke8lYlb8hPs",
    authDomain: "rewardearn-fc7dc.firebaseapp.com",
    projectId: "rewardearn-fc7dc",
    storageBucket: "rewardearn-fc7dc.appspot.com",
    messagingSenderId: "888674912162",
    appId: "1:888674912162:web:2a9a6e8d67935757f3d4fb",
    measurementId: "G-QQ1XBHYPT9"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);