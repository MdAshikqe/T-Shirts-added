import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Shop from '../Shop/Shop';
import "./Home.css"

const Home = () => {
    const tshirts=useLoaderData()
    console.log(tshirts)
    

    return (
        <div className='home-style'>
           <div className='home-container'>
           {
                tshirts.map(tshart=> <Shop
                key={tshart._id}
                tshart={tshart}
                ></Shop>)
            }
           </div>
        </div>
    );
};

export default Home;