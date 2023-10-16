import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

let firebaseConfig: FirebaseOptions = {
    apiKey: JSON.stringify(process.env.API_KEY),
    authDomain: JSON.stringify(process.env.AUTH_DOMAIN),
    projectId: JSON.stringify(process.env.PROJECT_ID),
    storageBucket: JSON.stringify(process.env.STORAGE_BUCKET),
    messagingSenderId: JSON.stringify(process.env.MESSAGING_SENDER_ID),
    appId: JSON.stringify(process.env.APP_ID),
    measurementId: JSON.stringify(process.env.MEASUREMENT_ID)
  };


export default firebaseConfig;


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
