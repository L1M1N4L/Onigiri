import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmFT40DTWbHPfCcqJemcR_Enda4K1JIXA",
  authDomain: "onigiri-4f6e2.firebaseapp.com",
  projectId: "onigiri-4f6e2",
  storageBucket: "onigiri-4f6e2.firebasestorage.app",
  messagingSenderId: "1064250572031",
  appId: "1:1064250572031:web:b8db96a64f9d4f14ce60ca",
  measurementId: "G-EJ1SVSCZN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app; 