import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar';
import Placeholder from '../Components/Assets/placeholder.png';

function ViewDoctorDashboard() {
    const handleShare = async () => {
        try {
          await navigator.share({
            title: document.title,
            text: 'Check out my rating profile!',
            url: window.location.href,
          });
          console.log('Profile shared successfully!');
        } catch (error) {
          console.error('Error sharing profile:', error);
        }
      };
    
  return (
    <div>
      <div>
    <Sidebar />
  </div>
    <div className='view-doctor-dashboard-content'>
    <div className='main doctorName d-flex gap-3' >
    <img src={Placeholder} alt="Profile Picture" />
    <h2 className='pt-4 pb-'>Doctor</h2>
  </div>
  <div className='rate-box'>
  <div className="row">
    <div className="col-md-6">
      <div className="card-rate">
        <div className="card-rate-body text-center">
        <h1>4.5</h1> 

          <fieldset className="rating">
            <input type="radio" id="star5" name="rating" defaultValue={5} />
            <label className="full" htmlFor="star5" title="Awesome - 5 stars" />
            <input
              type="radio"
              id="star4half"
              name="rating"
              defaultValue="4.5"
            />
            <label
              className="half"
              htmlFor="star4half"
              title="Pretty good - 4.5 stars"
            />
            <input type="radio" id="star4" name="rating" defaultValue={4} />
            <label
              className="full"
              htmlFor="star4"
              title="Pretty good - 4 stars"
            />
            <input
              type="radio"
              id="star3half"
              name="rating"
              defaultValue="3.5"
            />
            <label
              className="half"
              htmlFor="star3half"
              title="Meh - 3.5 stars"
            />
            <input type="radio" id="star3" name="rating" defaultValue={3} />
            <label className="full" htmlFor="star3" title="Meh - 3 stars" />
            <input
              type="radio"
              id="star2half"
              name="rating"
              defaultValue="2.5"
            />
            <label
              className="half"
              htmlFor="star2half"
              title="Kinda bad - 2.5 stars"
            />
            <input type="radio" id="star2" name="rating" defaultValue={2} />
            <label
              className="full"
              htmlFor="star2"
              title="Kinda bad - 2 stars"
            />
            <input
              type="radio"
              id="star1half"
              name="rating"
              defaultValue="1.5"
            />
            <label
              className="half"
              htmlFor="star1half"
              title="Meh - 1.5 stars"
            />
            <input type="radio" id="star1" name="rating" defaultValue={1} />
            <label
              className="full"
              htmlFor="star1"
              title="Sucks big time - 1 star"
            />
            <input
              type="radio"
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
              className="reset-option"
              name="rating"
              defaultValue="reset"
            />
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
  <div className='text-center theReview'>
    <h1 className='fs-5 pt-3 pb-3'>Reviews</h1>
    <section className='w-50  mx-auto'>
      <div className='Reviewer d-flex'>
        <img src={Placeholder} alt="Profile Picture" />
        <div>
          <h2 className='fs-5 p-4'>Some Name</h2>
          
        </div>
      </div>
      <div className='text-start pb-1'>
      <hr />
        <i className="fa fa-star font fs-5"></i>
        <i className="fa fa-star font fs-5"></i>
        <i className="fa fa-star font fs-5"></i>
        <i className="fa fa-star font fs-5"></i>
        <i className="fa fa-star font fs-5"></i>
      </div>
      <div>
        <p>Sara ma gurlll ererer tmechignalesh m name is very good. I have many places to be.</p>
      </div>
      <div>
        <p className='text-start'>Date: </p>
        <hr />
        <button id='shareButton' onClick={handleShare}><i class="fa fa-share-alt" > Share</i></button>
      </div>
    </section>
  </div>
    </div>
  )
}

export default ViewDoctorDashboard