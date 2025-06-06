import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0t_5fdgAEyXTaLhMqbRmZm0SGORowqDU",
  authDomain: "smartflow-c0fb5.firebaseapp.com",
  projectId: "smartflow-c0fb5",
  storageBucket: "smartflow-c0fb5.appspot.com",
  messagingSenderId: "334938120915",
  appId: "1:334938120915:web:320600cc1e0c5e141caa26",
  measurementId: "G-8QDE3GEQQ3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function fetchProFeatureFlags() {
  try {
    const docRef = doc(db, "proFeatureFlags", "default");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.warn("No feature flags found, returning empty.");
      return {};
    }
  } catch (error) {
    console.error("Error fetching feature flags:", error);
    return {};
  }
}
