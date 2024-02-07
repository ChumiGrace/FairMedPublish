import React, { useEffect, useState } from "react";
import Sidebardoc from "../Components/Sidebar/Sidebardoc";
import "./style.css";

function UpdateMedicalRecord() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [medications, setMedications] = useState("");
  const [notes, setNotes] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [patId, setPatId] = useState("");
  const [sendD, setSendD] = useState({ phyId: localStorage.getItem("id") });

  const [user, setUser] = useState({
    id: "",
    email: "",
    name: "",
    phone: "",
  });

  const formData = {
    id: user.id,
    name: name,
    age: age,
    gender: gender,
    bloodType: bloodType,
    diagnosis: diagnosis,
    medications: medications,
    notes: notes,
  };

  const fetch_url = `http://localhost:8000/records/create/`;
  const [pat_url, setPat_url] = useState(
    `http://localhost:8000/patient_detail/${patId}`
  );
  const view_url = `http://localhost:8000/records/view/`;
  const send_url = `http://localhost:8000/records/sendid/`;
  const [isAuthorized, setIsAuthorized] = useState(true);
  const token = localStorage.getItem("access_token");
  const id = localStorage.getItem("id");
  const [showRec, setShowRec] = useState(true);
  const phy_url = `http://localhost:8000/physician_profile/${id}/`;

  window.addEventListener("beforeunload", function (e) {
    const confirmationMessage =
      "You have unsaved changes or need authorization. Are you sure you want to leave?";
    e.returnValue = confirmationMessage;
    return confirmationMessage;
  });

  useEffect(() => {
    const senId = async () => {
      try {
        const res = await fetch(send_url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sendD),
        });
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        } else {
          const data = await res.json();
          console.log(data);
        }
      } catch (error) {
        alert(error);
      }
    };
    senId();
  }, []);
  useEffect(() => {
    const fetchPhysician = async () => {
      const res = await fetch(phy_url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP Error! Status: ${res.status}`);
      } else {
        const data = await res.json();
        setPatId(data.allowedPatient);
      }
    };
    fetchPhysician();
  }, [phy_url, token]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(pat_url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        } else {
          const data = await res.json();
          setUser({
            ...user,
            id: data.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
          });

          setIsAuthorized(true);
          pastMedRecs();
        }
      } catch (error) {
        alert(error);
      }
    };
    getUser();
  }, [token, pat_url]);

  // console.log(user);

  const updateMedRec = async () => {
    const res = await fetch(fetch_url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    try {
      if (!res.ok) {
        throw new Error(`HTTP Error! Status: ${res.status}`);
      } else {
        const data = await res.json();
        alert(`You have successfuly created A record!${data}`);
      }
    } catch (error) {
      alert(`Server error: ${error}`);
    }
  };
  console.log(user);

  const [dataId, setDataId] = useState({ id: user.id });
  async function pastMedRecs() {
    const res = await fetch(view_url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataId),
    });
    try {
      if (!res.ok) {
        throw new Error("HTTP Error!");
      } else {
        console.log(await res.json());
      }
    } catch (error) {
      alert(`Server error: ${error}`);
      // setIsFormVisible(false);
      // setShowRec(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateMedRec();
  };

  const handleButtonClick = async () => {
    setIsFormVisible(!isFormVisible);
    pastMedRecs();
    setShowRec(true);
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
    handleSubmit(e);
  };

  return (
    <div className="update-medical-record">
      <div className="sidebar">
        <Sidebardoc />
      </div>
      {isAuthorized && (
        <div className="update-medical-record-main">
          <div className="my-3 p-3 bg-white rounded box-shadow">
            <h6 className="border-bottom border-gray pb-2 mb-0">
              Recent updates
            </h6>
            {showRec && (
              <div>
                <div className="media text-muted pt-3">
                  <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong className="d-block text-gray-dark">Name</strong>
                    Donec id elit non mi porta gravida at eget metus. Fusce
                    dapibus, tellus ac cursus commodo, tortor mauris condimentum
                    nibh, ut fermentum massa justo sit amet risus.
                  </p>
                </div>
                <div className="media text-muted pt-3">
                  <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong className="d-block text-gray-dark">Name</strong>
                    Donec id elit non mi porta gravida at eget metus. Fusce
                    dapibus, tellus ac cursus commodo, tortor mauris condimentum
                    nibh, ut fermentum massa justo sit amet risus.
                  </p>
                </div>
                <div className="media text-muted pt-3">
                  <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong className="d-block text-gray-dark">Name</strong>
                    Donec id elit non mi porta gravida at eget metus. Fusce
                    dapibus, tellus ac cursus commodo, tortor mauris condimentum
                    nibh, ut fermentum massa justo sit amet risus.
                  </p>
                </div>
              </div>
            )}
            <div className="floating-container" onClick={handleModalOpen}>
              <div className="floating-button" onClick={handleButtonClick}>
                +
              </div>
            </div>
          </div>

          {isFormVisible && (
            <div className="medical-record-form-overlay">
              <div className="medical-record-form-container">
                <form
                  className="medical-record-form"
                  onSubmit={handleFormSubmit}
                >
                  <h2 className="medical-record-name">Medical Record Form</h2>
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
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
                  <button type="button" onClick={handleModalClose}>
                    Close
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
      {!isAuthorized && (
        <h2 className="medical-record-name">
          Authorization Required! Please scan Patient's Fingerprint...
        </h2>
      )}
    </div>
  );
}

export default UpdateMedicalRecord;
