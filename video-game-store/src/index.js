import React from 'react';
import ReactDOM from 'react-dom/client';
import './componetes/index.css';
import NavbarResp from './NavbarResp';
import ImageCarousel from './GaleriaRotativa'
import Informacoes from './Infor'
import Game from './Games';
import Texto from './Texto'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarResp/>
    <div className='DivCentral'>
    <Texto/>
    <ImageCarousel/>
    <Informacoes/>
    </div>
  </React.StrictMode>
);