import {
  Container,
  createTheme,
  GlobalStyles,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { Outlet } from "react-router";
import { SidebarNavigation } from "./SidebarNavigation";
import { Filters } from "./Filters";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 540,
      md: 720,
      lg: 960,
      xl: 1040,
    },
  },
});

export function MainLayout() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          fontFamily: "Roboto",
          fontSize: "12px",
          body: {
            padding: 0,
            margin: 0,
            height: "100%",
            color: "#ffffff",
            background: "#2E2E2E",
          },
          html: { height: "100%" },
          "#root": { height: "100%" },
        }}
      />
      <Container maxWidth={false} style={{ padding: 0, height: "100%" }}>
        <Grid container height={"100%"}>
          <Grid size={2}>
            <SidebarNavigation />
          </Grid>
          <Grid size={8} padding={"16px"}>
            <Outlet />
          </Grid>
          <Grid size={2}>
            <Filters />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

// function useDemoRouter(initialPath: string): Router {
//   const [pathname, setPathname] = React.useState(initialPath);

//   const router = React.useMemo(() => {
//     return {
//       pathname,
//       searchParams: new URLSearchParams(),
//       navigate: (path: string | URL) => setPathname(String(path)),
//     };
//   }, [pathname]);

//   return router;
// }

// const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: theme.shape.borderRadius,
//   height,
//   content: '" "',
// }));
