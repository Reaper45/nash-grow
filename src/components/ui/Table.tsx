import styled from "@emotion/styled";

const Table = styled("table")`
  display: table;
  border-collapse: separate;
  width: 100%;
  border-spacing: 0 1rem;
`;

const Row = styled("tr")`
  display: table-row;
`;

const Cell = styled("td")`
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  min-height: 40px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

export const TableHeaderCell = styled("th")`
  padding: 10px 1rem 0;
  line-height: 1.2;
  color: ${(props) => props.theme.color.primary};
  font-weight: 700;
  min-height: 40px;
  vertical-align: middle;
  text-align: center;
`;

export const TableRow = styled(Row)`
  text-decoration: none;
  border-spacing: 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.color.primary};
  padding: 10px 20px;

  td:first-of-type {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-left: solid 1px ${(props) => props.theme.color.primary};
    padding-left: 1rem;
  }

  td:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-right: solid 1px ${(props) => props.theme.color.primary};
    padding-right: 1rem;
  }
`;

export const TableCell = styled(Cell)`
  font-size: 0.9em;
  padding: 15px 10px;
  line-height: 1.2;
  white-space: nowrap;
  border-bottom: solid 1px ${(props) => props.theme.color.primary};
  border-top: solid 1px ${(props) => props.theme.color.primary};

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 8px 12px;
  }
`;

export const TableContainer = styled("div")`
  background: linear-gradient(
    99.55deg,
    rgba(255, 255, 255, 0.24) 0%,
    rgba(255, 255, 255, 0.06) 101.51%
  );
  border-radius: 12px;
  padding: 1rem;
  height: fit-content;
  flex-grow: 1;
`;

export default Table;
