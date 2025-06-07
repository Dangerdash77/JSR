import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './Home.css';
import company1 from './assets/image.png';
import company2 from './assets/image.png';
import company3 from './assets/image.png';

const Home = () => (
  <div className="home">
    <Navbar />
    <main className="main-content">
      <h1>Welcome to IMS</h1>
      <p>Our platform makes managing industries easy and efficient. From inventory to billing, everything is at your fingertips.</p>
      <section className="partners">
        <h2>Trusted by Companies</h2>
        <div className="logos">
          <img src={company1} alt="Company 1" />
          <img src={company2} alt="Company 2" />
          <img src={company3} alt="Company 3" />
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Home;