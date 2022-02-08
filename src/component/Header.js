import React from 'react';
import '/Users/mac/Desktop/Osy-lecture/myapp/src/Header.css';

const Header = () => {
  return <div>
        <header>
            <div class="logo-container">
                <img src="../assets/img/logo.svg" alt="logo" />
                <h4 class="logo">Three Dots</h4>
            </div>
            <nav>
                <ul class="nav-links">
                    <li><a class="nav-link" href="/body">about</a></li>
                    <li><a class="nav-link" href="#">Products</a></li>
                    <li><a class="nav-link" href="#">Contact</a></li>
                </ul>
            </nav>
            <div class="cart">
                <img src="../assets/img/cart.svg" alt="cart" />
            </div>
        </header>
  </div>;
};

export default Header;

