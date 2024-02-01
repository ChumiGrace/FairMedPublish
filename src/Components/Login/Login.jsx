import React, { useState } from 'react';
import '../../Pages/style.css';
import { useNavigate } from 'react-router-dom/dist';

function Login() {
  const [isUsingEmail, setIsUsingEmail] = useState(true);
  const [activeButton, setActiveButton] = useState('');
  const log_url = `http://127.0.0.1:8000/login/${activeButton}/`
  const [isDoctor, setIsDoctor] = useState(false);
  const navigate = useNavigate()

  console.log(activeButton)
  
  
  const [formData, setFormData] = useState({
    email: null,
    phone: null,
    password: null,
  });
  
  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  

  const handleToggleInput = () => {
    setIsUsingEmail(!isUsingEmail);
  };

  const handleDoctorClick = () => {
    setIsDoctor(true);
    setActiveButton('physician');
  };

  const handlePatientClick = () => {
      setIsDoctor(false);
      setActiveButton('patient');
    };

  const handleSubmit = async () => {
    const log = await loginUser()
    if (log){
      navigate(`/${activeButton}-dashboard`)
    } else {
      alert('The credetials are Not correct!')
    }
  }


  const loginUser = async () => {
    try{
    const response = await fetch(log_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json()

    
      localStorage.setItem('access_token',data['token'])
      localStorage.setItem('id', data['id'])

      if (data['token'] !== undefined){
        return true
      } else {
        return false
      }
    }catch(error){
      alert(error)
    }
  }



  return (
    <div>
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
          <div className="login-container col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className=" container">
                <div className="row">
                  <div>{}</div>
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4 text-white">Welcome back!</h3>
                    <h3 className="signup-heading mb-4 text-white">Login as</h3>
                  <div className="mb-4 d-flex gap-2">
                    <button className={`btn btn-lg btn-primary btn-login text-uppercase fw-bold ${activeButton === 'patient' ? 'active' : ''}`} type="button" onClick={handlePatientClick}>
                    Patient
                    </button>
                    <button className={`btn btn-lg btn-primary btn-login text-uppercase fw-bold ${activeButton === 'physician' ? 'active' : ''}`} type="button"  onClick={handleDoctorClick}>
                    Doctor
                    </button>
                  </div>
                    <form id='log-form' onSubmit={handleSubmit}>
                      <div className="form-floating mb-3">
                        {isUsingEmail ? (
                          <input
                            type="email"
                            name ="email"
                            disabled= {activeButton ? false : true}
                            className="form-control"
                            id="floatingInput"
                            onChange={handleChange}
                            placeholder="name@example.com"
                          />
                        ) : (
                          <input
                            type="tel"
                            name='phone'
                            disabled= {activeButton ? false : true}
                            className="form-control"
                            id="floatingInput"
                            placeholder="Phone number"
                            onChange={handleChange}
                          />
                        )}
                        <label htmlFor="floatingInput">
                          {isUsingEmail ? 'Email address' : 'Phone number'}
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          name='password'
                          disabled= {activeButton ? false : true}
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          onChange={handleChange}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <div className="d-grid">
                      <button
                        disabled= {activeButton ? false : true}
                        className="btn btn-lg btn-primary btn-signup text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                        Login
                      </button>
                        <div className="text-center">
                          <a
                            className="small text-white"
                            href="#"
                            onClick={handleToggleInput}
                          >
                            {isUsingEmail
                              ? 'Use Phone Number'
                              : 'Use Email'}
                          </a>
                        </div>
                        <div className="text-center">
                             <a className="small text-white" href="/forgot-password">Forgot password?</a>
                        </div>
                        <div id="emailHelp" class="form-text text-center mt-4 text-white">Not Registered? 
                        <a href="/signup" class="fw-bold text-decoration-none text-info"> Create an Account</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;