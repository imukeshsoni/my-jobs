import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenericComponent from './Generic';
import Header from './Header';

function ForgotPassword(): JSX.Element {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    navigate('/reset-password');
  };
  return (
    <React.Fragment>
      <Header />
      <GenericComponent>
        <h2>Forgot your password?</h2>
        <form onSubmit={(e) => handleSubmit(e)} className="form">
          <label className="label">
            Enter the email associated with your account and we’ll send you
            instructions to reset your password.
          </label>

          <TextField
            size="small"
            margin="normal"
            variant="outlined"
            fullWidth
            label="Email Address"
            type="email"
            name="email"
            value={email}
            error={emailError !== ''}
            helperText={emailError}
            placeholder="Enter your email"
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <div className="btn__container">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </GenericComponent>
    </React.Fragment>
  );
}

export default ForgotPassword;
