import { AxiosInstance } from "axios";
import { DistributorResponse, DistributorSkillResponse } from "types";

export function deleteDistributor(instance: AxiosInstance) {
  return (distId: number) => instance.delete(`/distributor/${distId}`);
}

export function createDistributor(instance: AxiosInstance) {
  return (
    worldId: number,
    newDist: Omit<DistributorResponse, "id" | "distributorSkills"> & {
      distributorSkills: Omit<DistributorSkillResponse, "id">[];
    }
  ) => instance.post(`/distributor/${worldId}`, newDist);
}
