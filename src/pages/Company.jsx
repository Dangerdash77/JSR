// src/pages/CompanyUpdate.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Company.css';
import companyLogo from './assets/image.png'; // placeholder logo image
import Footer from './components/Footer.jsx';

const CompanyUpdate = () => {
  return (
    <div className="company-update">
      <nav className="company-navbar">
        <img src={companyLogo} alt="Company Logo" className="company-logo" />
        <div className="company-nav-buttons">
          <Link to="/inventory">Inventory</Link>
          <Link to="/printbill">Print Bill</Link>
          <Link to="/company">Company</Link>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      <main className="company-content">
        <h1>Company Update</h1>
        <p>Welcome to your company update dashboard. Here you can manage all company-specific settings and information.</p>
      </main>

      <Footer company="Your Company Name" />
    </div>
  );
};

export default CompanyUpdate;
