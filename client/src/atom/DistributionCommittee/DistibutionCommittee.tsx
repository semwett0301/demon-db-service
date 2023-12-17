import { request } from "api";
import { Button } from "atom";
import { Context } from "context";
import React, { FC, useContext, useMemo } from "react";
import { DistributorResponse } from "types";

import cl from "./DistributionCommittee.module.css";

interface Props {
  distributors: DistributorResponse[];
}

export const DistibutionCommittee: FC<Props> = ({ distributors }) => {
  const context = useContext(Context);

  const resultDistributors = useMemo(
    () =>
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
    [distributors]
  );

  return (
    <div className={cl.wrapper}>
      {resultDistributors?.map((e) => (
        <div className={cl.com} key={e?.id}>
          <Button
            height={15}
            requestFunction={async () => {
              await request.deleteDist(e.id).then(() => {
                context.getCurrentWorld();
              });
            }}
          >
            Удалить
          </Button>
          <div>Возраст: {e?.age}</div>
          <div>Настроение: {e?.mood}</div>
          <div className={cl.skills}>
            <span>
              Умения:{" "}
              {e?.distributorSkills.length
                ? e?.distributorSkills.map((elem) => <span>{elem.name} </span>)
                : "Отсутсвуют"}
            </span>
          </div>
          <div>
            Крики:{" "}
            {e?.distributorSkills?.reduce(
              (acc, elem) => acc + elem.requiredScreams,
              0
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
