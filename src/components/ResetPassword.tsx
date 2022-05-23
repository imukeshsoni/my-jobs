import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenericComponent from './Generic';
import Header from './Header';

function ResetPassword() {
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  let navigate = useNavigate();
  const handleClick = () => {
    if (!password || !confirmPassword) {
      setErrorMessage('All fields are required');
      return;
    }
    navigate('/login');
  };
  return (
    <React.Fragment>
      <Header />
      <GenericComponent>
        <form action="" className="form">
          <h2>Reset Your Password</h2>
          <label className="label" htmlFor="">
            Enter your new password below.
          </label>
          <TextField
            required
            type="password"
            id="outlined-required"
            label="Enter your password"
            size="small"
            fullWidth
            error={errorMessage !== ''}
            margin="normal"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <TextField
            margin="normal"
            type="password"
            required
            id="outlined-required"
            label="Confirm new password"
            size="small"
            fullWidth
            error={errorMessage !== ''}
            helperText={errorMessage}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <div className="btn__container">
            <Button variant="contained" type="submit" onClick={handleClick}>
              Submit
            </Button>
          </div>
        </form>
      </GenericComponent>
    </React.Fragment>
  );
}

export default ResetPassword;
