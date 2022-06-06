import styled from "@emotion/styled";
import React from "react";

import Button from "components/ui/Button";
import FlexWrapper from "components/ui/FlexWrapper";
import Input from "components/ui/Input";
import Modal from "components/ui/Modal";

const InputField = styled("div")`
  label {
    color: ${(props) => props.theme.color.primary};
    display: block;
    margin-bottom: 1rem;
  }
`;

const ConformationModal: React.FC<{
  onClose: () => void;
  show: boolean;
  handleSumit: () => void;
}> = ({ onClose, show, handleSumit }) => {
  return (
    <Modal header="Name your capital Program" onClose={onClose} show={show}>
      <div className="description">
        Add a name to identify your new capital program
      </div>

      <InputField>
        <label htmlFor="capital">Capital Program name</label>
        <Input id="capital" name="capital" type="text" />
      </InputField>

      <FlexWrapper align="center" justify="center" mt={2}>
        <Button
          contained
          color="secondary"
          style={{ color: "#000" }}
          onClick={handleSumit}
        >
          Confirm Submission
        </Button>
      </FlexWrapper>
    </Modal>
  );
};

export default ConformationModal;
