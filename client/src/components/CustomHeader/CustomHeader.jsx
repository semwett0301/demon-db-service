import React from 'react';
import cl from './CustomHeader.module.css'
import Button from "../shared/Button/Button";

const CustomHeader = ({positive, negative, requestFunction, worldName}) => {
    return (
        <div className={cl.wrapper}>
            <span className={cl.name}>{worldName}</span>
            <header className={cl.header}>
                <div className={cl.positive}>+{positive}</div>
                <Button width={'30%'} height={50} requestFunction={requestFunction}>Следующий год</Button>
                <div className={cl.negative}>-{negative}</div>
            </header>
        </div>

    );
};

export default CustomHeader;
