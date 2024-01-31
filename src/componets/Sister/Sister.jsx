import React, { useContext } from 'react';
import { GoldenRing } from '../Grandpa/Grandpa';

const Sister = () => {
    const anties=useContext(GoldenRing)
    return (
        <div>
            <h1>sister</h1>
            <small>{anties}</small>
        </div>
    );
};

export default Sister;