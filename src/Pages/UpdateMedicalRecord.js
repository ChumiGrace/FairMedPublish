import React, { useState } from "react";
import Sidebardoc from "../Components/Sidebar/Sidebardoc";
import './style.css';


function UpdateMedicalRecord() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [medications, setMedications] = useState("");
  const [notes, setNotes] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleButtonClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setIsFormVisible(false);
  };

  const handleModalOpen = () => {
    setIsFormVisible(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleModalClose();
  };

  return (
    <div className="update-medical-record">
      <div className="sidebar">
        <Sidebardoc />
      </div>
      <div className="update-medical-record-main">
        <div className="my-3 p-3 bg-white rounded box-shadow">
          <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates</h6>   
          <div className="media text-muted pt-3">
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <strong className="d-block text-gray-dark">Name</strong>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac
              cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
              sit amet risus.
            </p>
          </div>
          <div className="media text-muted pt-3">
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <strong className="d-block text-gray-dark">Name</strong>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac
              cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
              sit amet risus.
            </p>
          </div>
          <div className="media text-muted pt-3">
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <strong className="d-block text-gray-dark">Name</strong>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac
              cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
              sit amet risus.
            </p>
          </div>
          <div className="floating-container" onClick={handleModalOpen}>
            <div className="floating-button" onClick={handleButtonClick}>+</div>
          </div>
        </div>

        {isFormVisible && (
          <div className="medical-record-form-overlay">
            <div className="medical-record-form-container">
              <form className="medical-record-form" onSubmit={handleFormSubmit}>
                <h2 className="medical-record-name">Medical Record Form</h2>
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Age:</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Gender:</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Blood Type:</label>
                  <input
                    type="text"
                    value={bloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Diagnosis:</label>
                  <textarea
                    id="textarea"
                    value={diagnosis}
                    onChange={(e) => setDiagnosis(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Medications:</label>
                  <textarea
                    id="textarea"
                    value={medications}
                    onChange={(e) => setMedications(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Notes:</label>
                  <textarea
                    id="textarea"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleModalClose}>Close</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpdateMedicalRecord;