import styled from "@emotion/styled";

import Tabs, { TabPane } from "components/ui/Tabs";
import { TableContainer } from "components/ui/Table";
import CompanyRevenue from "./CompanyRevenue";
import CapitalPrograms from "./CapitalPrograms";

const AdvanceTabsWrapper = styled("div")`
  margin-top: 2.5rem;
`;

const TabPaneWrapper = styled(TabPane)`
  &#rc-tabs-1-panel-1 > div {
    border-top-left-radius: 0px;
  }
`;

const AdvanceTabs: React.FC<{
  programs: Array<Program>;
  revenues: Array<Revenue>;
}> = ({ programs, revenues }) => {
  return (
    <AdvanceTabsWrapper>
      <Tabs defaultActiveKey="1">
        <TabPaneWrapper tab="Company Revenues" key="1">
          <TableContainer>
            <CompanyRevenue revenues={revenues} />
          </TableContainer>
        </TabPaneWrapper>
        <TabPaneWrapper tab="Company Capital Programs" key="2">
          <TableContainer>
            <CapitalPrograms programs={programs} />
          </TableContainer>
        </TabPaneWrapper>
      </Tabs>
    </AdvanceTabsWrapper>
  );
};

export default AdvanceTabs;
