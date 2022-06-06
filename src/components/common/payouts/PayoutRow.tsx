import styled from "@emotion/styled";
import React from "react";

import FlexWrapper from "components/ui/FlexWrapper";

const Row = styled(FlexWrapper)`
  width: 65%;
  margin: 2rem auto 0;
`;

const Column = styled(FlexWrapper)`
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.color.secondary};
  background: linear-gradient(
    99.55deg,
    rgba(255, 255, 255, 0.24) 0%,
    rgba(255, 255, 255, 0.06) 101.51%
  );
  padding: 1rem 1.25rem;
  color: #fff;
  width: 30%;
  min-height: 150px;
`;

const LeftColumn = styled(Column)`
  flex-grow: 1;

  ul {
    padding: 0;
    font-weight: bolder;
    color: #fff;
    list-style: none;
    border-right: solid 1px #fff;
    padding-right: 2rem;
    margin: 0;
    flex: none;

    li {
      padding: 8px 0;
    }
  }

  div {
    padding-left: 2rem;
    line-height: 1.5;
  }
`;

const PayoutRow: React.FC<{ payout: Payout }> = ({ payout }) => {
  return (
    <Row columnGap={1.5} align="flex-start">
      <Column align="flex-start">
        <b>
          {payout.title}: {payout.amount}
        </b>
      </Column>
      <LeftColumn align="flex-start">
        <ul>
          {payout.accounts.map((acct) => (
            <li key={acct}>{acct}</li>
          ))}
        </ul>

        <div>{payout.description}</div>
      </LeftColumn>
    </Row>
  );
};

export default PayoutRow;
