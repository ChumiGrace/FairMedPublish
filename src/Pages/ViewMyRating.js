import React, { useEffect, useState } from "react";
import Sidebardoc from "../Components/Sidebar/Sidebardoc";
import Placeholder from "../Components/Assets/placeholder.png";
import { useParams } from "react-router-dom";

function ViewMyRating() {
  const [profileData, setProfileData] = useState([]);
  const { id } = useParams();
  const [recentReviews, setRecentReviews] = useState([]);
  const [access, setAccess] = useState(false);

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
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="media g-mb-30 media-comment">
              <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                <div className="g-mb-15">
                  <h5 className="h5 g-color-gray-dark-v1 mb-0">
                    {review.patientName}
                  </h5>
                  <span className="g-color-gray-dark-v4 g-font-size-12">
                    <i className="fa fa-star font fs-5"></i>
                    <i className="fa fa-star font fs-5"></i>
                    <i className="fa fa-star font fs-5"></i>
                    <i className="fa fa-star font fs-5"></i>
                    <i className="fa fa-star font fs-5"></i>
                  </span>
                </div>
                <p>{review.review}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <Sidebardoc />
      </div>
      <div className="view-doctor-dashboard-content">
        <div className="container">
          <div className="col">
            <div className="row-lg-6 row-md-12 mb-4 mb-md-0  d-flex  justify-content-center card card-rating">
              <div className="rate-header-left d-flex gap-3 p-3 doctorName">
                <img src={Placeholder} alt="Profile Picture" />
                <div>
                  <h2 className="pt-4 pb-0">{profileData.name}</h2>
                  <p>
                    <i className="fa fa-star font fs-5"></i>
                    {profileData.rate}
                  </p>
                </div>
              </div>
              <hr className="mx-3" />
            </div>
            <div className="row-lg-6 row-md-12 d-flex flex-row flex-wrap  card p-3 card-rating">
              <div className="contact-info">
                <ul className="list-unstyled">
                  <li>
                    <strong>
                      <i class="bx bx-user"></i>
                    </strong>{" "}
                    {profileData.name}
                  </li>
                  <li>
                    <strong>
                      <i class="bx bx-phone"></i>
                    </strong>{" "}
                    {profileData.phone}
                  </li>
                  <li>
                    <strong>
                      <i class="bx bx-envelope"></i>
                    </strong>{" "}
                    {profileData.email}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="review-box  d-flex flex-column align-items-center">
          <h3 className="p-3 text-center ">Reviews</h3>
          <CardComponent />
        </div>
      </div>
    </div>
  );
}

export default ViewMyRating;
