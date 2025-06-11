import type { AxiosResponse } from "axios";
import { axiosInstance } from "../instance";
import type { AppsQueryData, AppsResponseData } from "./types";

export async function fetchApps(queryParams?: AppsQueryData) {
  const { pageSize = 25, pageNumber = 0, ...restParams } = queryParams ?? {};
  const response = await axiosInstance.put<
    AppsResponseData,
    AxiosResponse<AppsResponseData>,
    AppsQueryData
  >("/api/v1/app-service/get-apps", { pageNumber, pageSize, ...restParams });
  return response.data.appRows;
}
