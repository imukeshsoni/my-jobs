import { Avatar, Button, Chip, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenericComponent from './Generic';
import Header from './Header';
import candidate from '../assets/candidate.svg';
import recruiter from '../assets/recruiter.svg';

function SignUp(): JSX.Element {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

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
        <form action="" className="form" onSubmit={(e) => handleSubmit(e)}>
          <span className="label">I'm a*</span>
          <Stack direction="row" marginY={1} spacing={1}>
            <Chip
              icon={<img src={recruiter} />}
              label="Recruiter"
              variant="filled"
              color="primary"
              sx={{ height: 40, padding: 2, borderRadius: 1 }}
            />
            <Chip
              icon={<img src={candidate} />}
              label="Candidate"
              variant="outlined"
              sx={{ height: 40, padding: 2, borderRadius: 1 }}
            />
          </Stack>
          <TextField
            size="small"
            margin="normal"
            type="text"
            name="name"
            value={name}
            required
            fullWidth
            label="Full Name"
            variant="outlined"
            placeholder="Enter your full name"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            size="small"
            margin="normal"
            variant="outlined"
            fullWidth
            label="Email Address"
            type="email"
            name="email"
            value={email}
            required
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="create__password">
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              label="Create Password"
              fullWidth
              type="password"
              name="password"
              value={password}
              required
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              label="Confirm Password"
              fullWidth
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              required
              placeholder="Confirm your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <TextField
            size="small"
            margin="normal"
            variant="outlined"
            label="Skills"
            fullWidth
            type="skills"
            name="skills"
            value={skills}
            placeholder="Enter comma separated skills"
            onChange={(e) => setSkills(e.target.value)}
          />
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
