import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenericComponent from './Generic';
import Header from './Header';

function SignUp(): JSX.Element {
  const handleSubmit = () => {};

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [skills, setSkills] = useState('');

  return (
    <React.Fragment>
      <Header showLogin={false} />
      <GenericComponent>
        <h2>Signup</h2>
        <form action="" className="form" onSubmit={() => handleSubmit()}>
          <div className="input">
            <label className="label" htmlFor="name">
              Full Name*
            </label>
            <input
              type="text"
              name="name"
              value={name}
              required
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input">
            <label className="label" htmlFor="email">
              Email Address*
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
          <div className="create__password input">
            <div className="input">
              <label className="label" htmlFor="password">
                Create Password*
              </label>
              <input
                type="password"
                name="password"
                value={password}
                required
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input">
              <label className="label" htmlFor="confirmPassword">
                Confirm Password*
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                required
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="input">
            <label className="label" htmlFor="skills">
              Skills*
            </label>
            <input
              type="skills"
              name="skills"
              value={skills}
              required
              placeholder="Enter comma separated skills"
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
          <div className="btn__container">
            <Button variant="contained" type="submit">
              {' '}
              Signup
            </Button>
          </div>
          <div className="form__footer">
            <span className="label">
              Have an account?
              <a href="/login" className="link">
                &nbsp;Login
              </a>
            </span>
          </div>
        </form>
      </GenericComponent>
    </React.Fragment>
  );
}

export default SignUp;
