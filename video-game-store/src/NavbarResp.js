import React, { useState, useEffect } from 'react';
import { FaDesktop, FaGamepad, FaPlaystation, FaUser } from 'react-icons/fa';
import { TbDeviceNintendo } from 'react-icons/tb';

import './componetes/NavbarResp.css';

function NavbarResp() {
  const [navAberta, setNavAberta] = useState(false);
  const [exibirNavbarDesktop, setExibirNavbarDesktop] = useState(false);

  useEffect(() => {
    const verificarTamanhoDaTela = () => {
      if (window.innerWidth >= 768) {
        setExibirNavbarDesktop(true);
      } else {
        setExibirNavbarDesktop(false);
      }
    };

    verificarTamanhoDaTela();

    window.addEventListener('resize', verificarTamanhoDaTela);

    return () => {
      window.removeEventListener('resize', verificarTamanhoDaTela);
    };
  }, []);

  const abrirNav = () => {
    setNavAberta(true);
  };

  const fecharNav = () => {
    setNavAberta(false);
  };

  return (
    <div>
      <button className="botao-menu" onClick={abrirNav}>☰</button>

      {navAberta && (
        <div className="nav">
          <button className="botao-menu" onClick={fecharNav}>☰</button>
          <nav>
            <ul>
              <li>
                <a href="#">
                  <FaDesktop className='icon-margin'/>
                  PC
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGamepad className='icon-margin'/>
                  XBOX
                </a>
              </li>
              <li>
                <a href="#">
                  <FaPlaystation className='icon-margin'/>
                  PSN
                </a>
              </li>
              <li>
                <a href="#">
                  <TbDeviceNintendo className='icon-margin'/>
                  Nintendo
                </a>
              </li>
              <li>
                <a href="#">
                  <FaUser />
                  Entrar
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {exibirNavbarDesktop && (
        <div className="nav-desktop">
          
        </div>
      )}
    </div>
  );
}

export default NavbarResp;
