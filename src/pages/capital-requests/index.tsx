import styled from "@emotion/styled";
import { Route, Routes, useNavigate } from "react-router-dom";
import { isEmpty, without } from "lodash";
import { useState } from "react";

import Breadcrumb from "components/ui/Breadcrumb";
import { TableContainer } from "components/ui/Table";
import CapitalRequestTable from "components/common/requests/CapitalRequestTable";
import CapitalRequestSummary from "components/common/requests/summary";
import Review from "./Review";
import Payout from "./Payout";

import { ReactComponent as ArrowBackIcon } from "assets/icons/arrow-back.svg";

const Content = styled("div")`
  display: flex;
  margin-top: 2rem;

  div.summnay {
    width: 280px;
    border-radius: 8px;
    padding: 1rem;
    background: linear-gradient(
      269.48deg,
      #28dd9c -42.33%,
      rgba(40, 221, 156, 0.59) 42.29%,
      rgba(40, 221, 156, 0.42) 126.9%
    );
  }
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

const CapitalRequests = () => {
  const navigate = useNavigate();
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

  const onGoBack = () => {
    navigate(-1);
  };

  const showSummarry = !isEmpty(selected);

  return (
    <div>
      <Breadcrumb>
        <button onClick={onGoBack}>
          <ArrowBackIcon />
          <b>Go Back</b>
        </button>
      </Breadcrumb>
      <h1 className="page-title">Request More Capital</h1>

      <Content>
        <TableContainerWrapper collapsed={showSummarry}>
          <Routes>
            <Route
              index
              element={
                <CapitalRequestTable
                  requests={requests}
                  onSelect={handleSelected}
                  selected={selected}
                />
              }
            />
            <Route path="/capital-requests/review" element={<Review />} />
          </Routes>
        </TableContainerWrapper>

        {showSummarry && (
          <div className="summnay">
            <CapitalRequestSummary />
          </div>
        )}
      </Content>
    </div>
  );
};

export default CapitalRequests;
