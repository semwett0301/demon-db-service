import React, { FC } from "react";

import cl from "./WorldCard.module.css";

interface Props {
  name: string;
  info: {
    name: string;
    value: number;
  }[];
}

export const WorldCard: FC<Props> = ({ info, name }) => {
  return (
    <div className={cl.wrapper}>
      <h1>{name}</h1>
      <div>
        {info.map((rule) => {
          return (
            <div className={cl.text} key={rule.name}>
              {rule.name}: {rule.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
