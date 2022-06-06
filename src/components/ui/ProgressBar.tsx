import styled from "@emotion/styled";
import React from "react";

const ProgressBarWrapper = styled("div")<{ progress: number }>`
  height: 7px;
  border-radius: 5px;
  width: 100%;
  background: #272727;

  span {
    background: linear-gradient(
      90.35deg,
      #ce72ef 4.2%,
      rgba(249, 165, 195, 0.630208) 52.75%,
      #ffb571 100.33%
    );
    height: 7px;
    border-radius: 5px;
    width: ${props => props.progress}%;
    display: block;
    position: relative;

    :after {
      content: "";
      display: block;
      width: 3px;
      height: 18px;
      border-radius: 3px;
      background: ${(props) => props.theme.color.primary};
      position: absolute;
      right: 0;
      top: -5px;
    }
  }
`;

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <ProgressBarWrapper progress={progress}>
      <span/>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
