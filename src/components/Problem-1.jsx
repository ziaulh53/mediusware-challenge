import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [inputData, setInputData] = useState({});
  const [data, setData] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };

  // input handle
  const handleInputData = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  // store and update data
  const handleSubmit = (e) => {
    e.preventDefault();
    let prev = [...data];
    const { name, status } = inputData;
    prev.push({ name, status });
    setData(prev);
  };

  const disabled = !inputData?.name || !inputData?.status;

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form className="row gy-2 gx-3 align-items-center mb-4">
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={inputData?.name}
                onChange={handleInputData}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                name="status"
                onChange={handleInputData}
                value={inputData?.status}
              />
            </div>
            <div className="col-auto">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary"
                disabled={disabled}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ name, status }, idx) => (
                <tr key={idx}>
                  <td>{name}</td>
                  <td>{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
