import { createContext } from "react";
import { WorldResponse } from "types";

interface Props {
  getCurrentWorld?: () => Promise<void>;
  world?: WorldResponse;
  worldId?: number;
}

// Инициализация контекста
export const Context = createContext<Props>({});
