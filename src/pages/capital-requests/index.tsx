import { Outlet, useNavigate } from "react-router-dom";

import Breadcrumb from "components/ui/Breadcrumb";
import { ReactComponent as ArrowBackIcon } from "assets/icons/arrow-back.svg";

const CapitalRequests = () => {
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

      <Outlet />
    </div>
  );
};

export default CapitalRequests;
