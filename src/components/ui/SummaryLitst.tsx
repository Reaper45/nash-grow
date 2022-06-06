import styled from "@emotion/styled";

const SummaryList = styled("ul")`
  padding: 0;
`;

export const SummaryListItem = styled("li")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100;
  color: ${(props) => props.theme.color.primary};
  padding: 0.5rem 0.75rem 0.75rem 0;
  font-size: 1rem;

  span:first-of-type {
    flex-grow: 1;
  }
`;

export default SummaryList;
