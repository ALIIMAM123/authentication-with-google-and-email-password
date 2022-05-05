import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig =  {
    apiKey: "AIzaSyAB-E3nCYETbJZHzPnCTWt9bzLYtvWzN78",
    authDomain: "authentication-2872e.firebaseapp.com",
    projectId: "authentication-2872e",
    storageBucket: "authentication-2872e.appspot.com",
    messagingSenderId: "359472889910",
    appId: "1:359472889910:web:d3a8d5cd2a18fab4099897"
  };

//   initialize firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
  