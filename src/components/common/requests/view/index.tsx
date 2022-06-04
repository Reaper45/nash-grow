import styled from "@emotion/styled";
import { without, isEmpty } from "lodash";
import React, { useState } from "react";

import CapitalRequestSummary from "components/common/requests/summary";
import { TableContainer } from "components/ui/Table";
import CapitalRequestsTable from "./CapitalRequestsTable";

const Content = styled("div")`
  display: flex;
  margin-top: 2rem;
`;

const TableContainerWrapper = styled(TableContainer)<{ collapsed: boolean }>`
  flex-grow: 1;
  margin-right: ${(props) => (props.collapsed ? "2rem" : "0")};
  width: ${(props) => (props.collapsed ? "70%" : "100%")};
`;

const requests: Array<CapitalRequest> = [
  {
    id: "RG5J0390",
    name: "Joram M",
    type: "Quartaly",
    term: "12 Months",
    revenue: "$ 1,400",
    currency: "$",
    payout: "KES 100,000",
    payoutCurrency: "KES",
  },
  {
    id: "AD5J0391",
    name: "Steve A",
    type: "Semi Annual",
    term: "2 Months",
    revenue: "£ 1,000",
    currency: "£",
    payout: "KES 100,000",
    payoutCurrency: "KES",
  },
  {
    id: "G5RJ0393",
    name: "Trevor N",
    type: "One Off",
    term: "0 Months",
    revenue: "KES 12,000",
    currency: "KES",
    payout: "CAD 5,000",
    payoutCurrency: "CAD",
  },
  {
    id: "ED5J0396",
    name: "Mary J",
    type: "Monthly",
    term: "12 Months",
    revenue: "$ 2,000",
    currency: "$",
    payout: "£ 1,400",
    payoutCurrency: "£",
  },
  {
    id: "DR5J0399",
    name: "Anthony K",
    type: "Monthly",
    term: "12 Months",
    revenue: "$ 2,000",
    currency: "$",
    payout: "$ 500",
    payoutCurrency: "$",
  },
];

const CapitalRequestsView = () => {
  const [selected, setSelected] = useState<Array<string>>([]);

  const handleSelected = (id: string) => {
    let updated = [];
    if (selected.includes(id)) {
      updated = without(selected, id);
    } else {
      updated = [...selected, id];
    }
    setSelected(updated);
  };

  const showSummarry = !isEmpty(selected);

  return (
    <div>
      <h1 className="page-title">Request More Capital</h1>

      <Content>
        <TableContainerWrapper collapsed={showSummarry}>
          <CapitalRequestsTable
            requests={requests}
            onSelect={handleSelected}
            selected={selected}
          />
        </TableContainerWrapper>

        {showSummarry && <CapitalRequestSummary />}
      </Content>
    </div>
  );
};

export default CapitalRequestsView;
