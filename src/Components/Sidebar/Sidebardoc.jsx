import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import './Sidebar.css';

function LogoutPopup({ onConfirm, onCancel }) {
  return (
    <div className="popup">
      <div className="popup_content">
        <h4>Are you sure you want to log out?</h4>
        <div className="popup_buttons">
          <button className="popup_button" onClick={onConfirm}>OK</button>
          <button className="popup_button" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

function Sidebar( { id } ) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = (event) => {
    const navLinks = document.querySelectorAll('.nav_link');
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });

    const clickedLink = event.currentTarget;
    clickedLink.classList.add('active');
  };

  const handleLogout = () => {
    setShowPopup(true);
  };

  const handleLogoutConfirm = () => {
    window.location.href = '/home';
  };

  const handleLogoutCancel = () => {
    setShowPopup(false);
  };

  const handleLogoClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="sidebar">
      <header className="header-sidebar" id="header">
        <div className="header_toggle">
          <i
            className={`bx ${isNavOpen ? 'bx-x' : 'bx-menu'}`}
            onClick={toggleNavbar}
            id="header-toggle"
          ></i>
        </div>
      </header>
      <div className={`l-navbar ${isNavOpen ? 'show' : ''}`} id="nav-bar">
        <nav className="nav-sidebar">
          <div>
            <a href="#" className="nav_logo" onClick={handleLogoClick}>
              <img className="navlogo-sidebar" src={logo} alt="Logo" />
              <span className="nav_logo-name">
                FairMed <i className="bx bx-x fs-3"></i>
              </span>
            </a>
            <div className="nav_list">
              <a href="/physician-dashboard" className="nav_link" onClick={handleLinkClick}>
                <i className="bx bx-grid-alt nav_icon"></i>
                <span className="nav_name">Dashboard</span>
              </a>
              <a href="/update-medical-record" className="nav_link " onClick={handleLinkClick}>
                <i className="bx bx-id-card nav_icon"></i>
                <span className="nav_name">Medical Record</span>
              </a>
              <a href={`/view-my-rating/${id}`} className="nav_link " onClick={handleLinkClick}>
                <i className="bx bx bx-star"></i>
                <span className="nav_name">My Rates and Reviews</span>
              </a>
              <a href="/supportDoc" className="nav_link " onClick={handleLinkClick}>
                <i className="bx bx-question-mark nav_icon"></i>
                <span className="nav_name">Support</span>
              </a>
            </div>
          </div>
          <a href="#" className="nav_link" onClick={handleLogout}>
            <i className="bx bx-log-out nav_icon text-danger"></i>
            <span className="nav_name text-danger ">Log Out</span>
          </a>
        </nav>
      </div>
      {showPopup && (
        <LogoutPopup onConfirm={handleLogoutConfirm} onCancel={handleLogoutCancel} />
      )}
    </div>
  );
}

export default Sidebar;