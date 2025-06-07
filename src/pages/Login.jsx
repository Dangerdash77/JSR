import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [uniqueId, setUniqueId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (uniqueId && password) {
      navigate('/company');
    } else {
      alert('Invalid login');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <input type="text" placeholder="Unique ID" value={uniqueId} onChange={(e) => setUniqueId(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>

      <div className="login-buttons">
        <button onClick={() => navigate('/')}>Back</button>
        <button onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
