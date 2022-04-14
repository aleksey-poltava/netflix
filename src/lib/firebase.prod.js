import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { seedDatabase } from '../seed';

// we need to seed database

// we need a config here
const config = {
    apiKey: "AIzaSyDtbHmUVwj7h-4wcz2Vc_b857L6THVBySs",
    authDomain: "netflix-a4664.firebaseapp.com",
    projectId: "netflix-a4664",
    storageBucket: "netflix-a4664.appspot.com",
    messagingSenderId: "624551345112",
    appId: "1:624551345112:web:8a4a6e74b41efc6ba690ad"
};

const app = initializeApp(config);

console.log(app.name);

const db = getFirestore(app);

console.log(db);

// seedDatabase(db);

export {db};

