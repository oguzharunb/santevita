import React from 'react';
import Image from 'next/image';
import SearchIcon from "../images/search-icon.png";
import Logo from "../images/logo.png";

const Navbar = () => {
  return (
<nav className="destop_header navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo"></div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="doctor.html">Doctor</a>
              </li>
              <li className="nav-item">
                <a className="logo_main" href="index.html"><Image height={159} width={159} alt="search" src={Logo}/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="depatments.html">Depatments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog.html">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Image height={22} width={22} alt="search" src={SearchIcon} /></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">LOGIN</a>
              </li>              
            </ul>
          </div>
        </nav>
  )
}

export default Navbar