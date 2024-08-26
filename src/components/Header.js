// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>BUANG-IN</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/order">Order</Link>
        <Link to="/history">History</Link>
      </nav>
    </header>
  );
}

export default Header;
