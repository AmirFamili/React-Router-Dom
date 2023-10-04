import React, { Component } from 'react';
import '../styles/Products.scss';
import axios from 'axios';
import Product  from './product';


class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isError:false,
        }
    }

    componentDidMount = () => {
        this.requestData();
    }
    requestData = () => {
        axios.get('./json/data.json')
        .then(response=>{
            this.setState({products:response.data})
           
        })
       .catch(()=>this.setState({isError:true}));
        
    }


    render() {
const {isError,products}=this.state
        return (
            <section>
                <h1>Shopping Deserts</h1>

                <div id="products">
            {isError?(<h2>We don't access products...</h2>):products.map((product)=>(<Product key={product.id} name={product.name} img={product.img} link={product.link} star={product.star}/> ))}
                </div>
            </section>
        );
    }
}

export default Products;