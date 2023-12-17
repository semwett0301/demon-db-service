import { AxiosInstance } from "axios";
import { WorldResponse } from "types";

export function getWorldId(instance: AxiosInstance) {
  return () => instance.get("/semen");
}

export function getWorld(instance: AxiosInstance) {
  return (id: number) => instance.get<WorldResponse>(`/world/${id}`);
}

export function nextYear(instance: AxiosInstance) {
  return (id: number) => instance.get(`/world/${id}/nextYear`);
}

export function genocide(instance: AxiosInstance) {
  return (id: number) => instance.get(`/world/${id}/genocide`);
}

export function amnesty(instance: AxiosInstance) {
  return (id: number) => instance.get(`/world/${id}/amnesty`);
}
