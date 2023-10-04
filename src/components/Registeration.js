import React, { Component } from 'react';
import  '../styles/Registeration.scss'
import { Outlet,Link } from 'react-router-dom';


class Registeration extends Component {
    
    
    Login=()=>{
        const btnColor=document.querySelector('.btn-color');
        btnColor.style.left="117px";

    }
    register=()=>{
        const btnColor=document.querySelector('.btn-color');
        btnColor.style.left="0";

    }
    render() {
        return (
            <div className='body'>
                <div className="form-box">
                    <div className="btn-box">
                        <div className="btn-color"></div>
                        <Link className='btnRegister' onClick={this. register} to="register">Registeration</Link>
                        <Link className='btnLogin' to="login" onClick={this.Login} >Log In</Link>
                    </div>
                     {<Outlet/>}
                </div>
            </div>
        );
    }
}

export default Registeration;