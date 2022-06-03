import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

// Icons
import { ReactComponent as CreditCardIcon } from "assets/icons/credit-card.svg";
import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as LockIcon } from "assets/icons/lock.svg";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  to: string;
};

const navItems: Array<NavItem> = [
  {
    name: "home",
    icon: <HomeIcon />,
    to: "/"
  },
  {
    name: "locked",
    icon: <LockIcon />,
    to: "/"
  },
  {
    name: "credit",
    icon: <CreditCardIcon />,
    to: "/"
  },
];

const NavItemList = styled("ul")`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavItemListItem = styled("li")`
  margin-bottom: 1.5rem;
  svg {
    width: 20px;
  }
`;

const NavItems = () => {
  return (
    <NavItemList>
      {navItems.map((navItem) => (
        <NavItemListItem key={navItem.name}>
          <Link to={navItem?.to}> {navItem.icon}</Link>
        </NavItemListItem>
      ))}
    </NavItemList>
  );
};

export default NavItems;
