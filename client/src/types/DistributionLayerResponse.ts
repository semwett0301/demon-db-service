import { DistributionCommitteeResponse } from "./DistributionCommitteeResponse";
import { HumanResponse } from "./HumanResponse";

export interface DistributionLayerResponse {
  screamsCount: number;
  humans: HumanResponse[];
  distributionCommittees: DistributionCommitteeResponse[];
}
