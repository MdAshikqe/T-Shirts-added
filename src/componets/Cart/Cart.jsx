import React from 'react';
import "./Cart.css"

const Cart = ({cart,handleRemoveToCart}) => {
    let massage;
    if(cart.length === 0){
        massage= <p>Please added some product</p>
    }
    else{
        massage= <div>
            <p className='red'>Thanks waste your money</p>
        </div>
    }
    
    
    return (
        <div>
            <h1 className={cart.length >2 ? 'yellow' : 'green'}>Order Summary: {cart.length} </h1>

            {cart.length > 2 ? <span className='pink'>Aro kino</span>: <p></p>}
            {massage}
           {
            cart.map(tshart=> <p>
                
                {tshart.name} <button onClick={()=>handleRemoveToCart(tshart._id)}>X</button>
                </p>)
           }

           {
            cart.length ===2 && <p>doble bonaja</p> 
           }
           {
            cart.length !==3 || <p>3 ta holo na</p>
           }
        </div>
    );
};

export default Cart;