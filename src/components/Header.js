import React, { useState } from 'react';
import '../styles/Header.scss'
import Sweet from '../images/sweet.png'
import {Link} from 'react-router-dom'

const Header=()=> {
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor =() => {
  
      if (window.scrollY > 50) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };

  window.addEventListener('scroll', changeNavbarColor);
    return (
        <header className={colorChange ? 'colorChange' : 'clearColor'}>
        
                <img src={Sweet} />
                <nav className='nav'>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <a href="/#about">About Us</a>
                    <Link to="/registration">Login/Sing up</Link>
                    
                </nav>
           
        </header>
    );
}

export default Header;


