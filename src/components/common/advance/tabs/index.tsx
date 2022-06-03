import styled from "@emotion/styled";

import Tabs, { TabPane } from "components/ui/Tabs";
import { TableContainer } from "components/ui/Table";
import CompanyRevenue from "./CompanyRevenue";
import CapitalPrograms from "./CapitalPrograms";

const AdvanceTabsWrapper = styled("div")`
  margin-top: 2.5rem;

  div.rc-tabs-tabpane:first-of-type > div {
    border-top-left-radius: 0;
  }
`;

const AdvanceTabs: React.FC<{
  programs: Array<Program>;
  revenues: Array<Revenue>;
}> = ({ programs, revenues }) => {
  return (
    <AdvanceTabsWrapper>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Company Revenues" key="1">
          <TableContainer>
            <CompanyRevenue revenues={revenues} />
          </TableContainer>
        </TabPane>
        <TabPane tab="Company Capital Programs" key="2">
          <TableContainer>
            <CapitalPrograms programs={programs} />
          </TableContainer>
        </TabPane>
      </Tabs>
    </AdvanceTabsWrapper>
  );
};

export default AdvanceTabs;
