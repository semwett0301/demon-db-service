import { Sex } from "./Sex";

// DTO человека
export interface HumanResponse {
  name: string;
  lastName: string;
  age: number;
  sex: Sex;
  nationality: string;
  numberOfGoodDeeds: number;
  numberOfRighteousDeeds: number;
}
