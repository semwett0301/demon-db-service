import React, {useContext} from 'react';
import WorldCard from "./WorldCard/WorldCard";
import {Context} from "../../context/context";
import {request} from "../../api/request";
import Button from "../shared/Button/Button";
import cl from './WorldInfo.module.css'

const WorldInfo = ({hell, real}) => {

    const context = useContext(Context)

    const infoReal = [
        {
            name: 'Количество мужчин',
            value: real?.humans?.reduce((acc, el) => {
                if (el.sex === 'MALE') return acc + 1
                else return acc
            }, 0)
        },
        {
            name: 'Количество женщин',
            value: real?.humans?.reduce((acc, el) => {
                if (el.sex === 'FEMALE') return acc + 1
                else return acc
            }, 0)
        }
    ]

    const infoHell = [
        {
            name: 'Количество людей',
            value: hell?.humans?.length
        },
        {
            name: 'Количество чертей',
            value: hell?.demons?.length
        }
    ]
    return (
        <div className={cl.wrapper}>
            <div className={cl.world}>
                <WorldCard name={'Реальный мир'} info={infoReal}/>
                <Button width={'100%'} height={'30px'} requestFunction={async () => {
                    await request.genocide(context.worldId).then(() => {
                        context.getCurrentWorld()
                    })
                }}>
                    Геноцид
                </Button>
            </div>
            <div className={cl.world}>
                <WorldCard name={'Ад'} info={infoHell}/>
                <Button width={'100%'} height={'30px'} requestFunction={async () => {
                    await request.amnesty(context.worldId).then(() => {
                        context.getCurrentWorld()
                    })
                }}>
                    Амнистия
                </Button>
            </div>
        </div>
    );
};

export default WorldInfo;
