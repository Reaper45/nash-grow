import styled from "@emotion/styled";

const Breadcrumb = styled("div")`
  padding: 1rem 0;

  button {
    display: inline-flex;
    align-items: center;
    column-gap: 1rem;
    text-decoration: none;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.color.primary};
    background: none;
    border: none;
    padding: 0;
    font-size: 1rem;
  }

  svg {
    height: 16px;
    vetical-align: middle;
  }
`;

export default Breadcrumb;
