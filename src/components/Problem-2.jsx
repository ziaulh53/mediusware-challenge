import React, { useEffect, useState } from "react";
import { ModalA } from "./ModalA";
import { ModalC } from "./ModalC";
import { ModalB } from "./ModalB";

const Problem2 = () => {
  const [currentModal, setCurrentModal] = useState("");
  const queryParams = new URLSearchParams(window.location.search);
  const showModal = queryParams.get("open-modal");
  const handleShowContact = (modal) => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    url.searchParams.set("open-modal", modal);
    window.history.pushState(null, null, url.toString());
    setCurrentModal(modal);
  };

  const handleCloseModal = () => {
    queryParams.delete("open-modal");
    window.history.replaceState(null, null, `?${queryParams.toString()}`);
    setCurrentModal("");
  };

  useEffect(() => {
    setCurrentModal(showModal);
  }, [window.location.href]);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={() => handleShowContact("a")}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={() => handleShowContact("b")}
          >
            US Contacts
          </button>
        </div>
      </div>

      {currentModal === "a" && (
        <ModalA
          handleShowContact={handleShowContact}
          handleCloseModal={handleCloseModal}
        />
      )}
      {currentModal === "b" && (
        <ModalB
          handleShowContact={handleShowContact}
          handleCloseModal={handleCloseModal}
        />
      )}
      {currentModal === "c" && <ModalC />}
    </div>
  );
};

export default Problem2;
