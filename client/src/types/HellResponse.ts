import { DemonResponse } from "./DemonResponse";
import { HumanResponse } from "./HumanResponse";

// DTO слоя ада
export interface HellResponse {
  producedScreams: number;
  humans: HumanResponse[];
  demons: DemonResponse[];
}
