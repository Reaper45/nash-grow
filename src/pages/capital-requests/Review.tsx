import { useNavigate } from "react-router-dom";

import Breadcrumb from "components/ui/Breadcrumb";
import { ReactComponent as ArrowBackIcon } from "assets/icons/arrow-back.svg";

const Review = () => {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Breadcrumb>
        <button onClick={onGoBack}>
          <ArrowBackIcon />
          <b>Go Back</b>
        </button>
      </Breadcrumb>
      <h1 className="page-title">Review Payout Request</h1>
    </div>
  );
};

export default Review;
