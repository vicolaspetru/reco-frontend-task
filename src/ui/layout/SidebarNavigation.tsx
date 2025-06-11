import { MenuItem, MenuList, Stack, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router";
import BrandLogo from "../../assets/logo.svg";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export function SidebarNavigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/", label: "App Discovery" },
    { path: "/inventory", label: "Apps Inventory" },
    { path: "/settings", label: "Settings" },
  ];

  return (
    <SidebarWrapper spacing={10}>
      <NavLink to={"/"} viewTransition>
        <img src={BrandLogo} alt={"Reco.ai"} width={100} />
      </NavLink>
      <MenuList>
        {navItems.map((item) => (
          <NavLinkItem
            key={item.path}
            to={item.path}
            viewTransition
            $isActive={currentPath === item.path}
          >
            <MenuItem>
              <Typography variant="body2">{item.label}</Typography>
            </MenuItem>
          </NavLinkItem>
        ))}
      </MenuList>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled(Stack)`
  top: 0;
  position: sticky;
  padding: 14px 25px;
  background: #393939;
`;

const NavLinkItem = styled(NavLink)<{ $isActive?: boolean }>`
  color: #ffffff;
  position: relative;
  display: block;
  text-decoration: none;

  ${({ $isActive }) =>
    $isActive &&
    css`
      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
        background-color: #b5e600;
      }
    `}
`;
