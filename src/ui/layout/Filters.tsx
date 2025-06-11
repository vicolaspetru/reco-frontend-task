import { Paper, Stack, TextField } from "@mui/material";
import { useSearchParams } from "react-router";
import { useDebouncedCallback } from "use-debounce";

export function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const resetPage = () => {
    params.delete("page");
  };

  const handleFilterName = useDebouncedCallback((term: string) => {
    resetPage();

    if (term) {
      params.set("name", term);
    } else {
      params.delete("name");
    }
    setSearchParams(params);
  }, 300);

  const handleFilterCategory = useDebouncedCallback((term: string) => {
    resetPage();

    if (term) {
      params.set("category", term);
    } else {
      params.delete("category");
    }
    setSearchParams(params);
  }, 300);

  return (
    <Paper>
      <Stack spacing={10}>
        <TextField
          id="filter-name"
          label="Name"
          variant="outlined"
          onChange={(event) => handleFilterName(event.target.value)}
          defaultValue={searchParams.get("name")?.toString()}
        />
        <TextField
          id="filter-category"
          label="Category"
          variant="outlined"
          onChange={(event) => handleFilterCategory(event.target.value)}
          defaultValue={searchParams.get("category")?.toString()}
        />
      </Stack>
    </Paper>
  );
}
