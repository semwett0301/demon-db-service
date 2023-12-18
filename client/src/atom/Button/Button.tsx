import React, { FC, PropsWithChildren } from "react";

import cl from "./Button.module.css";

export interface ButtonProps {
  height?: number | string;
  width?: number | string;
  requestFunction?: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  height,
  requestFunction,
  width,
}) => {
  return (
    <button
      type="button"
      style={{ height, width }}
      className={cl.button}
      onClick={requestFunction}
    >
      {children}
    </button>
  );
};
