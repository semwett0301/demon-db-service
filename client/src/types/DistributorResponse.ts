import { DistributorSkillResponse } from "./DistributorSkillResponse";
import { Mood } from "./Mood";

// DTO распределителя
export interface DistributorResponse {
  id: number;
  age: number;
  mood: Mood;
  distributorSkills: DistributorSkillResponse[];
}
