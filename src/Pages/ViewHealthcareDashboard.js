import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar';
import Placeholder from '../Components/Assets/placeholder.png';

function ViewHealthcareDashboard() {
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
  <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0  d-flex align-items-center justify-content-center card">
          <div className='rate-header-left d-flex gap-3 p-3 doctorName'>
          <img src={Placeholder} alt="Profile Picture" />
          <div>
            <h2 className="pt-4 pb-0">Healthcare</h2>
            <p>Average Rating</p>
          </div>
    </div>
      <div className="contact-info">
        <ul className="list-unstyled">
          <li>
            <strong>Name:</strong> John Doe
          </li>
          <li>
            <strong>Telephone:</strong> 123-456-7890
          </li>
          <li>
          <a href="https://www.bing.com/search?q=addis+ababa+hospital+location&cvid=1911003824f1490c82bd0a693c3eede4&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBAAGEDSAQkxMjkxMmowajmoAgCwAgA&FORM=ANAB01&PC=ACTS" target="_blank"><i class="fa fa-map-marker" aria-hidden="true"><strong> Location</strong></i></a>
          </li>
          <li>
            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.</strong> 
          </li>
        </ul>
      </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex  justify-content-center card p-3">
          <div className='rate-box'>
    <div className="row">
    <div className="col-md-6">
      <div className="card-rate">
        <div className="card-rate-body ">
          <h3>Rate this Healthcare</h3>
          <h6>Tell others what you think </h6>
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
        <div className='review-box'>
          <h3>Write review</h3>
            <textarea></textarea>
        </div>
        <button className='btn btn-primary '>Submit</button>
      </div>


    <div className='rate-review-field '>
 
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

export default ViewHealthcareDashboard
