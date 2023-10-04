import React, { Component } from 'react';
import About from './About';
import Shopping from './Shopping';

import Chef from './Chef';
import Chef1 from '../images/chef/1.jpg';
import Chef2 from '../images/chef/2.jpeg';
import Chef3 from '../images/chef/3.jpeg';
import Chef4 from '../images/chef/4.jpeg';

class Home extends Component {

    render() {
        return (
            <>
                <div  className='header-img'>
                    <div className='div-title'>
                        <h1 className='title'>Welcome to Sweet Cake
                        </h1>
                        <p>It's one of the best cooking cake in the world
                        </p>
                    </div>
                </div>
                <About />

                <Shopping />

                <div className='chefs'>
                    <Chef img={Chef1} name="James Harper" paragragh="James is the best chef for baking wedding cake , cup cake and dessert." />
                    <Chef img={Chef2} name="Benjamin Aaron" paragragh='Benjamin is the best chef for baking wedding cake and rollet.' />
                    <Chef img={Chef3} name='Sophia Alexander' paragragh='Sophia is best chef for baking cup cake and chocolate.' />
                    <Chef img={Chef4} name='Lucas Cameron
' paragragh='Lucas is the best chef for baking cup cake and wedding cake.' />
                </div>

            </>
        );
    }
}

export default Home;