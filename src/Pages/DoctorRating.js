import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../Components/Navbar/Header";
import Placeholder from "../Components/Assets/placeholder.png";
import Footer from "../Components/Footer/Footer";

function DoctorRating() {
  const url = `http://localhost:8000/physicians_reviews_rates/`;
  const [query, setQuery] = useState("");
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

  const sendSearch = async () => {
    const res = await fetch(
      `http://localhost:8000/physicians_reviews_rates/?search=${query}`
    );
    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    } else {
      const data = await res.json();
      setFetchedData(data);
    }
  };
  console.log(fetchedData);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    sendSearch();
  };

  console.log(query);

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
            href={`/view-doctor/${user.id}`}
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
        <Header />
      </div>
      <div className="search ">
        <div className="searchBar-container">
          <i className="fa fa-search" id="searchIcon" />
          <form className="search-form" onSubmit={handleSearch}>
            <input
              className="searchInput"
              onChange={handleSearchChange}
              placeholder="Type to search...."
            />
            <button className="src-btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="card-wrap">
        <CardComponent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DoctorRating;
