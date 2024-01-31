import React, { Children } from 'react';

const Cousin = ({children}) => {
    return (
        <div>
            <h1>Cousin</h1>
            <span>{children}</span>
        </div>
    );
};

export default Cousin;