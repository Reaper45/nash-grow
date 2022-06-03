import styled from "@emotion/styled";
import RcTabs, { TabPane as RcTabPane } from "rc-tabs";
import "rc-tabs/assets/index.css";

const Tabs = styled(RcTabs)`
  border: none;

  .rc-tabs-tab {
    color: ${(props) => props.theme.color.primary};
    background: none;
    padding: 0.5rem 3rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-weight: normal;
    font-size: 0.9rem;

    &.rc-tabs-tab-active {
      font-weight: normal;
      background: linear-gradient(
        92.32deg,
        rgba(255, 255, 255, 0.22) -2.38%,
        rgba(255, 255, 255, 0.21) 112.31%
      );
    }
  }

  .rc-tabs-ink-bar {
    display: none;
  }

  .rc-tabs-content {
    display: initial;
  }
`;

export const TabPane = styled(RcTabPane)`
  width: auto;
`;

export default Tabs;
