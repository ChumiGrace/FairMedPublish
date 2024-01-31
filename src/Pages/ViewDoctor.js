import React, { useEffect, useState } from "react";
import Header from "../Components/Navbar/Header";
import Placeholder from "../Components/Assets/placeholder.png";
import "./style.css";
import Footer from "../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

function ViewDoctor() {
  const [profileData, setProfileData] = useState([]);
  const { id } = useParams();
  const [recentReviews, setRecentReviews] = useState([]);
  const [access, setAccess] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: document.title,
        text: "Check out my rating profile!",
        url: window.location.href,
      });
      console.log("Profile shared successfully!");
    } catch (error) {
      console.error("Error sharing profile:", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async (userId) => {
      const res = await fetch(
        `http://localhost:8000/physicians_reviews_rates/${userId}/`
      );
      if (!res.ok) {
        throw new Error(`HTTP Error! Status: ${res.status}`);
      } else {
        const data = await res.json();
        setProfileData(data);
      }
    };
    fetchUserData(id);
  }, [id]);

  useEffect(() => {
    if (profileData.reviews) {
      setRecentReviews(profileData.reviews);
      setAccess(true);
    } else {
      setRecentReviews([
        {
          review: `${profileData.name} does not have any reviews yet!!`,
          patientName: "",
        },
      ]);
      setAccess(false);
    }
  }, [profileData.reviews]);

  console.log(recentReviews);

  const Card = ({ review }) => {
    return (
      <section className="w-50  mx-auto">
        <div className="Reviewer d-flex">
          <img src={Placeholder} alt="Profile Picture" />
          <div>
            <h2 className="fs-5 p-4">{review.patientName}</h2>
          </div>
        </div>
        <div className="text-start pb-1">
          <hr />
          <i className="fa fa-star font fs-5"></i>
          <i className="fa fa-star font fs-5"></i>
          <i className="fa fa-star font fs-5"></i>
          <i className="fa fa-star font fs-5"></i>
          <i className="fa fa-star font fs-5"></i>
        </div>
        <div>
          <p>{review.review}</p>
        </div>
        <div>
          <p className="text-start">Date: </p>
          <hr />
          <button id="shareButton" onClick={handleShare}>
            <i class="fa fa-share-alt"> Share</i>
          </button>
        </div>
      </section>
    );
  };

  // Component that maps over the fetchedData and renders Card components
  const CardComponent = () => {
    return (
      <div>
        {recentReviews.map((review, index) => (
          <Card key={index} review={review} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="main doctorName d-flex">
        <img src={Placeholder} alt="Profile Picture" />
        <h2 className="pt-4 pb-">{profileData.name}</h2>
      </div>
      <div className="text-center theReview">
        <h1 className="fs-5 pt-3 pb-3">Reviews</h1>
        <CardComponent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ViewDoctor;
