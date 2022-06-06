import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import ProgressBar from "components/ui/ProgressBar";
import SummaryList, { SummaryListItem } from "components/ui/SummaryLitst";

import { ReactComponent as ArrowForwardIcon } from "assets/icons/arrow-forward.svg";

const TotalPayment = styled("span")`
  text-align: center;
  background: linear-gradient(
    275.28deg,
    rgba(0, 0, 0, 0.51) -12.61%,
    rgba(0, 0, 0, 0.71) 131.77%
  );
  padding: 5px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  small {
    width: 125px;
  }
`;

const PayoutSummary = () => {
  return (
    <div className="payout-content">
      <div>
        <h3 className="sub-title">Payout Summary</h3>
      </div>

      <SummaryList>
        <SummaryListItem>
          <span>Selected contracts</span>
          <span>4</span>
        </SummaryListItem>
        <SummaryListItem>
          <span>Payout 1</span>
          <span>$ 1,450,000</span>
        </SummaryListItem>
        <SummaryListItem>
          <span>Payout 2</span>
          <span>$ 450,000</span>
        </SummaryListItem>
        <SummaryListItem>
          <span>Cancellations</span>
          <span>($0)</span>
        </SummaryListItem>
        <SummaryListItem>
          <span>Payout date</span>
          <span>Instant</span>
        </SummaryListItem>
        <br />
        <SummaryListItem>
          <span>Total payment</span>
          <TotalPayment>
            <b>$43,000</b>

            <small>Available Limit Remaining</small>
          </TotalPayment>
        </SummaryListItem>
      </SummaryList>

      <ProgressBar progress={78} />
      <br />
      <br />

      <Link to="/capital-requests/review" color="dark" className="btn-complete">
        Review Request
        <ArrowForwardIcon />
      </Link>
    </div>
  );
};

export default PayoutSummary;
