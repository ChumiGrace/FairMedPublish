import React from 'react';
import logo from '../Components/Assets/logo.png'
import './style.css'

function ForgotPassword() {
  return (
    <div className='container forgot-password'>
      <div className='d-flex flex-column gap-4 justify-content-center align-items-center forgotPassword-container'>
        <div className='forgot-password-logo'>
          <img className="navlogo" src={logo} alt="Logo" />
          <span>FairMed</span>
        </div>
        <div className='d-flex gap-3 forgotPassword-command'>
            <div class="blue-line"></div>
            <p>Please enter your email address. You will receive an email message with instructions on how to reset your password.</p>
        </div>
        <div className='forgotPassword-div d-flex flex-column gap-2'>
            <div><h4 className='fs-6'>Enter your email:</h4></div>
            <div>
                <input
                    type="email"
                    className="form-control py-3"
                />
            </div>
            <div>
                <button className='Getpassword-button'>Get New Password</button>
            </div>
        </div>
        <div>
        <a href='/home'><i class="fa fa-arrow-left" aria-hidden="true"> Go to home page</i></a>
        </div>
      </div>

    </div>
  )
}

export default ForgotPassword
