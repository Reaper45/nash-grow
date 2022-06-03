import styled from "@emotion/styled";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  contained?: boolean;
  color?: "secondary" | "dark";
}

const ButtonWrapper = styled("button")<ButtonProps>`
  padding: 8px 16px;
  background: ${(props) =>
    props?.color ? props.theme.color[props?.color] : "none"};
  color: ${(props) => props.theme.color.primary};
  border: ${(props) => (props.contained ? "none" : "solid 1px #fff")};
  border-radius: 6px;
`;

const Button: React.FC<ButtonProps> = ({
  children,
  contained = false,
  color,
  ...props
}) => {
  return (
    <ButtonWrapper contained={contained} color={color} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
