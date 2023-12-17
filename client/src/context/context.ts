import { createContext } from "react";
import { WorldResponse } from "types";

interface Props {
  getCurrentWorld?: () => Promise<void>;
  world?: WorldResponse;
  worldId?: number;
}

export const Context = createContext<Props>({});
