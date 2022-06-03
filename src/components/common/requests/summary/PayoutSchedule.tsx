import { Link } from "react-router-dom";

import { ReactComponent as ArrowForwardIcon } from "assets/icons/arrow-forward.svg";

const PayoutSchedule = () => {
  return (
    <div className="payout-content">
      <h3 className="sub-title">Payout Schedule</h3>

      <Link to="payout" className="btn-complete">
        Payout Account
        <ArrowForwardIcon />
      </Link>
    </div>
  );
};

export default PayoutSchedule;
