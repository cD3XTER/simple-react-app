import React from 'react';
import ReactDOM from 'react-dom/client';
import './client/index.css';
import App from './client/App.js';
import 'bootstrap/dist/css/bootstrap.css';
import gsap from 'gsap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

