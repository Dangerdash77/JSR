import React from "react";
import { Link } from "react-router-dom";
import "./Navbar1.css";
import companyLogo from '../assets/image.png'; // placeholder logo image


const Navbar1 = () => {
  return (
    <nav className="company-navbar">
        <img src={companyLogo} alt="Company Logo" className="company-logo" />
        <div className="company-nav-buttons">
          <Link to="/inventory">Inventory</Link>
          <Link to="/printbill">Print Bill</Link>
          <Link to="/company">Company</Link>
          <Link to="/login">Logout</Link>
        </div>
      </nav>
  );
};

export default Navbar1;