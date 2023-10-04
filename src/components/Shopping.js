import React from 'react';
import '../styles/Shopping.scss'
import Icon2 from '../images/cooky-icon-2.png';


function Shopping(props) {

    return (
        <div>
            <section id="shopping">
                <div id="shopping-pa">
                    <h3>Shop OR Served Deserts </h3>
                    <p>You Can Choose Your Deserts</p>
                    <a href="pages/shop.html">Shop Deserts</a>
                </div>
                <div id="shopping-img">

                </div>

            </section>
            <img id="icon-2" src={Icon2} alt="cookies" />
        </div>
    );
}

export default Shopping;