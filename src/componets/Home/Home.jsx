import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shop from '../Shop/Shop';
import "./Home.css"
import Cart from '../Cart/Cart';
import toast, { Toaster } from 'react-hot-toast';


const Home = () => {
    const tshirts=useLoaderData()
    const [cart,setCart]=useState([])

    const handleAddToCart=tshirt=>{
        const exitsCart= cart.find(ts => ts._id === tshirt._id)
        if(exitsCart){
            toast("This item already Exit!!!!!")

        }
        else{
            const newCart= [...cart,tshirt]
            setCart(newCart)
        }
        

    }

    const handleRemoveToCart=(id)=>{
        const remaing= cart.filter(ts=> ts._id !== id )
        setCart(remaing)
    }
    
    

    return (
        <div className='home-style'>
           
           <div className='shops-container'>
           {
                tshirts.map(tshart=> <Shop
                key={tshart._id}
                tshart={tshart}
                handleAddToCart={handleAddToCart}
          
                ></Shop>)
            }
           </div>
           <div className='order-summary'> 
           <Cart 
           key={cart._id}
           cart={cart}
           handleRemoveToCart={handleRemoveToCart}


           ></Cart>
           
           
           </div>
           <Toaster></Toaster>
        </div>
    );
};

export default Home;