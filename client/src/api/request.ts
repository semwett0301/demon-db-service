import { instance } from "./instance";
import {
  createDistributor,
  deleteDistributor,
} from "./modules/distributorModule";
import {
  amnesty,
  genocide,
  getWorld,
  getWorldId,
  nextYear,
} from "./modules/worldModule";

// Сборка API
export const request = {
  amnesty: amnesty(instance),
  createDist: createDistributor(instance),
  deleteDist: deleteDistributor(instance),
  genocide: genocide(instance),
  getWorld: getWorld(instance),
  getWorldId: getWorldId(instance),
  nextYear: nextYear(instance),
};
