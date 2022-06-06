import { Link } from "react-router-dom";

import SummaryList, { SummaryListItem } from "components/ui/SummaryLitst";
import { ReactComponent as ArrowForwardIcon } from "assets/icons/arrow-forward.svg";
import ProgressBar from "components/ui/ProgressBar";
import Button from "components/ui/Button";
import styled from "@emotion/styled";

const Progress = styled("div")`
  margin-bottom: 1rem;

  small {
    display: block;
    padding: 10px 0;
    color: #fff;
  }

  .btn-reset {
    display: flex;
    justify-content: right;

    button {
      background: #83226d;
    }
  }
`;

const PayoutSchedule = () => {
  return (
    <div className="payout-content">
      <h3 className="sub-title">Payout Schedule</h3>

      <SummaryListItem>
        <span>Selected contracts</span>
        <span>4</span>
      </SummaryListItem>
      <br />

      <Progress>
        <ProgressBar progress={78} />

        <small>$2,540,433 remaining</small>
        <div className="btn-reset">
          <Button contained>Reset Selection</Button>
        </div>
      </Progress>

      <SummaryList>
        <SummaryListItem>
          <span>Pay back schedule</span>
          <span>Monthly</span>
        </SummaryListItem>
        <SummaryListItem>
          <span>Amount to pay back</span>
          <span>£ 123,000</span>
        </SummaryListItem>
        <SummaryListItem>
          <span>Rate</span>
          <span>($0) $12,000</span>
        </SummaryListItem>
        <SummaryListItem>
          <span>
            <b>Payout 1</b>
          </span>
          <span>
            <b>$88,000</b>
          </span>
        </SummaryListItem>
      </SummaryList>

      <SummaryList>
        <SummaryListItem>
          <span>Pay back schedule</span>
          <span>Monthly</span>
        </SummaryListItem>
        <SummaryListItem>
          <span>Amount to pay back</span>
          <span>£ 123,000</span>
        </SummaryListItem>
        <SummaryListItem>
          <span>Rate</span>
          <span>($0) $12,000</span>
        </SummaryListItem>
        <SummaryListItem>
          <span>
            <b>Payout 1</b>
          </span>
          <span>
            <b>$88,000</b>
          </span>
        </SummaryListItem>
      </SummaryList>

      <Link to="/capital-requests/payout" className="btn-complete">
        Payout Account
        <ArrowForwardIcon />
      </Link>
    </div>
  );
};

export default PayoutSchedule;
