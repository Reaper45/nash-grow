import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PayoutRow from "components/common/payouts/PayoutRow";
import ConformationModal from "components/common/payouts/ConformationModal";
import Button from "components/ui/Button";
import FlexWrapper from "components/ui/FlexWrapper";
import CompleteModal from "components/common/payouts/CompleteModal";

const payouts: Array<Payout> = [
  {
    title: "Payout 1",
    amount: "$88,000",
    accounts: ["Account 1", "Account 2", "Account 3"],
    description: `We will match the currency of the payout or provide the chance to create an account if the currency account doesn’t exist`,
  },
  {
    title: "Payout 2",
    amount: "$88,000",
    accounts: ["Account 1", "Account 2", "Account 3"],
    description: `We will match the currency of the payout or provide the chance to create an account if the currency account doesn’t exist`,
  },
  {
    title: "Payout 3",
    amount: "$88,000",
    accounts: ["Account 1", "Account 2", "Account 3"],
    description: `We will match the currency of the payout or provide the chance to create an account if the currency account doesn’t exist`,
  },
];

const Payout = () => {
  const navigate = useNavigate();

  const [showConformationModal, setShowConformationModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  const handleRequestSumit = () => setShowConformationModal(true);

  const onCloseConformationModal = () => setShowConformationModal(false);

  const handleConformationSubmit = () => {
    setShowConformationModal(false);
    setShowCompleteModal(true);
  };

  const onCloseCompleteModal = () => setShowCompleteModal(false);

  const handleCompleteSubmit = () => {
    // Close modal & redirect
    setShowCompleteModal(false);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1 className="page-title">Payout Account</h1>

      {payouts.map((payout) => (
        <PayoutRow key={payout.title} payout={payout} />
      ))}

      <FlexWrapper align="center" justify="center" mt={2}>
        <Button
          contained
          color="secondary"
          style={{ color: "#000" }}
          onClick={handleRequestSumit}
        >
          Submit Request
        </Button>
      </FlexWrapper>

      {/*  Submission conformation modal */}
      <ConformationModal
        onClose={onCloseConformationModal}
        show={showConformationModal}
        handleSumit={handleConformationSubmit}
      />

      {/*  Complete modal */}
      <CompleteModal
        onClose={onCloseCompleteModal}
        show={showCompleteModal}
        handleSumit={handleCompleteSubmit}
      />
    </div>
  );
};

export default Payout;
