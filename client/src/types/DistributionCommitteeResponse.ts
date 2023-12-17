import { DistributorResponse } from "./DistributorResponse";

export interface DistributionCommitteeResponse {
  id: number;
  estimationError: number | null;
  distributors: DistributorResponse[];
}
