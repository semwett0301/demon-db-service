import { request } from "api";
import { CustomHeader, DistributionLayer, WorldInfo } from "components";
import { Context } from "context";
import React, { useContext } from "react";

import styles from "./MainPanel.module.css";

export const MainPanel = () => {
  const { getCurrentWorld, world, worldId } = useContext(Context);

  return (
    <div className={styles.container}>
      <CustomHeader
        worldName={world?.name}
        negative={world?.distributionLayer?.screamsCount}
        positive={world?.hell?.producedScreams}
        requestFunction={async () => {
          await request.nextYear(worldId).then(() => getCurrentWorld());
        }}
      />
      <DistributionLayer
        committees={world?.distributionLayer?.distributionCommittees}
        humansAmount={world?.distributionLayer?.humans?.length}
      />
      <WorldInfo hell={world?.hell} real={world?.realWorld} />
    </div>
  );
};
