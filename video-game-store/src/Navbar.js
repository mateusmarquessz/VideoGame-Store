// src/Navbar.js
import React, { useState } from 'react';
import './componetes/Navbar.css';
import {FaUser,FaDesktop } from 'react-icons/fa';

function Navbar() {
  const [navAberta, setNavAberta] = useState(false);

  const abrirNav = () => {
    setNavAberta(true);
  };

  const fecharNav = () => {
    setNavAberta(false);
  };

  return (
    <div>
      <button onClick={abrirNav}>☰</button>

      {navAberta && (
        
        <div className="nav">
          <button onClick={fecharNav}>☰</button>
          <nav>
        <ul>
          <li>
            <a href="#">
                <FaDesktop className='icon-margin' />
                PC
            </a>
          </li>
          <li>
            <a href="#">XBOX</a>
          </li>
          <li>
            <a href="#">PSN</a>
          </li>
          <li>
            <a href="#">Nintendo</a>
          </li>
          <li>
          <a href="#">
            <FaUser />
          </a>
          </li>
        </ul>
      </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
