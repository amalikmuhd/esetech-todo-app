import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import API from '../services/API';

import { NewFormInput } from './common/NewFormInput';
import { Loader } from './common/Loader';

import '../styles/login.scss';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const payload = {
    email: email,
    password: password,
  };
  const register = async () => {
    setLoading(true);
    try {
      const response = await API.post('users/register', payload);
      if (response?.data?.message === 'success') {
        window.location = '/';
      }
      setError(response?.data?.message);
    } catch (error) {
      setError(error?.response?.data?.message);
    }
    setLoading(false);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="login-container">
      <div className="login-content">
        <div className="form-contents">
          <p className="tag">Todo App</p>
          <p className="title">Register a new account</p>
          {error && <p className="errorMessage">{error}</p>}

          <div style={{ margin: '10px 0 30px', width: '83%' }}>
            <NewFormInput
              data-testid="email"
              id="email"
              label={'Email'}
              type={'email'}
              onChange={(e) => setEmail(e.target.value)}
            />

            <NewFormInput
              data-testid="password"
              id="password"
              margin={'1.5rem'}
              label={'Password'}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            data-testid="sign"
            className="buttonStyle"
            onClick={() => register()}
            disabled={email.length < 10 || password.length < 5}
          >
            Sign up
          </button>

          <div className="footerLogin">
            <div className="innerContainer">
              <p data-testid="account" className="already">
                Don't have an account?
              </p>
              <Link className="signup" to={'/'}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
