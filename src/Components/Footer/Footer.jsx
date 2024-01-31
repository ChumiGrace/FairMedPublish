import React from 'react'
import './Footer.css'

function Footer() {
  return (
<div>
  <footer className='d-flex flex-column'>
    <div className='footer-nav'>
      <div className='d-flex flex-column gap-1'>
        <div className='text-white'>
          <h6>Advertise your Healthcare</h6>
        </div>
        <div className='footer-email'>
          <div>
            <input
                type="email"
               className="form-control py-3"
               placeholder="Enter email address"
            />
          </div>
          <div>
            <button className="btn btn-info text-white px-4 py-2"> OK </button>
          </div>
        </div>
      </div>
      <div className='d-flex'>
        <div class="vertical-line"></div>
        <ul>
          <li>Information</li>
          <li><a href="#">About</a></li>
          <li><a href="/FAQ">FAQ</a></li>
        </ul>
      </div>
      <div className='d-flex'>
        <div class="vertical-line"></div>
        <ul>
          <li>Account</li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Signup</a></li>
        </ul>
      </div>
      <div className='d-flex'>
        <div class="vertical-line"></div>
        <ul className='d-flex flex-column gap-1'>
          <li>Socials</li>
          <li><a href="#"><i className="ri-facebook-box-fill" /></a></li>
          <li><a href="#"><i className="ri-instagram-line" /></a></li>
        </ul>
      </div>
    </div>
    <hr className='text-white'></hr>
    <div className='copyright'>
      <p>&copy; 2024 Your Medical Record System. All rights reserved.</p>
    </div>
  </footer>
</div>
  )
}

export default Footer