import React from "react";

import Button from "components/ui/Button";
import FlexWrapper from "components/ui/FlexWrapper";
import Modal from "components/ui/Modal";

const CompleteModal: React.FC<{
  onClose: () => void;
  show: boolean;
  handleSumit: () => void;
}> = ({ onClose, show, handleSumit }) => {
  return (
    <Modal header="Your Capital Program is all set" onClose={onClose} show={show}>
      <div className="description">
        You have successfully set up your capital program. It will remain in
        pending state until we review it internally. This process usually takes
        a few minutes to a couple of hours. Once reviewed, the cash will be
        transferred to your account and you will be notified.
      </div>

      <FlexWrapper align="center" justify="center" mt={2}>
        <Button
          contained
          color="secondary"
          style={{ color: "#000" }}
          onClick={handleSumit}
        >
          View Capital Programs
        </Button>
      </FlexWrapper>
    </Modal>
  );
};

export default CompleteModal;
