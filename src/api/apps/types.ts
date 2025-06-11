export type Apps = {
  appId: string;
  appName: string;
  appSources: string[];
  category: string;
};

export type AppsResponseData = {
  appRows: Apps[];
};

export type AppsQueryData = {
  appName?: string;
  category?: string;
  pageSize?: number;
  pageNumber: number;
};
