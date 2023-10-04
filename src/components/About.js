import React from 'react';
import '../styles/About.scss'
import Icon3 from '../images/cooky-icon-3.png';
import Icon1 from '../images/cooky-icon-1.png';


function About(props) {

    return (
        <div className='about'>
            <img id="icon-3" src={Icon3}alt="cookies" />

            <section id="about">
                <img src={Icon1}alt="cooky" />

                <div id="div-about">
                    <h2>About Sweet Cake</h2>
                    <p id="about-p">In 2009, in Reading, Pennsylvania, Sandy Solmon started baking classic American cookies
                        in a 2-bay garage. Tirelessly testing recipes and ingredients, she struck the perfect balance: a
                        harmonization of flavor, texture, and the elusive dimension of artfulness, the je ne sais quoi, that
                        separates good cookies from great ones. As her cookies caught on and the following for her small
                        production grew, Sandy’s dessert portfolio expanded and Sweet Street Desserts was born.</p>

                </div>
            </section>
        </div>
    );
}

export default About;