export function deleteDistributor(instance) {
    return (distId) => instance.delete(`/distributor/${distId}`)
}

export function createDistributor(instance) {
    return (worldId, newDist) => instance.post(`/distributor/${worldId}`, newDist)
}
