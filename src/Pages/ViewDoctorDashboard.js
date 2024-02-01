import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Placeholder from "../Components/Assets/placeholder.png";
import { useParams } from "react-router-dom";

function ViewDoctorDashboard() {
  const [profileData, setProfileData] = useState([]);
  const { id } = useParams();
  const [recentReviews, setRecentReviews] = useState([]);
  const [access, setAccess] = useState(false);
  const [allowRate, setAllowRate] = useState(false);
  const patId = localStorage.getItem("id");
  const token = localStorage.getItem("access_token");
  const [allowed, setAllowed] = useState("");
  const [rateData, setRateData] = useState({
    physician_id: id,
    patient_id: patId,
    rate: 3,
    review: "",
    entity_type: "physician",
  });
  const pat_url = `http://127.0.0.1:8000/patient_profile/${patId}/`;
  const stars = document.querySelectorAll('.rating input[type="radio"]');
  function handleRatingClick(event) {
    const rating = event.target.value;
    setRateData({
      ...rateData,
      rate: rating,
    });
  }

  stars.forEach((star) => {
    star.addEventListener("click", handleRatingClick);
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRateData({
      ...rateData,
      [name]: value,
    });
  };

  useEffect(() => {
    try {
      if (allowed === parseInt(id)) {
        setAllowRate(true);
      } else {
        setAllowRate(false);
      }
    } catch (error) {
      console.log(error);
    }
  }, [id, allowed]);

  const reviewSubmit = async () => {
    const res = await fetch(`http://127.0.0.1:8000/review/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rateData),
    });
    if (!res.ok) {
      throw new Error("HTTP Error!");
    } else {
      const data = await res.json();
      console.log(data);
    }
  };

  const handleSubmit = () => {
    reviewSubmit();
    const form = document.getElementById("rate-form");
    form.reset();
    window.location.reload();
  };

  useEffect(() => {
    const fetchPatient = async () => {
      const res = await fetch(pat_url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP Error! ${res.status}`);
      } else {
        const data = await res.json();
        console.log(data.allowed_phy);
        setAllowed(data.allowed_phy);
      }
    };
    fetchPatient();
  }, [pat_url, token]);

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
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="media g-mb-30 media-comment">
              <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                <div className="g-mb-15">
                  <h5 className="h5 g-color-gray-dark-v1 mb-0">
                    {review.name}
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
        <Sidebar />
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
                    </strong>
                    {profileData.phone}
                  </li>
                  <li>
                    <strong>
                      <i class="bx bx-envelope"></i>
                    </strong>
                    {profileData.email}
                  </li>
                  <li>
                    <strong>
                      <i class="bx bx-id-card"></i>
                    </strong>
                  </li>
                  <li>
                    <div className="bio">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus ras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rate-review-field ">
                <div className="rate-box">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card-rate">
                        <div className="card-rate-body ">
                          <h4>Rate this doctor</h4>
                          <h6>Tell others what you think </h6>
                          <form id="rate-form">
                            <fieldset className="rating">
                              <input
                                type="radio"
                                disabled={allowRate ? false : true}
                                id="star5"
                                name="rating"
                                defaultValue={5}
                              />
                              <label
                                className="full"
                                htmlFor="star5"
                                title="Awesome - 5 stars"
                              />
                              <input
                                type="radio"
                                disabled={allowRate ? false : true}
                                id="star4half"
                                name="rating"
                                defaultValue="4.5"
                              />
                              <label
                                className="half"
                                htmlFor="star4half"
                                title="Pretty good - 4.5 stars"
                              />
                              <input
                                type="radio"
                                disabled={allowRate ? false : true}
                                id="star4"
                                name="rating"
                                defaultValue={4}
                              />
                              <label
                                className="full"
                                htmlFor="star4"
                                title="Pretty good - 4 stars"
                              />
                              <input
                                type="radio"
                                disabled={allowRate ? false : true}
                                id="star3half"
                                name="rating"
                                defaultValue="3.5"
                              />
                              <label
                                className="half"
                                htmlFor="star3half"
                                title="Meh - 3.5 stars"
                              />
                              <input
                                type="radio"
                                disabled={allowRate ? false : true}
                                id="star3"
                                name="rating"
                                defaultValue={3}
                              />
                              <label
                                className="full"
                                htmlFor="star3"
                                title="Meh - 3 stars"
                              />
                              <input
                                type="radio"
                                disabled={allowRate ? false : true}
                                id="star2half"
                                name="rating"
                                defaultValue="2.5"
                              />
                              <label
                                className="half"
                                htmlFor="star2half"
                                title="Kinda bad - 2.5 stars"
                              />
                              <input
                                type="radio"
                                disabled={allowRate ? false : true}
                                id="star2"
                                name="rating"
                                defaultValue={2}
                              />
                              <label
                                className="full"
                                htmlFor="star2"
                                title="Kinda bad - 2 stars"
                              />
                              <input
                                type="radio"
                                disabled={allowRate ? false : true}
                                id="star1half"
                                name="rating"
                                defaultValue="1.5"
                              />
                              <label
                                className="half"
                                htmlFor="star1half"
                                title="Meh - 1.5 stars"
                              />
                              <input
                                type="radio"
                                disabled={allowRate ? false : true}
                                id="star1"
                                name="rating"
                                defaultValue={1}
                              />
                              <label
                                className="full"
                                htmlFor="star1"
                                title="Sucks big time - 1 star"
                              />
                              <input
                                type="radio"
                                disabled={allowRate ? false : true}
                                id="starhalf"
                                name="rating"
                                defaultValue="0.5"
                              />
                              <label
                                className="half"
                                htmlFor="starhalf"
                                title="Sucks big time - 0.5 stars"
                              />
                              <input
                                type="radio"
                                disabled={allowRate ? false : true}
                                className="reset-option"
                                name="rating"
                                defaultValue="reset"
                              />
                            </fieldset>
                            <div class="form-group">
                              <h4>Leave a review</h4>
                              <textarea
                                name="review"
                                onChange={handleChange}
                                id=""
                                placeholder={
                                  allowRate
                                    ? ""
                                    : "You are not allowed to rate!"
                                }
                                msg
                                cols="30"
                                disabled={allowRate ? false : true}
                                rows="5"
                                class="form-control"
                              ></textarea>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={allowRate ? false : true}
                  className="btn btn-primary "
                >
                  Submit
                </button>
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

export default ViewDoctorDashboard;
