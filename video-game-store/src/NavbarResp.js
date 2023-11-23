import React, { useState, useEffect } from 'react';
import { FaDesktop, FaGamepad, FaPlaystation, FaUser } from 'react-icons/fa';
import { TbDeviceNintendo } from 'react-icons/tb';
import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';

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
                  <FaUser className='icon-margin'/>
                  Entrar
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {exibirNavbarDesktop && (
        <header className="nav-desktop">
          <nav className='flex-container'>
          <div className='Logo'>
          <a>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/55213771518339.5bc7dc8be780b.png' alt='Logo'>
            </img>
          </a>
          </div>
            <div className='jogos'>
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
                    Nintendo</a>
                  </li>
              </ul>
            </div>

            <div className='Usuario'>
            <ul>
              <li>
              <a href="#"> 
                <FaUser className='icon-margin'/>
                Entrar
                </a>
              </li>
              <li>
                <a href="#"><FaHeart/></a>
              </li>
              <li>
              <a href="#"><FaShoppingCart /></a>
              </li>
            </ul>
            </div>
          </nav>
        </header>
      )}
    </div>
  );
}

export default NavbarResp;