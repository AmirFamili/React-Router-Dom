import React, { Component } from 'react';



class Product extends Component {
     
    render() {  
        const i=0;
        const {name,img,star,link}=this.props;
        return (
        
        <div  className="product">
            <img src={img} alt={name} className="productImg"/>
            <h3>{name} </h3>
            <div className="star">
                   
                    {/* {i<{star}<i class="fa-solid fa-star"></i>} */}
            
            </div>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href={link}>Show Product</a>

        </div>
        
        );
    }
}
 
export default Product;