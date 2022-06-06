import styled from "@emotion/styled";
import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

const ModalWrapper = styled("div")<{ show: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  transform: translateY(${(props) => (props.show ? "0" : "-100%")});
  opacity: ${(props) => (props.show ? "1" : "0")};
  padding: 1.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled("div")`
  width: 560px;
  border-radius: 8px;
  position: relative;
  backdrop-filter: blur(5px);
  background: linear-gradient(
    99.55deg,
    rgba(255, 255, 255, 0.28) 0%,
    rgba(255, 255, 255, 0.06) 101.51%
  );
  border: 1px solid ${(props) => props.theme.color.secondary};

  > .content {
    padding: 0.75rem 1.25rem;
  }

  .description {
    color: ${(props) => props.theme.color.primary};
    padding: 1rem 0;
    margin-bottom: 1rem;
  }
`;

const ModalHeader = styled("h2")`
  padding: 0.75rem 1.25rem;
  color: ${(props) => props.theme.color.primary};
  margin-bottom: 0;

  ::after {
    content: "";
    display: block;
    background: ${(props) => props.theme.color.primary};
    height: 3px;
    width: 80px;
    margin-top: 8px;
  }
`;

const node = document.getElementById("modal-root");

interface ModalProps {
  show: boolean;
  header: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ header, children, show, onClose }) => {
  const containerEl: HTMLDivElement = document.createElement("div");

  useEffect(() => {
    node?.appendChild(containerEl);

    return () => {
      node?.removeChild(containerEl);
    };
  }, [containerEl]);

  return ReactDOM.createPortal(
    <ModalWrapper show={show}>
      <ModalContainer className="container">
        <ModalHeader>{header}</ModalHeader>
        <div className="content">{children}</div>
      </ModalContainer>
    </ModalWrapper>,
    containerEl
  );
};

export default Modal;
