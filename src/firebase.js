import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXkMl5HY8vAemMOIKJ92Q8mzXx_S54VQ4",
  authDomain: "task-spot-app-id.firebaseapp.com",
  projectId: "task-spot-app-id",
  storageBucket: "task-spot-app-id.appspot.com",
  messagingSenderId: "977567211775",
  appId: "1:977567211775:web:39949e5a029770794e6cca",
  measurementId: "G-HFNZZ4HTJH" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

