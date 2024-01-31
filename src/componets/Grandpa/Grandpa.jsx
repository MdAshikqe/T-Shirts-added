
import "./Grandpa.css"
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import { createContext } from 'react';

//contex hook
export const GoldenRing=createContext('ring')






const Grandpa = () => {
    const ring="Daimond"
    return (
        <div className='box-style'>
           
            <GoldenRing.Provider value="Golden-Ring">
            <h2>Grandpa</h2> 
            <div className='flex'>
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </div>
            </GoldenRing.Provider>
            
            
        </div>
    );
};

export default Grandpa;