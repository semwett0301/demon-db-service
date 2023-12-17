import { request } from "api";
import { Button, DistibutionCommittee } from "atom";
import { Context } from "context";
import React, { FC, useContext } from "react";
import { Mood } from "types";

import { DistributionCommitteeResponse } from "../../types/DistributionCommitteeResponse";
import cl from "./DistributionLayer.module.css";

interface Props {
  committees?: DistributionCommitteeResponse[];
  humansAmount: number;
}

export const DistributionLayer: FC<Props> = ({ committees, humansAmount }) => {
  const context = useContext(Context);

  return (
    <div className={cl.wrapper}>
      <div className={cl.create}>
        <h1>Количество людей: {humansAmount}</h1>
        <Button
          width="20%"
          height={40}
          requestFunction={async () => {
            await request
              .createDist(context.worldId, {
                age: 23,
                distributorSkills: [
                  {
                    name: "Крутой скилл",
                    requiredScreams: 3000,
                  },
                ],
                mood: Mood.GOOD,
              })
              .then(() => context.getCurrentWorld());
          }}
        >
          <b>Создать</b>
        </Button>
      </div>

      <div className={cl.com}>
        {committees?.map((com) => (
          <div className={cl.comEl}>
            <h2>Комитет: {com?.id}</h2>
            <DistibutionCommittee
              key={com.id}
              distributors={com?.distributors}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
