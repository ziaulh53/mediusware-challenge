import React from "react";
import { Modal } from "react-bootstrap";
export const ModalC = ({ show, data, setShowCModal }) => {
  return (
    <Modal show={show} onHide={() => setShowCModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Contacts Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-2">
            ID: {data?.id}
        </div>
        <div className="mb-2">
            Country: {data?.country?.name}
        </div>
        <div>
            Phone: {data?.phone}
        </div>
      </Modal.Body>
    </Modal>
  );
};
