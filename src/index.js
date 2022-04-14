import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';

import { db } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <FirebaseContext.Provider value={{db}}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
)
