import styled from "@emotion/styled";
import { useState } from "react";

import Button from "components/ui/Button";
import PayoutSchedule from "./PayoutSchedule";
import PayoutSummary from "./PayoutSummary";

const CapitalRequestSummaryWrapper = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;

  div.payout-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3.sub-title {
    color: ${(props) => props.theme.color.primary};

    ::after {
      content: "";
      display: block;
      background: ${(props) => props.theme.color.primary};
      height: 2px;
      width: 70px;
      margin-top: 5px;
    }
  }

  a.btn-complete {
    width: fit-content;
    align-self: center;
    text-decoration: none;
    background: ${(props) => props.theme.color.dark};
    color: ${(props) => props.theme.color.primary};
    border-radius: 6px;
    padding: 8px 16px;
    font-size: 0.95rem;
    display: flex;
    align-items: center;

    svg {
      margin-left: 8px;
    }
  }
`;

const ButtonGroup = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CapitalRequestSummary = () => {
  const [active, setActive] = useState<"SUMMARY" | "SCHEDULE">("SUMMARY");

  return (
    <CapitalRequestSummaryWrapper>
      <ButtonGroup>
        <Button
          contained={active === "SUMMARY"}
          color={active === "SUMMARY" ? "dark" : undefined}
          onClick={() => setActive("SUMMARY")}
        >
          Summary
        </Button>
        <Button
          contained={active === "SCHEDULE"}
          color={active === "SCHEDULE" ? "dark" : undefined}
          onClick={() => setActive("SCHEDULE")}
        >
          Schedule
        </Button>
      </ButtonGroup>

      {active === "SUMMARY" && <PayoutSummary />}
      {active === "SCHEDULE" && <PayoutSchedule />}
    </CapitalRequestSummaryWrapper>
  );
};

export default CapitalRequestSummary;
