import { AxiosInstance } from "axios";
import { WorldResponse } from "types";

export function getWorldId(instance: AxiosInstance) {
  return () => instance.get("/semen");
}

export function getWorld(instance: AxiosInstance) {
  return (id: number) => instance.get<WorldResponse>(`/worlds/${id}`);
}

export function nextYear(instance: AxiosInstance) {
  return (id: number) => instance.post(`/worlds/${id}/nextYear`);
}

export function genocide(instance: AxiosInstance) {
  return (id: number) => instance.post(`/worlds/${id}/genocide`);
}

export function amnesty(instance: AxiosInstance) {
  return (id: number) => instance.post(`/worlds/${id}/amnesty`);
}
