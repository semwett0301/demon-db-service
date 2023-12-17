import { DemonResponse } from "./DemonResponse";
import { HumanResponse } from "./HumanResponse";

export interface HellResponse {
  producedScreams: number;
  humans: HumanResponse[];
  demons: DemonResponse[];
}
