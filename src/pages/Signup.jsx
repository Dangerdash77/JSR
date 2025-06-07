import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [uniqueId, setUniqueId] = useState('');

  const navigate = useNavigate();

  const handleGenerate = () => {
    const companyInitials = company.split(' ').map(word => word[0]).join('').toUpperCase();
    const newId = name.replace(/\s/g, '') + companyInitials + employeeId;
    setUniqueId(newId);

    if (newId && password) {
      setTimeout(() => {
        navigate('/company');
      }, 1000);
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />

      <button onClick={handleGenerate}>Generate Unique ID</button>

      {uniqueId && (
        <p>Your Unique ID: <strong>{uniqueId}</strong></p>
      )}

      <div className="signup-buttons">
        <button onClick={() => navigate('/')}>Back</button>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    </div>
  );
};

export default Signup;
