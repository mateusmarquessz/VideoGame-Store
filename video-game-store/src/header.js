import React from 'react';
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';

const Header= () => {
  return (
    <div className='header-logo'>
    <ul>
      <li>
        <a href="#">
          <FaShoppingCart />
        </a>
      </li>
      <li>
        <a href="#">
          <FaHeart />
        </a>
      </li>
    </ul>
    </div>
  );
};

export default Header;
