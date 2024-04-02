
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAfcLwBl5ehyPvf-Veu04JyV9aLDckf82g",
  authDomain: "context-api-4c8ba.firebaseapp.com",
  projectId: "context-api-4c8ba",
  storageBucket: "context-api-4c8ba.appspot.com",
  messagingSenderId: "873758985785",
  appId: "1:873758985785:web:c15c7f13161764d3f007e8"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth