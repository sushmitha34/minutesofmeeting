// DisclaimerModal.js

import React from "react";
import { Modal, Button } from "semantic-ui-react";
import { useState } from "react";

function DisclaimerModal() {
  const [modalOpen, setModalOpen] = useState(true); // State to control modal open/close

  const handleAgreeClick = () => {
    setModalOpen(false);
    window.location.href = "/home";
  };
  const handleCloseClick = () => {
    setModalOpen(false);
    window.location.href = "/";
  };

  return (
    <Modal className="modal" open={modalOpen} size="tiny">
      <Modal.Header>Disclaimer Policy</Modal.Header>
      <Modal.Content>
        {/* Add the disclaimer text here */}
        <p>This is your disclaimer policy content.</p>
      </Modal.Content>
      <Modal.Actions>
        <Button type="submit" positive onClick={handleAgreeClick}>
          Agree
        </Button>
        <Button type="submit" negative onClick={handleCloseClick}>
          Disagree
        </Button>{" "}
      </Modal.Actions>
    </Modal>
  );
}

export default DisclaimerModal;
