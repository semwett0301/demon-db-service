export function getWorldId(instance) {
    return () => instance.get("/semen")
}

export function getWorld(instance) {
    return (id) => instance.get(`/world/${id}`)
}

export function nextYear(instance) {
    return (id) => instance.get(`/world/${id}/nextYear`)
}

export function genocide(instance) {
    return (id) => instance.get(`/world/${id}/genocide`)
}

export function amnesty(instance) {
    return (id) => instance.get(`/world/${id}/amnesty`)
}
