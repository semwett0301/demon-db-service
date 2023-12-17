import {amnesty, genocide, getWorld, getWorldId, nextYear} from "./modules/worldModule";
import {instance} from "./instance";
import {createDistributor, deleteDistributor} from "./modules/distributorModule";

export const request = {
    getWorldId: getWorldId(instance),
    getWorld: getWorld(instance),
    nextYear: nextYear(instance),
    genocide: genocide(instance),
    amnesty: amnesty(instance),
    deleteDist: deleteDistributor(instance),
    createDist: createDistributor(instance)
}
