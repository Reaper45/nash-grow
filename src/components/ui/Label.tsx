import styled from "@emotion/styled";
import React from "react";

type LabelVariant = "error" | "success" | "warn ";

const LabelWrapper = styled("span")<{ variant: LabelVariant }>`
  border-radius: 1rem;
  padding: 6px 12px;
  font-size: 0.85rem;

  ${(props) =>
    props.variant === "success" && `background: ${props.theme.color.success}`};
  ${(props) =>
    props.variant === "error" && `background: ${props.theme.color.error}`};
`;

const Label: React.FC<{
  content: string;
  variant?: LabelVariant;
}> = ({ variant = "success", content }) => {
  return <LabelWrapper variant={variant}>{content}</LabelWrapper>;
};

export default Label;
