import { create } from "zustand";
import type { Apps, AppsQueryData } from "../../api/apps/types";
import { fetchApps } from "../../api/apps";

type AppsStoreType = {
  data: Apps[] | undefined;
  isLoading: boolean;
  loadData: (queryParams?: AppsQueryData) => void;
};

export const useAppsStore = create<AppsStoreType>((set) => ({
  data: undefined,
  isLoading: true,
  loadData: async (queryParams) => {
    try {
      const data = await fetchApps(queryParams);
      set({ data, isLoading: false });
    } catch (error) {
      console.error(error);
      set({ data: undefined, isLoading: false });
    }
  },
}));
