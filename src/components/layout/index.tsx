import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router-dom";

import NavItems from "./NavItems";

const LayoutWrapper = styled("div")`
  padding: 1rem;
  box-sizing: border-box;
  display: grid;
  height: 100%;
  grid-template:
    [main-left] "nav  main" 1fr [main-right]
    / 70px calc(100% - 70px);

  > main {
    padding: 1rem 1.5rem 0 2rem;
    max-width: 1600px;
    width: calc(100% - 70px);
    // min-width: 1200px;
    margin: 0 auto;

    h1.page-title {
      color: ${(props) => props.theme.color.primary};
      margin: 0;
      font-size: 1.5rem;
    }

    p.page-description {
      color: ${(props) => props.theme.color.primary};
    }
  }
`;

const NavWrapper = styled("nav")`
  border: solid 1px ${(props) => props.theme.color.secondary};
  border-radius: 8px;
  padding: 15px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1725) 0%,
    rgba(255, 255, 255, 0.1575) 100%
  );
  box-shadow: 0px 4px 25px -5px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
`;

const Layout: React.FC<any> = ({ children, ...props }) => {
  return (
    <LayoutWrapper>
      <NavWrapper>
        <NavItems />
      </NavWrapper>
      <main>
        <Outlet />
      </main>
    </LayoutWrapper>
  );
};

export default Layout;
