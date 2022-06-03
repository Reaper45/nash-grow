import { Link } from "react-router-dom";

import { ReactComponent as ArrowForwardIcon } from "assets/icons/arrow-forward.svg";

const PayoutSummary = () => {
  return (
    <div className="payout-content">
      <div>
        <h3 className="sub-title">Payout Summary</h3>
      </div>
      <Link to="review" color="dark" className="btn-complete">
        Review Request
        <ArrowForwardIcon />
      </Link>
    </div>
  );
};

export default PayoutSummary;
