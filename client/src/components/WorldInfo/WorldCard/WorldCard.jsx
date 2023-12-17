import React from 'react';
import cl from './WorldCard.module.css'

const WorldCard = ({info, name}) => {
    return (
        <div className={cl.wrapper}>
            <h1>{name}</h1>
            <div>
                {
                    info.map(rule => {
                        return (
                            <div className={cl.text} key={rule.name}>{rule.name}: {rule.value}</div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default WorldCard;
