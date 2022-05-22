import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout';
import GenericComponent from './Generic';
import Header from './Header';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const loginPageData = [
    {
      type: 'email',
      label: 'Email',
    },
  ];

  const handleSubmit = () => {
    if (!email && !password) {
    }
  };
  return (
    <BaseLayout>
      <Header />
      <GenericComponent>
        <h2>Login</h2>
        <form action="" className="form" onSubmit={() => handleSubmit()}>
          <label htmlFor="email">Email Address</label>
          <div className="input">
            <input
              type="email"
              name="email"
              value={email}
              required
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="forgot__password">
            <label htmlFor="email">Password</label>
            <Link to="/forgotPassword" className="link">
              Forgot your password?
            </Link>
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              value={password}
              required
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="btn__container">
            <Button variant="contained" type="submit">
              {' '}
              Login
            </Button>
          </div>
          <div className="form__footer">
            <span>
              New to MyJobs?
              <Link to="/signup" className="link">
                &nbsp;Create an account
              </Link>
            </span>
          </div>
        </form>
      </GenericComponent>
    </BaseLayout>
  );
}

export default LoginPage;
