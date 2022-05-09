import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rutas from './components/Router/Rutas';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rutas/>
  </React.StrictMode>
);

