import React, { useEffect, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { api } from "../api";
export const ModalB = ({ handleShowContact, handleCloseModal }) => {
  const [store, setStore] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await api.get("country-contacts/United States", {});
      setAllContacts(res?.results);
      setStore(res?.results);
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

  return (
    <Modal show={true}>
      <Modal.Header>
        <Modal.Title>US Contacts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-center gap-3 mb-3">
          <button
            className="btn btn-md"
            type="button"
            onClick={() => handleShowContact("a")}
            style={{ borderColor: "#46139f", color: "#46139f" }}
          >
            All Contacts
          </button>
          <button
            className="btn btn-md"
            type="button"
            onClick={() => handleShowContact("b")}
            style={{ background: "#ff7f50", color: "#ffff" }}
          >
            US Contacts
          </button>
          <button
            className="btn btn-md"
            type="button"
            onClick={handleCloseModal}
            style={{ borderColor: "#46139f", color: "#46139f" }}
          >
            Close
          </button>
        </div>

        <div>
          <h5>Contact List</h5>

          <div style={{ maxHeight: "400px", overflow: "auto" }}>
            {allContacts?.map((con) => (
              <div className="mb-2" key={con?.id}>
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
    </Modal>
  );
};
