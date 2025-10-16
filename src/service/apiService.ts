import api from "./apiInstance";
import { apiRequest } from "./apiRequest";

export const fetchQuestion = async <T>(path: string): Promise<T> => {
  return apiRequest(() => api.get(`/${path}`));
};
