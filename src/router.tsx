import { createBrowserRouter } from "react-router";
import { MainLayout } from "./ui/layout/MainLayout";
import { DiscoveryPage } from "./pages/discovery";
import { InventoryPage } from "./pages/inventory";
import { SettingsPage } from "./pages/settings";

export const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      { index: true, Component: DiscoveryPage },
      { path: "inventory", Component: InventoryPage },
      { path: "settings", Component: SettingsPage },
    ],
  },
]);
