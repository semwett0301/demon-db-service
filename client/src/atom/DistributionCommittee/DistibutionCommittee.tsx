import React, { FC } from "react";
import { DistributorResponse } from "types";

import { Button } from "../Button";
import cl from "./DistributionCommittee.module.css";

interface Props {
  distributors: DistributorResponse[];
  requestFunction?: (disId: number) => Promise<void> | void;
}

export const DistibutionCommittee: FC<Props> = ({
  distributors,
  requestFunction,
}) => {
  return (
    <div className={cl.wrapper}>
      {distributors?.map((e) => (
        <div className={cl.com} key={e?.id}>
          <Button
            height={15}
            requestFunction={() => {
              if (requestFunction) requestFunction(e?.id);
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
