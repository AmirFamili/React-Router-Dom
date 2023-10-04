import React from 'react';
import '../styles/Chef.scss'


function Chef(props) {
    const {name,img,paragragh,}=props;
    return (

    <div class="chef">
        <img src={img}alt="chef" class="chef-img" />
        <h3 class="chef-name">{name}</h3>
        <p class="chef-about">{paragragh}</p>
        <div class="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
        </div>

    </div>
    );
}

export default Chef;