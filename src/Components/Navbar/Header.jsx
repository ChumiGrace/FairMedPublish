import React, { useState } from "react";
import logo from '../Assets/logo.png';
import '../Navbar/Header.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { Route, Link } from 'react-router-dom';


function Header(props) {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Add menuOpen state

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  const handleOpenLoginModal = () => {
    setLoginModalOpen(true);
  };

  const handleCloseSignupModal = () => {
    setSignupModalOpen(false);
  };

  const handleOpenSignupModal = () => {
    setSignupModalOpen(true);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar-header">
        <a href="/home" className="logo">
          <img className="navlogo" src={logo} alt="Logo" />
          <span>FairMed</span>
        </a>
        <nav className={menuOpen ? "header-nav open" : "header-nav"}>
          <ul className="navbar" type="none">
            <li>
              <a href="/home" id="style-2">Home</a>
            </li>
            <li>
              <a href="/doctor-rating" id="style-2">Doctor rating</a>
            </li>
            <li>
              <a href="/healthcare-rating" id="style-2">Healthcare rating</a>
            </li>
            <li>
              <a href="/aboutus" id="style-2">About</a>
            </li>
            <li>
              <a href="/contact" id="style-2">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="registration">
          <a
            href="#"
            className="signin btn btn-success"
            onClick={handleOpenLoginModal}
          >
            <i className="ri-user-line" />
            Log In
          </a>
          <a
            href="#"
            className="btn btn-primary"
            onClick={handleOpenSignupModal}
          >
            Signup
          </a>
          <a href="#" className="bx bx-menu" id="menu-icon" onClick={handleMenuClick} />
        </div>
      </div>

      <Modal
        show={loginModalOpen}
        onHide={handleCloseLoginModal}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <Login />
        </Modal.Body>
        <Modal.Footer />
      </Modal>

      <Modal
        show={signupModalOpen}
        onHide={handleCloseSignupModal}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <SignUp />
        </Modal.Body>
        <Modal.Footer />
      </Modal>

    </>
  );
}

export default Header;