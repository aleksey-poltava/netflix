import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';

import { auth, db } from './lib/firebase.prod';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
)
