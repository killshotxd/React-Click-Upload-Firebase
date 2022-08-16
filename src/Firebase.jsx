import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB_ns8XZRdfL2OTp04Klvxuwqvel7D95BQ",
  authDomain: "uploadtiles.firebaseapp.com",
  projectId: "uploadtiles",
  storageBucket: "uploadtiles.appspot.com",
  messagingSenderId: "381323562427",
  appId: "1:381323562427:web:d117350016efab213f089e",
  measurementId: "G-DC0G08X08S",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
