import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";

function MyMedicalRecord() {
  const [data, setData] = useState([]);
  const [medRec, setMedRec] = useState([]);
  const token = localStorage.getItem("access_token");
  const id = localStorage.getItem("id");
  const rate_url = `http://localhost:8000/review/recent/`;
  const rec_url = `http://127.0.0.1:8000/patient_profile/${id}/`;
  useEffect(() => {
    try {
      const fetchRecords = async () => {
        const res = await fetch(rec_url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        } else {
          const data = await res.json();
          console.log(data);
          const ls = await data.medical_records;
          if (ls) {
            setMedRec(ls);
          }
        }
      };
      fetchRecords();
    } catch (error) {
      alert(error);
    }
  }, [token, rate_url]);

  const Rec = ({ rec }) => (
    <div class="card-body pt-0">
      <div class="widget">
        <div class="widget-title-wrapper">
          <div class="widget-date-primary">
            <span class="widget-date-day">{rec.time}</span>
            <span class="widget-date-month"></span>
          </div>
          <div class="widget-info">
            <span class="widget-49-pro-title">{rec.name}</span>
            <span class="widget-time">{rec.gender}</span>
          </div>
        </div>
        <ul class="widget-rating">
          <li class="widget-item">
            <span>{`Blood Type: ${rec.bloodType}`}</span>
          </li>
          <li class="widget-item">
            <span>{`Age: ${rec.age}`}</span>
          </li>
          <li class="widget-item">
            <span>{`Medications: ${rec.medications}`}</span>
          </li>
          <li class="widget-item">
            <span>{`Diagnosis: ${rec.diagnosis}`}</span>
          </li>
          <li class="widget-item">
            <span>{`Notes: ${rec.notes}`}</span>
          </li>
          <li class="widget-item">
            <span>Physician Name</span>
          </li>
          <li class="widget-item">
            <span>Healthcare Name</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const RecComponent = () => {
    const lis =
      medRec.length !== 0
        ? medRec
        : [
            {
              time: "No",
              age: null,
              bloodType: null,
              diagnosis: null,
              gender: null,
              medications: null,
              name: "No Medical Records So Far!!",
              notes: null,
            },
          ];
    return (
      <div>
        {lis.map((rec, index) => (
          <Rec key={index} rec={rec} />
        ))}
      </div>
    );
  };
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="my-medical-record-maincontent p-5">
        <div className="medical-record-box">
          <div className="col-lg-6 col-xl-6">
            <h4 className="header-title m-b-30">My Medical Records</h4>
          </div>
          <RecComponent />
        </div>
      </div>
    </div>
  );
}

export default MyMedicalRecord;
