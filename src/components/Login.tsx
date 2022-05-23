import { Backdrop, Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '../services/AuthService';
import { StorageService } from '../services/StorageService';
import GenericComponent from './Generic';
import Header from './Header';

function LoginPage() {
  const authService = new AuthService(new StorageService());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showBackDrop, setShowBackDrop] = useState(false);
  let navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: any) => {
    e.preventDefault();

    if (!email) {
      setEmailError('Email is required');
      return false;
    }
    if (!password) {
      setPasswordError('Password is required');
      return false;
    }
    setEmailError('');
    setPasswordError('');
    setShowBackDrop(true);
    loginUser();
  };

  const loginUser = async () => {
    const postData = {
      email: email,
      password: password,
    };
    await authService
      .authUser(postData)
      .then(() => {
        setShowBackDrop(false);
        navigate('/dashboard');
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          setPasswordError('Incorrect email address or password');
          setShowBackDrop(false);
        }
      });
  };
  return (
    <React.Fragment>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showBackDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Header />
      <GenericComponent>
        <h2>Login</h2>
        <form action="" className="form" onSubmit={(e) => handleSubmit(e)}>
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="forgot__password">
            <Link to="/forgot-password" className="link label">
              Forgot your password?
            </Link>
          </div>
          <TextField
            size="small"
            margin="normal"
            variant="outlined"
            label="Password"
            fullWidth
            type="password"
            name="password"
            value={password}
            error={passwordError !== ''}
            helperText={passwordError}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn__container">
            <Button variant="contained" type="submit">
              Login
            </Button>
          </div>
          <div className="form__footer">
            <span className="label">
              New to MyJobs?
              <Link to="/signup" className="link">
                &nbsp;Create an account
              </Link>
            </span>
          </div>
        </form>
      </GenericComponent>
    </React.Fragment>
  );
}

export default LoginPage;
