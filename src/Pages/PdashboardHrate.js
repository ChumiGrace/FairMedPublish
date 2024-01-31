import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Placeholder from '../Components/Assets/placeholder.png'
function PdashboardHrate() {
  return (
    <div>
       <div>
        <Sidebar />
      </div>
      <div className='search container d-flex gap-5'>
        <div className='searchBar-container'>
            <i className="fa fa-search" id="searchIcon" />
            <input className='searchInput' placeholder="Type to search...." />
        </div>
        <div className='advertiseHealthcare'>
            <a href='/contact'>Advertise your healthcare</a>
        </div>
      </div>
      <section className='container d-flex p-4 gap-5 healthcareProfile-container'>
        <div>
          <img src={Placeholder}  alt="Profile Picture"  />
        </div>
        <div>
          <div className='healthcareName pt-4'> 
            <h2>Ruth General Clinic</h2>
            <div>
              <i className="fa fa-star font fs-5"></i> <a className='text-black text-decoration-none'>4.5 rating</a>
            </div>
          </div>
          <div>
            <button type="button" class="btn btn-danger  btn-lg mt-3 w-100 rounded" ><a className='text-decoration-none text-black'href="/view-healthcare-dashboard">View Profile</a></button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PdashboardHrate
