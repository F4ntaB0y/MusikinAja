import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Kita akan tambahkan file ini
import App from './App'; // Mengimpor App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);