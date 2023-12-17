import React, {useContext} from 'react';
import cl from './DistributionCommittee.module.css'
import {request} from "../../../api/request";
import {Context} from "../../../context/context";
import Button from "../../shared/Button/Button";

const DistibutionCommittee = ({distributors}) => {

    const context = useContext(Context)

    return (
        <div className={cl.wrapper}>
                {
                    distributors?.map(e => (
                            <div className={cl.com} key={e?.id}>
                                <Button height={15} requestFunction={async () => {
                                    await request.deleteDist(e?.id).then(() => {
                                        context.getCurrentWorld()
                                    })
                                }}>Удалить</Button>
                                <div>Возраст: {e?.age}</div>
                                <div>Настроение: {e?.mood}</div>
                                <div className={cl.skills}>
                                    <span>Умения: {e?.distributorSkills.length ? e?.distributorSkills.map(e => <span>{e.name} </span>) : 'Отсутсвуют'}</span>
                                </div>
                                <div>Крики: {e?.distributorSkills?.reduce((acc, el) => acc + el?.requiredScreams, 0)}</div>
                            </div>
                        )
                    )
                }
        </div>
    );
};

export default DistibutionCommittee;
