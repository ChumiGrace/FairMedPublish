import React, { useEffect, useState } from "react";
import Profile from "../Components/Profile/Profile";
import Sidebardoc from "../Components/Sidebar/Sidebardoc";

function DoctorDashboard() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("access_token");
  const id = localStorage.getItem("id");
  const url = `http://localhost:8000/physician/${id}/`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(JSON.parse(data.recent_reviews));
      });
  }, [token, url]);

  console.log(data);

  const Card = ({ rev }) => (
    <div class="card-body pt-0">
      <div className="widget">
        <div className="widget-title-wrapper">
          <div className="widget-date-primary">
            <span className="widget-date-day">date</span>
            <span className="widget-date-month">month</span>
          </div>
          <div className="widget-info">
            <span className="widget-49-pro-title">{rev.patientName}</span>
            <span className="widget-time">hola como estas</span>
          </div>
        </div>
        <div className="widget-info">{rev.review}</div>
        <div className="widget-action">
          <a
            href="/rate-review"
            className="btn btn-sm btn-flash-border-primary"
          >
            Go to rate
          </a>
        </div>
      </div>
    </div>
  );

  // Component that maps over the fetchedData and renders Card components
  const CardComponent = () => {
    const list = data
      ? data
      : [
          {
            patientName: "No REVIEWS yet!",
            review: "The reviews will be seen as soon as someone reviews you",
          },
        ];
    return (
      <div>
        {list.map((rev, index) => (
          <Card key={index} rev={rev} />
        ))}
      </div>
    );
  };

  return (
    <div className="con">
      <div className="sidebar-container">
        <Sidebardoc acc="physician" />
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
        </div>

        <div className="profile">
          <Profile user="physician_profile" />
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
