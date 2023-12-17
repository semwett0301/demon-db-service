import React, {useContext} from 'react';
import DistibutionCommittee from "./DistributionCommittee/DistibutionCommittee";
import cl from './DistributionLayer.module.css'
import Button from "../shared/Button/Button";
import {Context} from "../../context/context";
import {request} from "../../api/request";
import {getWorld} from "../../api/modules/worldModule";

const DistributionLayer = ({committees, humansAmount}) => {
    const context = useContext(Context)

    return (
        <div className={cl.wrapper}>
            <div className={cl.create}>
                <h1>Количество людей: {humansAmount}</h1>
                <Button width={'20%'} height={40} requestFunction={async () => {
                    await request.createDist(context.worldId,  {
                        "age": 23,
                        "mood": "GOOD",
                        "distributorSkills": [
                            {
                                "name": "Крутой скилл",
                                "requiredScreams": 3000
                            }
                        ]
                    }).then(() => context.getCurrentWorld())
                }}><b>Создать</b></Button>
            </div>

            <div className={cl.com}>
                {committees?.map(com => (
                    <div>
                        <h2>Комитет: {com?.id}</h2>
                        <div >
                            <DistibutionCommittee key={com.id} distributors={com?.distributors}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DistributionLayer;
