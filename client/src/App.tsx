import "./styles/global.css";

import { request } from "api";
import { MainPanel } from "panels";
import React, { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { WorldResponse } from "types";

import { Context } from "./context";

const App = () => {
  const [worldId] = useState<number>(1);
  const [world, setWorld] = useState<WorldResponse | undefined>();

  const getWorld = useCallback(async () => {
    await request.getWorld(worldId).then((r) => {
      setWorld(r.data);
      return r.data;
    });
  }, [worldId]);

  const contextData = useMemo(
    () => ({
      getCurrentWorld: getWorld,
      world,
      worldId,
    }),
    [getWorld, world, worldId]
  );

  useLayoutEffect(() => {
    getWorld().catch((e) => console.log(e));
  }, []);

  return (
    <Context.Provider value={contextData}>
      <MainPanel />
    </Context.Provider>
  );
};

export default App;
