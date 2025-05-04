import { defineBoot } from '#q-app/wrappers';
import { initializeApp } from 'firebase/app';
import {
  initializeFirestore,
  CACHE_SIZE_UNLIMITED,
  persistentLocalCache,
  persistentMultipleTabManager,
  disableNetwork,
  enableNetwork
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1t2AKrSAoY7RklFTfQpEKtxRbAgIr7E0",
  authDomain: "nwsingatest.firebaseapp.com",
  projectId: "nwsingatest",
  storageBucket: "nwsingatest.firebasestorage.app",
  messagingSenderId: "545366628547",
  appId: "1:545366628547:web:5a368ecc0f6c2575fdea76"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore with settings optimized for mobile
// Using the new recommended approach with cache settings
export const db = initializeFirestore(firebaseApp, {
  localCache: persistentLocalCache({
    cacheSizeBytes: CACHE_SIZE_UNLIMITED,
    tabManager: persistentMultipleTabManager()
  })
});

// Function to handle online/offline status
const handleConnectionStatus = () => {
  window.addEventListener('online', () => {
    console.log('App is online, enabling Firestore network');
    enableNetwork(db).catch(err => console.error('Error enabling network:', err));
  });

  window.addEventListener('offline', () => {
    console.log('App is offline, disabling Firestore network');
    disableNetwork(db).catch(err => console.error('Error disabling network:', err));
  });
};

export default defineBoot(({ app }) => {
  // Make Firebase available to all components
  app.config.globalProperties.$firebase = {
    app: firebaseApp,
    db
  };

  // Handle connection status
  handleConnectionStatus();
});
