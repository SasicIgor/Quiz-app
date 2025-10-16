import { AxiosError, type AxiosResponse } from "axios";

export const apiRequest = async <T>(
  request: () => Promise<AxiosResponse<T>>
): Promise<T> => {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error("Unexpected error occured");
    }
  }
};
