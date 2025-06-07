import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Company from './pages/Company.jsx';
import Inventory from './pages/Inventory.jsx';
import PrintBill from './pages/PrintBill.jsx';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/company" element={<Company />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/printbill" element={<PrintBill />} />
    </Routes>
  );
};

export default App;
