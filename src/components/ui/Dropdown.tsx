import styled from "@emotion/styled";
import React, { createRef, RefObject, useEffect, useState } from "react";

import { ReactComponent as ArrowDownIcon } from "assets/icons/arrow-down.svg";

const DropdownMenu = styled("ul")<{
  show: boolean;
}>`
  list-style: none;
  background: ${(props) => props.theme.color.primary};
  border-radius: 6px;
  position: absolute;
  z-index: 10;
  margin-top: 5px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  padding: 0;
`;

export const DropdownItem = styled("li")`
  padding: 6px 5px;
  font-size: 0.85rem;
  cursor: pointer;
  margin: 2px;
  color: ${(props) => props.theme.color.dark};
  display: flex;

  > .icon {
    margin-right: 1rem;

    svg {
      vertical-align: middle;
      height: 15px;
    }
  }
`;

const DropdownToggle = styled("button")`
  background: none;
  border: none;
  color: ${(props) => props.theme.color.primary};

  svg {
    margin-left: 1rem;
  }
`;

export type DropdownOption = {
  onClick?: (item: DropdownOption) => void;
  key: string;
  label: string;
  icon?: React.ReactNode;
};

const Dropdown: React.FC<{
  items?: DropdownOption[];
  defaultActive: string;

  // onChange?: (item: DropdownOption) => void;
}> = ({ items, defaultActive }) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState<string | undefined>();

  const node: RefObject<HTMLDivElement> = createRef();

  const handleItemClick = (item: DropdownOption) => () => {
    setShow(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    if (node.current && node.current.contains(e.target)) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    // @ts-ignore
    document?.addEventListener("mousedown", handleClick, false);
    return () => {
      // @ts-ignore
      document?.removeEventListener("mousedown", handleClick, false);
    };
  });

  useEffect(() => {
    if (defaultActive) {
      setActive(defaultActive);
    }
  }, [defaultActive]);

  return (
    <div ref={node}>
      <DropdownToggle>
        {active}
        <ArrowDownIcon />
      </DropdownToggle>
      <DropdownMenu show={show}>
        {items?.map((item) => (
          <DropdownItem key={item.key} onClick={handleItemClick(item)}>
            {item?.icon && <span className="icon">{item?.icon}</span>}
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
