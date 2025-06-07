import React from 'react';
import ReactDOM from 'react-dom/client'; // Esto es crucial y debe ser así
import App from './app.jsx'; // Asegúrate que esta sea la ruta correcta a tu App.jsx
import './index.css';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);