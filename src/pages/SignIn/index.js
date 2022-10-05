import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth.action';
import './style.css';

const SignIn = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    countryCode: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  };

  const handleLogin = () => {
    dispatch(login(user));
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-card">
        <h1 className="card-title">Julaya</h1>

        <input placeholder="Country Code" name="countryCode" value={user.countryCode} onChange={handleChange} />
        <input placeholder="Phone" name="phone" value={user.phone} onChange={handleChange} />
        <input placeholder="Password" name="password" value={user.password} type="password" onChange={handleChange} />

        <button onClick={handleLogin}>Submit</button>
      </div>
    </div>
  )
};

export default SignIn;
