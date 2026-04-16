import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

function parseConfig() {
  const raw = import.meta.env.VITE_FIREBASE_CONFIG;
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    console.warn("VITE_FIREBASE_CONFIG is not valid JSON");
    return null;
  }
}

export function getFirebaseContext() {
  const config = parseConfig();
  if (!config) return { app: null, auth: null, db: null, appId: "local-dev" };

  const app = initializeApp(config);
  return {
    app,
    auth: getAuth(app),
    db: getFirestore(app),
    appId: import.meta.env.VITE_APP_ID || "default-app-id",
  };
}
