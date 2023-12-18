import { DistributionCommitteeResponse } from "./DistributionCommitteeResponse";
import { HumanResponse } from "./HumanResponse";

// DTO слоя комитетов
export interface DistributionLayerResponse {
  screamsCount: number;
  humans: HumanResponse[];
  distributionCommittees: DistributionCommitteeResponse[];
}
