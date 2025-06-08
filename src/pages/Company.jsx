import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import './Company.css';
import companyLogo from './assets/image.png'; // placeholder logo image
import Navbar1 from './components/Navbar1';

const CompanyUpdate = () => {
  return (
    <div className="container">
      <Navbar1 />
      <main className="company-content">
        <h1>Company Update</h1>
        <p>Welcome to your company update dashboard. Here you can manage all company-specific settings and information.</p>
        <h3>Comming Soon</h3>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyUpdate;
