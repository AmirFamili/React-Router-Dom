import React from 'react';
import '../styles/Footer.scss'
import Sweet from '../images/sweet.png'
function Footer() {
    return (
        <footer>
        <div id="upper-footer">
            <div id="short-menu">
                <a href="#">Home</a>
                <a href="pages/shop.html">Shop</a>
                <a href="pages/registration.html">Sing Up / Log In</a>
            </div>
            <img src={Sweet} alt="Sweet"/>
        </div>

        <p>© 2023 Sweet Cake </p>
    </footer>
    );
}

export default Footer;