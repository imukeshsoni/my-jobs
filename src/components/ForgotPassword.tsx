import { Button } from '@mui/material';
import React, { useState } from 'react';
import GenericComponent from './Generic';
import Header from './Header';

function ForgotPassword(): JSX.Element {
  const [email, setEmail] = useState('');
  return (
    <React.Fragment>
      <Header />
      <GenericComponent>
        <h2>Forgot your password?</h2>
        <form action="" className="form">
          <label className="label">
            Enter the email associated with your account and we’ll send you
            instructions to reset your password.
          </label>
          <div className="input">
            <label className="label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              required
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="btn__container">
            <Button variant="contained" type="submit">
              {' '}
              Submit
            </Button>
          </div>
        </form>
      </GenericComponent>
    </React.Fragment>
  );
}

export default ForgotPassword;
