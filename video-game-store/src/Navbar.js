// src/Navbar.js
import React from 'react';
import './Navbar.css';
import { FaSearch, FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa';

function Navbar() {
  return (
    <nav>
      <ul>
      <li>
        <a href="#">Loja XYZ</a>
        </li>
        <li>
            <a href="#">PC</a>
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
        <li className="search">
        <div className="search-icon">
            <FaSearch />
          </div>
          <input type="text" placeholder="Search" />
        </li>
        <li>
            <a href="#"><FaShoppingCart /></a>
            </li>
        <li>
            <a href="#"><FaHeart/></a>
            </li>
        <li>
            <a href="#"><FaUser/></a>
            </li>
      </ul>
    </nav>
  );
}

export default Navbar;
