import React from 'react';
import ReactDOM from 'react-dom/client';
import './componetes/index.css';
import NavbarResp from './NavbarResp';
import ImageCarousel from './GaleriaRotativa'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarResp/>
    <ImageCarousel/>
  </React.StrictMode>
);