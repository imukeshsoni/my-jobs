import React from 'react';
import './styles.css';

import logo from '../../assets/logo.svg';
import image from '../../assets/heroSection.png';
import { Button } from '@mui/material';

function HeroSection() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="company__text">
          <div>Welcome to</div>
          <img src={logo} className="logo" />
          <Button variant="contained">Get Started</Button>
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
