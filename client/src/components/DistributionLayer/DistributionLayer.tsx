import { request } from "api";
import { Button, DistibutionCommittee } from "atom";
import { Context } from "context";
import React, { FC, useCallback, useContext, useMemo } from "react";
import { DistributorResponse, Mood } from "types";

import { DistributionCommitteeResponse } from "../../types/DistributionCommitteeResponse";
import cl from "./DistributionLayer.module.css";

interface Props {
  committees?: DistributionCommitteeResponse[];
  humansAmount: number;
}

// Основной блок приложения, не использует API
export const DistributionLayer: FC<Props> = ({ committees, humansAmount }) => {
  const context = useContext(Context);

  const resultDistributors = useCallback(
    (distributors: DistributorResponse[]) =>
      distributors.sort((a, b) => {
        const aLen = a?.distributorSkills?.reduce(
          (acc, elem) => acc + elem.requiredScreams,
          0
        );

        const bLen = b?.distributorSkills?.reduce(
          (acc, elem) => acc + elem.requiredScreams,
          0
        );

        return bLen - aLen;
      }),
    []
  );

  const finalCommittiees = useMemo(
    () => committees?.sort((c1, c2) => c1.id - c2.id),
    [committees]
  );

  return (
    <div className={cl.wrapper}>
      <div className={cl.create}>
        <h1>Количество людей: {humansAmount}</h1>
        <Button
          width="20%"
          height={40}
          requestFunction={async () => {
            await request.createDist({
              age: 23,
              distributorSkills: [
                {
                  name: "Крутой скилл",
                  requiredScreams: 3000,
                },
              ],
              mood: Mood.GOOD,
              worldId: context.worldId,
            });
            context.getCurrentWorld();
          }}
        >
          <b>Создать</b>
        </Button>
      </div>

      <div className={cl.com}>
        {finalCommittiees?.map((com) => (
          <>
            {com?.distributors.length > 0 && (
              <div className={cl.comEl}>
                <h2>Комитет: {com?.id}</h2>
                <DistibutionCommittee
                  key={com.id}
                  distributors={resultDistributors(com?.distributors)}
                  requestFunction={async (disId) => {
                    await request.deleteDist(disId).then(() => {
                      context.getCurrentWorld();
                    });
                  }}
                />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
