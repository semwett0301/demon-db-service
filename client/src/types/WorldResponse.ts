import { DistributionLayerResponse } from "./DistributionLayerResponse";
import { HellResponse } from "./HellResponse";
import { RealWorldResponse } from "./RealWorldResponse";

export interface WorldResponse {
  name: string;
  year: number;
  realWorld: RealWorldResponse;
  distributionLayer: DistributionLayerResponse;
  hell: HellResponse;
}
