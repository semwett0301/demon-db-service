import { Button } from "atom";
import React, { FC } from "react";

import cl from "./CustomHeader.module.css";

interface Props {
  negative: number;
  positive: number;
  worldName: string;
  requestFunction: () => void;
}

export const CustomHeader: FC<Props> = ({
  negative,
  positive,
  requestFunction,
  worldName,
}) => {
  return (
    <div className={cl.wrapper}>
      <span className={cl.name}>{worldName}</span>
      <header className={cl.header}>
        <div className={cl.positive}>+{positive}</div>
        <Button width="30%" height={50} requestFunction={requestFunction}>
          Следующий год
        </Button>
        <div className={cl.negative}>-{negative}</div>
      </header>
    </div>
  );
};
