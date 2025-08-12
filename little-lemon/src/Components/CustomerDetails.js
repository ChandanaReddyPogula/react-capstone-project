// CustomerDetails.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CustomerDetails.css';

const CustomerDetails = ({ onSubmit }) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !phone || !email || password.length < 6) {
      alert('Please fill all required fields correctly.');
      return;
    }

    onSubmit({
      firstName,
      lastName,
      phone,
      email,
      password,
      specialRequest,
    });

    navigate('/reservations');
  };

  return (
    <div className="customer-form-container">
      <h2>Sign in to collect points</h2>
      <form onSubmit={handleSubmit} className="customer-form">
        <label>
          * First name
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          <small>First name is required</small>
        </label>
        <label>
          * Last name
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          <small>Last name is required</small>
        </label>
        <label>
          * Phone Number
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <small>Phone number is required</small>
        </label>
        <label>
          * Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <small>Email is required</small>
        </label>
        <label className="password-field">
          * Password
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
            <span className="toggle" onClick={() => setShowPassword(!showPassword)}>👁️</span>
          </div>
          <small>6-character password is all you need</small>
        </label>
        <label>
          Add a special request (optional)
          <textarea
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            rows="3"
            placeholder="Add a special request"
          />
        </label>
        <button type="submit" className="continue-btn">Continue</button>
      </form>
    </div>
  );
};

export default CustomerDetails;
