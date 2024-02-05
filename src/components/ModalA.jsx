import React, { useEffect, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { api } from "../api";
import { ModalC } from "./ModalC";
export const ModalA = ({ handleShowContact, handleCloseModal }) => {
  const [showCModal, setShowCModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});
  const [store, setStore] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await api.get("contacts");
      setStore(res?.results);
      setAllContacts(res?.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEvenFilter = (e) => {
    let filterData;
    if (e.target.checked) {
      filterData = store.filter((item) => item.id % 2 === 0);
    } else filterData = [...store];

    setAllContacts([...filterData]);
  };

  const handleOpenContact = (data) => {
    setSelectedContact(data);
    setShowCModal(true);
  };

  return (
    <Modal show={true}>
      <Modal.Header>
        <Modal.Title>All Contacts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h5>Contact List</h5>
          <div className="d-flex justify-center gap-3 mb-3">
            <button
              className="btn btn-md"
              type="button"
              onClick={() => handleShowContact("a")}
              style={{ background: "#46139f", color: "#ffffff" }}
            >
              All Contacts
            </button>
            <button
              className="btn btn-md"
              type="button"
              onClick={() => handleShowContact("b")}
              style={{ borderColor: "#ff7f50", color: "#ff7f50" }}
            >
              US Contacts
            </button>
            <button
              className="btn btn-md"
              style={{ borderColor: "#46139f", color: "#46139f" }}
              type="button"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
          <div style={{ maxHeight: "400px", overflow: "auto" }}>
            {allContacts?.map((con) => (
              <div
                className="mb-2"
                key={con?.id}
                onClick={() => handleOpenContact(con)}
              >
                {con?.phone}
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="w-100">
          <Form.Check
            label="Even Only"
            name="group1"
            type="checkbox"
            onChange={handleEvenFilter}
          />
        </div>
      </Modal.Footer>
      <ModalC
        show={showCModal}
        data={selectedContact}
        setShowCModal={setShowCModal}
      />
    </Modal>
  );
};
