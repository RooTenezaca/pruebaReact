import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';


import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  //ayuda a detectar algunos problemas, que solo se aplica en desarrollo.
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
