import React, { useEffect, useState } from "react";
import Profile from "../Components/Profile/Profile";
import Sidebar from "../Components/Sidebar/Sidebar";

function PatientDashboard() {
  const [data, setData] = useState([]);
  const [medRec, setMedRec] = useState([]);
  const token = localStorage.getItem("access_token");
  const id = localStorage.getItem("id");
  const rate_url = `http://localhost:8000/review/recent/`;
  const rec_url = `http://127.0.0.1:8000/patient_profile/${id}/`;
  useEffect(() => {
    try {
      const fetchRecent = async () => {
        const res = await fetch(rate_url, {
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
          const ls = await data.data;
          if (ls.length !== 0) {
            setData(data);
          }
        }
      };
      fetchRecent();
    } catch (error) {
      alert(error);
    }
  }, [token, rate_url]);

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
            <span class="widget-date-day">date</span>
            <span class="widget-date-month">month</span>
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
        <div class="widget-action">
          <a
            href="/my-medical-record"
            class="btn btn-sm btn-flash-border-primary"
          >
            Go to Medical Record
          </a>
        </div>
      </div>
    </div>
  );

  const RecComponent = () => {
    const lis = medRec
      ? medRec
      : [
          {
            age: null,
            bloodType: null,
            diagnosis: null,
            gender: null,
            medications: null,
            name: null,
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

  const Card = ({ review }) => (
    <div class="card-body pt-0">
      <div class="widget">
        <div class="widget-title-wrapper">
          <div class="widget-date-primary">
            <span class="widget-date-day">date</span>
            <span class="widget-date-month">month</span>
          </div>
          <div class="widget-info">
            <span class="widget-49-pro-title">{review.patientName}</span>
            <span class="widget-time">{review.review}</span>
          </div>
        </div>
        <ul class="widget-rating">
          <li class="widget-item">
            <span>{review.rate}</span>
          </li>
        </ul>
        <div class="widget-action">
          <a href="/rate-review" class="btn btn-sm btn-flash-border-primary">
            Go to rate
          </a>
        </div>
      </div>
    </div>
  );

  console.log(data);

  const CardComponent = () => {
    const lis = data.data
      ? data.data
      : [{ rate: "No Data", review: "No Data" }];
    console.log();
    return (
      <div>
        {lis.map((review, index) => (
          <Card key={index} review={review} />
        ))}
      </div>
    );
  };

  return (
    <div className="con">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="dashboard-maincontent d-flex justify-content-evenly flex-wrap ">
        <div className="patient-recent-activity">
          <div className="patient-recent-activity-rating">
            <div class="card card-margin">
              <div class="card-header no-border">
                <h5 class="card-title">My recent ratings and reviews</h5>
              </div>
              <CardComponent />
            </div>
          </div>
          <div className="patient-recent-activity-update">
            <div class="card card-margin">
              <div class="card-header no-border">
                <h5 class="card-title">My recent Medical updates</h5>
              </div>
              <RecComponent />
            </div>
          </div>
        </div>

        <div className="profile">
          <Profile profile="patient_profile" />
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
