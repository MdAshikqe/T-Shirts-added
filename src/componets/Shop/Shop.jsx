import React from 'react';
import "./Shop.css"

const Shop = ({tshart,handleAddToCart}) => {
    const {name,picture,_id,price}=tshart;
    return (
        <div className='shop-container'>
            
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: {price}</p>
            <button onClick={()=>handleAddToCart(tshart)}>Buy Now</button>
            

            
        </div>
    );
};

export default Shop;