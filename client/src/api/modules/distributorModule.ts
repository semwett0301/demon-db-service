import { AxiosInstance } from "axios";
import { DistributorResponse, DistributorSkillResponse } from "types";

export function deleteDistributor(instance: AxiosInstance) {
  return (distId: number) => instance.delete(`/distributors/${distId}`);
}

export function createDistributor(instance: AxiosInstance) {
  return (
    newDist: Omit<DistributorResponse, "id" | "distributorSkills"> & {
      worldId: number;
      distributorSkills: Omit<DistributorSkillResponse, "id">[];
    }
  ) => instance.post(`/distributors`, newDist);
}
