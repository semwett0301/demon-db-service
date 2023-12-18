import { DistributorResponse } from "./DistributorResponse";

// DTO комитета
export interface DistributionCommitteeResponse {
  id: number;
  estimationError: number | null;
  distributors: DistributorResponse[];
}
