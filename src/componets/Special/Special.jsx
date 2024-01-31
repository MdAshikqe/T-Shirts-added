import React, { useContext } from 'react';
import { GoldenRing } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const anties=useContext(GoldenRing)
    return (
        <div>
            <h1>Speecial</h1>
            <small>{ring}</small>
            <br />
            
            <small>{anties}</small>

        </div>
    );
};

export default Special;