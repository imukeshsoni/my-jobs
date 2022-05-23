import React from 'react';
import './styles.css';

import logo from '../../assets/logo.svg';
import image from '../../assets/heroSection.png';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="company__text">
          <div>Welcome to</div>
          <img src={logo} className="logo" />
          <Button variant="contained" onClick={(e) => handleClick(e)}>
            Get Started
          </Button>
          <div></div>
        </div>
        <div className="company__image">
          <img src={image} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeroSection;
