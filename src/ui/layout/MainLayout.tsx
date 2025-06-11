import { createTheme, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router";

const theme = createTheme();

export function MainLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
}
