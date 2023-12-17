import React from 'react';
import cl from './Button.module.css'

const Button = ({requestFunction, width, height, children}) => {
    return (
        <button style={{width: width, height: height}} className={cl.button} onClick={requestFunction}>{children}</button>
    );
};

export default Button;
