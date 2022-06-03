import styled from "@emotion/styled";

const Input = styled("input")`
  background: #fff;

  &[type="checkbox"] {
    appearance: none;
    padding: 5px;
    fill: none;
    border: solid 1px ${(props) => props.theme.color.primary};
    border-radius: 3px;
    position: relative;
    background: none;
    :checked {
      :after {
        content: "";
        display: flex;
        position: absolute;
        top: 1px;
        left: 1px;
        padding: 4px;
        border-radius: 2px;
        background: ${(props) => props.theme.color.secondary};
      }
    }
  }
`;

export default Input;
