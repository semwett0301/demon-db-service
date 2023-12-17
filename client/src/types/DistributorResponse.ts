import { DistributorSkillResponse } from "./DistributorSkillResponse";
import { Mood } from "./Mood";

export interface DistributorResponse {
  id: number;
  age: number;
  mood: Mood;
  distributorSkills: DistributorSkillResponse[];
}
