import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Placeholder from "../Components/Assets/placeholder.png";
function PdashboardHrate() {
  const url = `http://localhost:8000/hcs_reviews_rates/`;
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
        });
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        } else {
          const data = await res.json();
          setFetchedData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url]);

  console.log(fetchedData);

  const Card = ({ user }) => (
    <section className="mt-5 container doctorProfile-container">
      <div className="container p-3 text-center">
        <div className="docName">
          <h2>{user.name}</h2>
          <div>
            <i className="fa fa-star font fs-5"></i>
            <a className="text-black text-decoration-none">{user.av_rate}</a>
          </div>
        </div>
        <div>
          <img src={Placeholder} alt="Profile Picture" />
        </div>
      </div>
      <div className="text-center pb-3">
        <button
          type="button"
          className="btn btn-danger  btn-lg mt-3 w-100 rounded"
        >
          <a
            className="text-decoration-none text-black"
            href={`/view-healthcare-dashboard/${user.id}`}
          >
            View Profile
          </a>
        </button>
      </div>
    </section>
  );

  // Component that maps over the fetchedData and renders Card components
  const CardComponent = () => {
    return (
      <div>
        {fetchedData.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="search container d-flex gap-5">
        <div className="searchBar-container">
          <i className="fa fa-search" id="searchIcon" />
          <input className="searchInput" placeholder="Type to search...." />
        </div>
        <div className="advertiseHealthcare">
          <a href="/contact">Advertise your healthcare</a>
        </div>
      </div>
      <CardComponent />
    </div>
  );
}

export default PdashboardHrate;
