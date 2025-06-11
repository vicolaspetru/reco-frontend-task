import { useEffect, useMemo } from "react";
import { useAppsStore } from "../../core/store/apps";
import Paper from "@mui/material/Paper";
import type { Apps } from "../../api/apps/types";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import type { GridColDef } from "@mui/x-data-grid";
import { useSearchParams } from "react-router";

export function DiscoveryPage() {
  const { data, isLoading, loadData } = useAppsStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 0;
  const filterName = searchParams.get("name") || undefined;
  const filterCategory = searchParams.get("category") || undefined;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return setSearchParams(params);
  };

  useEffect(() => {
    loadData({
      pageNumber: currentPage,
      appName: filterName,
      category: filterCategory,
    });
  }, [currentPage, filterCategory, filterName, loadData]);

  const rows = useMemo(() => {
    if (isLoading) {
      return new Array(10).fill({}).map((_, index) => ({ id: `${index}` }));
    }

    if (data) {
      return data.map((app) => ({ id: app.appId, ...app }));
    }

    return [];
  }, [data, isLoading]);

  const columns: GridColDef<Apps>[] = [
    {
      field: "appName",
      headerName: "Name",
      width: 150,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
    },
    {
      field: "appSources",
      headerName: "Connection",
      width: 160,
      valueGetter: (_value, row) => row?.appSources?.join(", "),
    },
  ];

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 25 } },
        }}
        pageSizeOptions={[25, 50]}
        checkboxSelection
        sx={{ border: 0 }}
        onPaginationModelChange={(model) => {
          createPageURL(model.page);
        }}
        autoPageSize
      />
    </Paper>
  );
}
